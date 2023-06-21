// var nums = [3, 2, 2, 3, 5];
// function removeDuplicates(nums) {
//   var answer = [];
//   for (var i = 0; i < nums.length; i++) {
//     if (nums.indexof[i](nums[i]) === i && nums.lastindexof[i](nums[i]) === i) {
//       answer.push(nums[i]);
//     }
//   }
//   return answer;
// }

// var result = removeDuplicates(nums);
// console.log(result);

// var result =(removeDuplicates(nums[i]));
// console.log(result)

// var result = removeElement(nums, val);
// console.log(result);

// var removeElement = function(nums, val) {
//   var answer = [];

//   for (var i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       answer.push(nums[i]);
//       // console.log(nums[i])
//     }
//   }
//   return answer;
// };

// var result = removeElement(nums, val);
// console.log(result);


// nums1 = [1, 2, 3, 0, 0, 0];
// m = 3;
// nums2 = [2, 5, 6];
// n = 3;

// nums3 = [];

// function resultFunction(arr1,arr2){
//     for (let i = 0; i < arr1.length; i++) {
//         if(arr1[i]>0){
//             nums3.push(arr1[i])
//         }
//     }
//     for (let j = 0; j < arr2.length; j++) {
//         if(arr2[j]>0){
//             nums3.push(arr2[j])
//         }
//     }

//     let results = nums3.sort((a,b)=>a-b)
//     return results;
// }

// let res = resultFunction(nums1,nums2);
// console.log(res);

 var nums = [3, 2, 2, 3, 5];

 function removeDuplicates(nums) {
    return Set(nums);
}
 
console.log(removeDuplicates(nums));