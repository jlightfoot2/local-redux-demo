export const getMax = function(array){
  return Math.max.apply(null,array);
}

export const nextId = (array) => {
  let nextId = array.length ? getMax(array) + 1 : 1;
  return nextId;
}