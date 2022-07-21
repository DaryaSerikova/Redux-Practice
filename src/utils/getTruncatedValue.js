export const getTruncatedValue = (value, amountLetters) => { // amountLetters
  console.log('value', value);
  if (value !== null) {
    console.log('Я НЕ NULL')
    console.log('value.length', value.length)
    console.log('value.length > amountLetters:', value.length > amountLetters)

    if (value.length > amountLetters) {
      const newValue = value.substring(0, amountLetters) + "..."; //42
      return newValue;
    } else {
    return value;
    }
  } else {
    return value; // в изначальной версии (с одной переменной value) был только этот
  }
  // пересмотреть else'ы
}