


function NameOfFunction (props) {
    console.log(props)
}
// NameOfFunction("hii");
// props = "pooja";

var NameOfFunction2 = (props) => {
    console.log(props)
}
console.log(props)

// NameOfFunction2("Hello")

// var myname = "pooja";
// myname = "vidhi";
// var myname ="vidhi";
// re-declare and re-assign is possible

// console.log(myname)

// -----------------------------

// let myname = "pooja";
// myname = "vidhi";
// let myname ="vidhi";
// re-declare is not possible and re-assign is possible

// console.log(myname)

// -----------------------------

// const myname = "pooja";

// myname = "vidhi"
// console.log(myname)

// re-declare not posssible  and re-assign is  not possible


// ---------------clousure--------------


// function out () {
//     var myMarks = 40;

//     console.log("inside out function")

//     function inside (){

//         console.log("inside inside function ", myMarks)

//     }
//     return inside ;
    
// }
// // out()

// var inout = out();
// console.log(inout())
// // console.log(out());