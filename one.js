// const perfectNumber = (n) => {
//     z = 0
//     for (let i = 1; i < n; i++) {
//         if (n % i == 0) {
//             // z.push(i)
//             z += i
//         }
//     }
//     return z
// }

// let zx = []
// for (i = 1; i < 1000; i++) {
//     if (perfectNumber(i) === i) zx.push(i)
// }

// console.log(zx);



// if (z.length >= 2) {
//     z = [z[0], z[1], z[2]]
// }



// // f(n) =(2^{n-1})*((2^{n}+1)-1)

// const test = (x) => {
//     let xz = (2 ** (x - 1)) * (2 ** x - 1)
//     return xz
// }

// console.log(test(4));

// console.log(perfectNumber());


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

console.log(isValid('[](){}['));