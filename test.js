var array=[1,2,3,4]
for (var index = 0; index < array.length; index++) {
    (function (index) {
        setTimeout(() => {
    console.log(index);
}, 100);
    })(index)

}
// console.log(index);