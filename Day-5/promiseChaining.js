new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("hello")
    }, 5000);
}).then(function (result) {
    console.log(result); // 10
    return result * 2;
}).then(function (result) {
    console.log(result); // 20
    return result * 2;

}).then(function (result) {
    console.log(result); // 40
    return result * 2;
}).catch(function (error) {
    console.log(error);

})