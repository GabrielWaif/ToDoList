const formatDigit = (digit) => {
  digit = String(digit);
  if (digit.length === 1) {
    return `0${digit}`;
  }
  return digit;
};

const dateManipulation = {
  toDateValue: (dateObject) => {
    return `${dateObject.getFullYear()}-${formatDigit(
      dateObject.getMonth() + 1
    )}-${formatDigit(dateObject.getDate())}`;
  },

  showString: (dateObject) => {
    return `${formatDigit(dateObject.getDate())}/${formatDigit(
      dateObject.getMonth() + 1
    )}/${dateObject.getFullYear()} - ${dateObject.getHours()}:${dateObject.getMinutes()}`;
  },

  getDifference : date => {
    return Math.round(((date.getTime() - (new Date()).getTime())/1000)/60);
  },

  differenceToDateString: difference=> {
    const days = Math.floor(difference / (60 * 24))
    const hours = Math.floor((difference - days * (60 * 24)) / 60)
    const minutes = ((difference - days * (60 * 24)) - (hours * 60))
    return `${formatDigit(days)}:${formatDigit(hours)}:${formatDigit(minutes)}`;
  }
};
export default dateManipulation;
