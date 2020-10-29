// function eatRice(cb) {
//     setTimeout(() => {
//         console.log("Ate rice!")
//         cb()
//     }, 3000)
// }

// function watchTV() {
//     setTimeout(() => {
//         console.log("Watched TV!")
//         readBook()
//     }, 2000)
// }

// function readBook() {
//     setTimeout(() => {
//         console.log("Read TV!")
//     }, 2000)
// }

// eatRice(watchTV)
// // watchTV()
// console.log("Main thread");

// Promise
// var buyCar = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         // do job
//         // resolve();
//         // reject()
//         var number = Math.floor(Math.random()*100) % 2
//         console.log("Number: ", number)
//         if (number == 0) {
//             resolve()
//         } else {
//             reject()
//         }
//     }, 3000);
// });

// var findLover = function () {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve();
//         }, 1000);
//     });
// };

// var marry = function () {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve();
//         }, 2000);
//     });
// }

// buyCar.then(() => {
//     console.log("Promised fulfil - bought a car!", buyCar);
//     // findLover().then(() => {
//     //     console.log("Found the love");
//     //     marry().then(() => {
//     //         console.log("Married!")
//     //     })
//     // });
//     return findLover()
// }).then(() => {
//     console.log("Found the love");
//     return marry()
// }).then(() => {
//     console.log("Married!")
// }).catch(() => {
//     console.log("BuyCare rejected!")
// })

// // findLover.then(() => {
// //     console.log("Found the love");
// // });

// console.log("Main thread");
// console.log("buyCar: ", buyCar)

// ASYNC/AWAIT
function getUserInfo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                username: "Nhan"
            })
        }, 1000)
    })
}

function getPostOfUser(username) {
    return new Promise(resolve => {
        setTimeout(() => {
            if (username == "Nhan") {
                resolve([
                    {
                        post_id: 1,
                        post_name: "Post of Nhan"
                    }
                ])
            } else {
                resolve([])
            }
        }, 2000)
    })
}
// getUserInfo().then((user) => {
//     console.log("Load user: ", user)
//     // getPostOfUser(user.username).then((posts) => {
//     //     console.log("Load posts: ", posts)
//     // })
//     return getPostOfUser(user.username)
// }).then((posts) => {
//     console.log("Load posts: ", posts)
// })

async function loadData() {
    let user = await getUserInfo()
    console.log("Load user done: ", user)
    let posts = await getPostOfUser(user.username)
    console.log("Load Posts: !", posts)
}

console.log("MainThread")
loadData()
