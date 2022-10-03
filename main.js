var array = [6, 2, 3, 1, 7, 4, 8, 5]

function SortArray(array) {
    let temp = [[0, array.length - 1]];
    while (temp.length > 0) {
        let removed = temp[0];
        temp.splice(0);
        let begin = removed[0];
        let end = removed[1];
        if (begin >= end)
            continue;
        let beginIndex = begin;
        let endIndex = end;

        let pivotIndex = Math.floor((begin + end) / 2);
        let pivot = array[pivotIndex];

        while (true) {
            while (begin < pivotIndex && array[begin] <= pivot) {
                begin++;
            }
            while (end > pivotIndex && array[end] >= pivot) {
                end--;
            }

            if (begin < pivotIndex) {
                if (end > pivotIndex) {
                    swap(array, begin, end);
                } else {
                    swap3(array, begin, end);
                    pivotIndex--;
                }
            } else {
                if (end > pivotIndex) {
                    swap4(array, begin, end);
                    pivotIndex++;
                } else {
                    break;
                }
            }
        }

        if (beginIndex < pivotIndex - 2) {
            temp.push([beginIndex, pivotIndex - 1]);
        } else if (beginIndex === pivotIndex - 2 && array[beginIndex] > array[pivotIndex - 1]) {
            swap(array, beginIndex, pivotIndex - 1);
        }

        if (endIndex > pivotIndex + 2) {
            temp.push([pivotIndex + 1, endIndex]);
        } else if (endIndex === pivotIndex + 2 && array[endIndex] < array[pivotIndex + 1]) {
            swap(array, pivotIndex + 1, endIndex);
        }
    }
}

function swap(array, begin, end) {
    let temp = array[begin];
    array[begin] = array[end];
    array[end] = temp;
}

function swap3(array, begin, end) {
    let temp = array[begin];
    array[begin] = array[end - 1];
    array[end - 1] = array[end];
    array[end] = temp;
}

function swap4(array, begin, end) {
    let temp = array[end];
    array[end] = array[begin + 1];
    array[begin + 1] = array[begin];
    array[begin] = temp;
}

function DrawArray() {
    var wrapper = $(".blocks-wrapper");
    wrapper.html('');
    SortArray(array);
    array.forEach(element => {
        wrapper.append(`<div class="block" id="block-${element}">${element}</div>`);
    });
    wrapper.addClass('reDrawed');

    setTimeout(() => {
        wrapper.removeClass('reDrawed');
    },1000)
}