export const arrayUnique = (arr) => {
    return arr.filter(function(item, pos) {
        return arr.indexOf(item) == pos;
    })
};

export const copyArray = (arr) => {
    return arr.map(item => item);
};

export const arrayPushUnique = (item,arr) => {
    arr.push(item);
    return copyArray(arrayUnique(arr));
};

export const arrayRemove = (item,arr) => {
    let uniqueArray = arrayUnique(arr);
    let pos = uniqueArray.indexOf(item)
    if(pos > -1){
      uniqueArray.splice(pos,1);
    }
    return copyArray(uniqueArray);
};