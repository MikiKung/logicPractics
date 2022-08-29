const isValid = (s) => {
    let z = []
    for (i = 0; i < s.length; i++) {
        let nownum = z[z.length - 1]
        if (s[i] == '{' | s[i] == '(' | s[i] == '[') {
            z.push(s[i])
        } else if (nownum == "{" && s[i] == "}" || nownum == "(" && s[i] == ")" || nownum == "[" && s[i] == "]") {
            z.pop()
        } else { return false }
    }
    return z.length ? false : true
}

// console.log(isValid('[](){}['),1);

let mergeTwoLists = (list1, list2) => {
    //     // !solve 1

    //     // const z = []
    //     // list1.forEach(element => {
    //     //     z.push(element)
    //     // });
    //     // list2.forEach(element => {
    //     //     z.push(element)
    //     // });
    //     // return z.sort()

    //     // !solve 2
    //     // return list1.concat(list2).sort()

    //     // !solve 3
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }
    let head = null;
    let temp = head;
    if (list1.val < list2.val) {
        temp = head = new ListNode(list1.val);
        list1 = list1.next;
    } else {
        temp = head = new ListNode(list2.val);
        list2 = list2.next;
    }
    // Loop until any of the list becomes null
    while (list1 && list2) {
        if (list1.val < list2.val) {
            temp.next = new ListNode(list1.val);
            list1 = list1.next;
            temp = temp.next;
        } else {
            temp.next = new ListNode(list2.val);
            list2 = list2.next;
            temp = temp.next;
        }
    }
    while (list1) {
        temp.next = new ListNode(list1.val);
        list1 = list1.next;
        temp = temp.next;
    }
    while (list2) {
        temp.next = new ListNode(list2.val);
        list2 = list2.next;
        temp = temp.next;
    }
    return head;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]), 2);
