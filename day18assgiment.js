var target = 93;
var array = [3, 54, 65, 32, 6, 23, 56, 76, 17, 100, 7];
for(var i = 0; i <array.length ; i++){
    
    for(var j = 1 ; j < array.length ; j++){
        if(array[i] - array[j]==target){

            console.log(array[i], array[j], "got!")
        }
        // console.log(array[i], " - ", array[j], " = " ,array[i] - array[j])
    }
}

var target = 93;
var array = [3, 54, 65, 32, 6, 23, 56, 76, 17, 100, 7, 91,1,1];

for (var i = 0; i < array.length; i++) {
    // console.log(array[i])
    for (var j = i + 1; j < array.length; j++) {  
        for (var k = j + 1; k < array.length; k++) {

            if (array[i] + array[j] + array[k] == target) {
                console.log(array[i], array[j], array[k],"got!")
            }
            //  console.log(array[i], " + ", array[j], " = " ,array[i] + array[j] +array[k])
        }
    }
}