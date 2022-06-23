const getWordEnd = (specialNum) => {

  switch(true) {
    case (specialNum===1): 
      return 'ие';
    case (specialNum>0 && specialNum<5 || specialNum === 11):
      return 'ия';
    case (specialNum===0 || specialNum>4&&specialNum<10 || specialNum>11&&specialNum<15):
      return 'ий';
    
    default:
      return 'ий';
  }
}

const getSpecialNumber = (arrayOfNum, num) => {
  switch(arrayOfNum.length) {
    case 1: //0-9
    case 2: //10-99
      let number = +num;
      return number;

    case 3: //100-999
      if (+num[1] === 0 && +num[2]!== 0) {
        number = +num[2];
        return number;
      } else if (+num[1] === 0 && +num[2]=== 0) {
        return 0;
      } else {
        number = +(num[1]+num[2]);
        return number;
      }
  }
}



export const getCorrectFormOfWord = (currentlySelectedMessages) => {
  if (currentlySelectedMessages) {

    const num = `${currentlySelectedMessages.length}`;
    const arrayOfNum = num.split('');

    let specialNumber = getSpecialNumber(arrayOfNum, num);
    let wordEnd = getWordEnd(specialNumber);

    return `сообщен${wordEnd}`;
  }
}