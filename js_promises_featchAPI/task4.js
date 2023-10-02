class TodoController {
    async getToDo() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        return data;
      } catch (error) {
        throw error;
      }
    }
  }
  
  class UserController {
    async getUser() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        return data;
      } catch (error) {
        throw error;
      }
    }
  }
  
  const todoController = new TodoController();
  const userController = new UserController();
  
  async function getData() {
    try {
      const [todo, user] = await Promise.all([todoController.getToDo(), userController.getUser()]);
      console.log('Отриманий todo:', todo);
      console.log('Отриманий user:', user);
    } catch (error) {
      console.error('Помилка:', error);
    }
  }
  
  async function getFirstData() {
    try {
      const result = await Promise.race([todoController.getToDo(), userController.getUser()]);
      console.log('Перший результат:', result);
    } catch (error) {
      console.error('Помилка:', error);
    }
  }
  
  getData();
  getFirstData();