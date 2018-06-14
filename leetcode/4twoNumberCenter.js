/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var swap = function(arr,index1,index2) {
    let data = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = arr[index1]
}
var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = nums1 === undefined ? [] : nums1.toString() === "" ?  [] : nums1
    nums2 = nums2 === undefined ? [] : nums2.toString() === "" ?  [] : nums2
    
    var arr = nums1.concat(nums2)
    console.log(arr)
    var len = arr.length
    if(len === 0) return
    for(var i = 0 ; i < len ; i++) {

    }
    console.log(arr)
    return len%2===0 ? (arr[len/2]+arr[len/2-1])/2 : arr[(len-1)/2]
};

findMedianSortedArrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],[0,6])