function divide(numerator, denominator) {
    try {
      if (denominator === 0) {
        throw new Error('Ділення на нуль неможливе.');
      }

      if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('Обидва аргументи повинні бути числами.');
      }
  
      const result = numerator / denominator;
      console.log(`Результат: ${result}`)
      return result;
    } catch (err) {
      console.log('Опис помилки:', err.message);
      return null;
    } finally {
      console.log('Робота завершена');
    }
  }
  
  console.log(divide(9, 0));
  console.log(divide('text', 4));
  console.log(divide(25, 5));