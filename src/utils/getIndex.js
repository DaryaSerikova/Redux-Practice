import { getCurrentMessageInfo } from "./getCurrentMessageInfo";


export const getIndex = (id, array) => {
  let currentMessageInfo = getCurrentMessageInfo(id, array); 
  // console.log('currentMessageInfo:', currentMessageInfo)

  const index = array.indexOf(currentMessageInfo);
  // console.log('index', index);
  return index;
}