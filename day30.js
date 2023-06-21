var array = [{ id: 1, name: "pooja", age: 23},
{ id: 2, name: "vidhi", age: 24  },
{ id: 3, name: "kranti", age: 20  },
{ id: 4, name: 'harshada', age: 20 }];

// --------------------------------callback function(()=>)----------------------------------------
//.FIND

var userId = 4;

var selectedUser = array.find((userdetails) => userdetails.id == userId)
console.log(selectedUser);

var userage = 20 ;

var selectedUser = array.find((userdetails)=> userdetails.age == userage )
console.log(userage)
console.log(selectedUser)

var username = 'pooja';
var selectedUser = array.find((userdetails)=> userdetails.name==username)
console.log(username)
console.log(selectedUser)

//.FINDINDEX

var userName = 'pooja';
var index = array.findIndex((position) => position.name == userName);
console.log(index)

var speceficuser = 'harshada';
var store = array.findIndex ((position)=> position.name ==speceficuser);
console.log(store)

var speceficuser = '20';
var store = array.findIndex ((position)=> position.age ==speceficuser);
console.log(store)
//.MAP

array.map((kuchbhi)=>{
    console.log(kuchbhi)
}
)

//SORTING

var numbers = [1, 8, 9, 15, 3, 7, 37, 2, 6, 1, 6, 7, 9];
console.log(numbers.sort())

var numbers = [1, 8, 9, 15, 3, 7, 37, 2, 6, 1, 6, 7, 9];
console.log(numbers.sort((A, B) => B - A))

var numbers = [1, 8, 9, 15, 3, 7, 37, 2, 6, 1, 6, 7, 9];
console.log(numbers.sort((a, b) => a - b))

//FILTER

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length <10);

console.log(result);





