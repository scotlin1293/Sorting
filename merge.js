function merge() {    

    let array = [];
    let index1 = 0;
    let index2 = 0;
    while ((index1 < array1.length) && (index2 < array2.length)) {
        if (array1[index1] <= array2[index2]) {
            array.push(array1[index1]);
            index1++;
        }
        else {
            array.push(array2[index2]);
            index2++;
        }
    }
    if (index1 === array1.length) {
        array.push.apply(array, array2.slice(index2));
    }
    else {
        array.push.apply(array, array1.slice(index1));
    }

    return (array);
}

function mergeSort() {
    if (array.length <= 1) {
        return (array);
    }
    const mid = Math.floor(array.length/2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));
    return (merge(left, right));
}

module.exports = { merge, mergeSort};