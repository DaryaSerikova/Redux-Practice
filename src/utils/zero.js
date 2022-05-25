let withZero = (num) => num < 10 ? '0' : '';

export const zero = (smth) => {
  return `${withZero(smth)}${smth}`;
}