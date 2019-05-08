function Ajax1(resolve, reject) {
    setTimeout(() => {
        console.log(111);
        resolve();
    }, 1000)
}
function Ajax2(resolve, reject) {
    setTimeout(() => {
        console.log(222);
        resolve();
    }, 1000)
}

new Promise(Ajax1)
    .then(() => {
        return new Promise(Ajax2);
     })