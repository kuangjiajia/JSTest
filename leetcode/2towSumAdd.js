/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var dummyHead = new ListNode(0)
    var curr = dummyHead
    var carry = 0
    var sum = 0
    var x = 0, y = 0
    while(l1 !== null || l2 !== null) {
        x = l1 !== null ? l1.val : 0 
        y = l2 !== null ? l2.val : 0 
        sum = carry > 0 ? x + y + carry : x + y 
        carry = Math.floor(sum / 10) // 0
        var nodeVal = sum % 10  // 1
        curr.next = new ListNode(nodeVal) 
        curr = curr.next 
        l1 = l1 !== null ? l1.next : null 
        l2 = l2 !== null ? l2.next : null
    }
    if(carry > 0) {
        curr.next = new ListNode(1)
    }
    return dummyHead.next 
}