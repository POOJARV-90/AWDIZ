
var array =[2,3,55,6,67,78,23,5,67,78,43,67,34,6,74,7,45,23,45,78,89,34,23];
var target = 54;

function findnumber(array,target){

    for(var i=0; i< array.length  ; i++){

        // console.log(array[i])
        for(var j=i+1; j< array.length ; j++){

          
            for(var k=j+1; k < array.length ; k++){

                for(var l=k+1; l< array.length ; l++){

                    // console.log(array[i])
                    for(var m=l+1; m< array.length ; m++){

                        // console.log(array[i])
                        if(array[i]+array[j]+array[k]+array[l]+array[m]==target){
                            console.log(array[i],array[j],array[k],array[l],array[m])
                        }
                
                    }
            
                }
        
            }
    
    
        }

    }

}
findnumber(array,target)

var array2=[2,3,55,6,67,78,23,5,67,78,43,67,34,6,74,7,45,23,45,78,89,34,23];
var target2 = 236028;



function findmulti(array2,target2){

    for(var i=0; i< array2.length -1 ; i++){

        // console.log(array[i])
        for(var j=i+1; j< array2.length ; j++){
                   
            if(array2[i]*array2[j]==target2){

                            console.log(array2[i],array2[j])
                        }  
    
        }

    }

}


findmulti(array2,target2)

var array3=[2,3,55,6,67,78,23,5,67,78,43,67,34,6,74,7,45,23,45,78,89,34,23];


function sum(array3){

    for(var i = 0 ; i<array3.length ; i++)  {
        if(array3[i] % 2 ==0){
            console.log(array3[i])
        }

    }

}


 sum(array3)






