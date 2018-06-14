// 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

// 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for(let i = 0 , len = nums.length ; i < len ; i++) {
//         for(let j = 0 ; j < i ; j++) {
//             if(nums[i] + nums[j] === target) {
//                 return [j,i]
//             }
//         }
//     }
// }


var twoSum = (nums,target) => {
    var hash = {}
    for(var i = 0 ,len = nums.length ; i < len ; i++) {
        var num = nums[i]
        if(hash[num]) { //hash[num不存在]
            return [hash[num],i]
        }else {
            hash[target - num] = i
        }
    }
    return []
}

console.log(twoSum([3,5,7,8],8))