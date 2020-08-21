function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateNewArray(size=4, element) {
    let arrayVisuals = "", generatedNumbers = [];
    for(let i = 0;i < size;i++) {
        let randomInteger = getRandomInt(50, 270);

        while(generatedNumbers.includes(randomInteger)) 
            randomInteger = getRandomInt(50, 270);
        
        arrayVisuals += `<div class="c-array" style="height: ${randomInteger * 3}px;width: 100px;">${randomInteger}</div>`;
    }

    element.innerHTML = arrayVisuals;
    return arrayVisuals
}

function quickSort(element) {
    function swap(arrayItem, lI, rI){
        let temp = arrayItem[lI];
        arrayItem[lI] = arrayItem[rI];
        arrayItem[rI] = temp;
    }
    function partition(arrayItem, l, r) {
        let pivot   = arrayItem[Math.floor((r + l) / 2)],
            i       = l,
            j       = r;
        while (i <= j) {
            while (arrayItem[i] < pivot) {
                i++;
            }
            while (arrayItem[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(arrayItem, i, j);
                i++;
                j--;
            }
        }
        return i;
    }
    
    function quickSort(arrayItem, l, r) {
        let I;
        if (arrayItem.length > 1) {
            I = partition(arrayItem, l, r);
            if (l < I - 1) {
                quickSort(arrayItem, l, I - 1);
            }
            if (I < r) {
                quickSort(arrayItem, I, r);
            }
        }
        return arrayItem;
    }

}