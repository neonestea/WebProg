'use strict';

function printArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

var arr = [];
var leng = 1000;
for (var i = 0; i < leng; i++) {
    arr.push(Math.floor(Math.random() * 1001));
}

printArr(arr);
var min = 0;
var max = min;
for (var i = 1; i < leng; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
}

console.log("Min = " + min);
console.log("Max = " + max);
console.log("Median = " + (max - min) / 2);


function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function partition(arr, left, right) {
    var pivot = arr[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(arr, left, right) {
    var index;
    if (arr.length > 1) {
        index = partition(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}

var result = quickSort(arr, 0, arr.length - 1);
console.log("Sorted array:");
printArr(result);
printArr(result);