function getToDo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json());
  }

  function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json());
  }

  const promises = [getToDo(), getUser()];

  Promise.all(promises)
    .then(([todo, user]) => {
      console.log('Отриманий todo:', todo);
      console.log('Отриманий user:', user);
    })
    .catch(error => {
      console.error('Помилка:', error);
    });
  
  Promise.race(promises)
    .then(result => {
      console.log('Перший результат:', result);
    })
    .catch(error => {
      console.error('Помилка:', error);
    });