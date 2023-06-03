

var target = 93;
var array = [3, 54, 65, 32, 6, 23, 56, 76, 17, 100, 7, 91, 1, 1];

for  ( var i=0 ; i < array.length -2 ; i++){

   

    for ( var j= i+ 1 ; j < array.length - 1 ; j++){

        // console.log(array[i],"- array[i]",array[j],"- array[j]")

        // console.log( array[i]+ array[j] ,"total" , target)

        if(array[i]+array[j]==target){
            console.log(array[i], array[j], "got the answer")
        }
    }



}