export const getIsSelect = (arrId, message) => {
  let selectedId = arrId.find(id => id === message.id);
  if (selectedId === undefined) selectedId = false;
  let isSelect = (selectedId !== false) ? true : false;
  return isSelect;
}