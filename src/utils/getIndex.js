import { getCurrentMessageInfo } from "./getCurrentMessageInfo";

export const getIndex = (id, array) => {
  let currentMessageInfo = getCurrentMessageInfo(id, array);
  // console.log(id, array);
  // console.log('cmi', currentMessageInfo);
  const index = array.indexOf(currentMessageInfo);
  return index;
};