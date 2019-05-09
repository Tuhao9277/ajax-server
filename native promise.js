
// function Ajax1(resolve, reject) {
//     setTimeout(() => {
//         console.log(111);
//         resolve();
//     }, 1000)
// }
// function Ajax2(resolve, reject) {
//     setTimeout(() => {
//         console.log(222);
//         resolve();
//     }, 1000)
// }
// new Promise(Ajax1)
//     .then(() => {
//         return new Promise(Ajax2);
//      })

/**
 *  @param(function) resolver
 *  _Promise类执行的时候，resolver函数会立即执行，
 * 接受两个参数，分别是resolve 和reject 
 */
class _Promise {
    constructor(resolver) {
        this._status = 'pending';
        this._result = '';
        resolver(this.resolve.bind(this), this.reject);
    }
}

