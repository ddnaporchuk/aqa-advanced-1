function delayText(text, milliseconds) {
  return new Promise((resolve, reject) => {
    if (milliseconds < 0) {
      reject(new Error("Кількість мілісекунд повинна бути більше 0."));
    } else {
      setTimeout(() => {
        resolve(text);
      }, milliseconds);
    }
  });
}

delayText("Цей текст затримується на 2000 мілісекунд", 2000)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });