/**
 * @param {string} s
 * @return {number}
 */

// var repetStr = str => {
//     isRepet = false
//     for(var i = 0 , len = str.length; i < len ; i++) {
//         if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
//             isRepet = true
//         }
//     }
//     return isRepet
// }
// var lengthOfLongestSubstring = function(s) {
//     var max = 0
//     for(var i = 0, len = s.length ; i < len ; i++) {
//         for(let j = i + 1; j <= len ; j++) {
//             var str = s.slice(i,j) //字符串 
//             if(!repetStr(str)) {
//                 max = Math.max(max,j - i)
//             }
//         }
//     }
//     return max
// };

// mmp 上面的方法时间超了


var lengthOfLongestSubstring = function(s) {
    var max = 0
    ll:for(var i = 0, len = s.length ; i < len ; i++) {
        for(let j = i + 1; j <= len ; j++) {
            var str = s.slice(i,j) //字符串 
            if(str.indexOf(s[j - 1]) === str.lastIndexOf(s[j - 1])) { //不重复
                max = Math.max(max,j - i)
            }else{ //重复
                continue ll
            }
        }
    }
    return max
};