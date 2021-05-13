function bubbleSort() {
    for (let i = array.length; i > 0; i--) {
        let finished = true;
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1];
                array[j + 1] = temp;
                finished = false;
            }
        }
        if (finished) {
            //break;
            return (array);
        }
    }
    return (array);
}

module.exports = bubbleSort;