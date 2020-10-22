module.exports = function reverse(n) {
    let arr = n.toString().split(""),
        extraSym = "";

    +arr[0] ? extraSym = '' : arr.shift();

    return `${extraSym}${arr.reverse().join("")}`;
}
