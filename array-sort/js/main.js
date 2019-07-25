function customSort(array) {
    var frequency = {};
    var sortAble = [];
    var newArr = [];

    array.forEach(function(value) { 
        if ( value in frequency )
            frequency[value] = frequency[value] + 1;
        else
            frequency[value] = 1;
    });
    

    for(var key in frequency){
        sortAble.push([key, frequency[key]])
    }

    sortAble.sort(function(a, b){
        return b[1] - a[1]
    })

    
    sortAble.forEach(function(obj){
        for(var i=0; i < obj[1]; i++){
            newArr.push(obj[0]);
        }
    })
    return newArr;
    
}

console.log(customSort([4,5,6,5,4,3]));