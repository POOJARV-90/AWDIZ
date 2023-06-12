// var givenArray = [23,45,56,67,23,56,68,34,4556,78,655,23,568787,89845,343,54576,7873,323,54,636,6836,575];
// // find numbers who odd from given array and return array with those number... 

// function oddnum(givenArray){

//     var result = [];

//     for (var i =0; i <=givenArray.length; i++) {
//         if(givenArray[i] % 2 ==0){
//             // console.log(givenArray[i])
//             result.push(givenArray[i])
//         }
//     }
//     console.log(result)



// }

// oddnum(givenArray)


// var givenArray = [23,45,56,67,23,56,68,34,4556,78,655,23,568787,89845,343,54576,7873,323,54,636,6836,575];
// // find numbers who odd from given array and return array with those number... 

// function oddnum(givenArray){

//     var result = [];

//     for (var i =0; i <=givenArray.length; i++) {
//         if(givenArray[i] % 2 ==0 & (givenArray[i] % 2 ==0){
//             // console.log(givenArray[i])
//             result.push(givenArray[i])
//         }
//     }
//     console.log(result)



// }

// oddnum(givenArray)

// Q.Find numbers who are divisible by 2, 5, and 10 from given range,
//     then use that array to make new array with second element of array.
// (note - use reverse for loop)


var start = 8723;
var end = 6567;

function twoStage(start,end) {

    var filteredArray =[]

    var result =[]

    for (var i = start; i >= end; i--) {

        if ( i % 2 == 0 ) {

                        // filteredArray.push(i)
                        // console.log(i)
                        if ( i % 5 == 0 ) {
                            
                            if ( i % 10 == 0 ) {
                            
                            filteredArray.push(i)
                        // console.log(i)
                            result.pop(filteredArray ,"result")

                            
                            }

                            
                             }



                      }

        
      
     }

     console.log(filteredArray)
     console.log(result)


 }

 twoStage(start,end)



































