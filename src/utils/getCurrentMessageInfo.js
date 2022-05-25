export const getCurrentMessageInfo = (id, array) => (
  array.filter((elem) => (elem.id === id))[0]
)