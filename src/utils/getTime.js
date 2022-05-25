import { zero } from "./zero";

export const getTime = () => {
  
  const date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let newTime = `${hours}:${zero(minutes)}:${zero(seconds)}`;


  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  
  const newDate = `${zero(day)}.${zero(month)}.${year}`;

  return {
    time: newTime,
    date: newDate
  };
}