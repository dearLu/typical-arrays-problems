exports.min = function min(array) {
    let min;

    if (!isArray(array)) return 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof min === "undefined") {
            min = array[i];
        }
        if (min > array[i + 1]) {
            min = array[i + 1];
        }
    }

    return min;
};

exports.max = function max(array) {
    let max;

    if (!isArray(array)) return 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof max === "undefined") {
            max = array[i];
        }
        if (max < array[i + 1]) {
            max = array[i + 1];
        }
    }

    return max;
};

exports.avg = function avg(array) {
    let sum = 0;

    if (!isArray(array)) return 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let result = sum / array.length;

    return result;
};

function isArray(array) {
    if (Array.isArray(array) && array.length) {
        return true;
    }
    return false;
}
