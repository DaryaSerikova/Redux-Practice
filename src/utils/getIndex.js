import { getCurrentMessageInfo } from "./getCurrentMessageInfo";

export const getIndex = (id, array) => {

  let currentMessageInfo = getCurrentMessageInfo(id, array);
  const index = array.indexOf(currentMessageInfo);
  
  return index;
};