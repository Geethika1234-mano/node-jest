// const fs = require("fs");
setTimeout(() => {
    console.log("this is setTimeout()")
})

// fs.readFile(__filename, () =>{
//     console.log("this is reda file callback")
// })

// process.nextTick(() => {
//     console.log("this is process.nextTick()")
// })
// Promise.resolve().then(() =>{
//     console.log("this is Promise.resolve().then()")
// })

// setTimeout(() => {
//     console.log("This is setTimeout() 1");
// },1000);
// setTimeout(() => {
//     console.log("This is setTimeout() 2");
//     process.nextTick(() => {
//         console.log("This is process.nextTick() inside setTimeout()")
//     })
// },500);
// setTimeout(() => {
//     console.log("This is setTimeout() 3");
// },0);

// process.nextTick(()=>{
//     console.log("This is process.nextTick() 1")
// })
// process.nextTick(()=>{
//     console.log("This is process.nextTick() 2")
//     process.nextTick(() => {
//         console.log("This is process.nextTick() inside process.nextTick()")
//     })
// })
// process.nextTick(()=>{
//     console.log("This is process.nextTick() 3")
// })


// Promise.resolve().then(()=>{
//     console.log("This is Promise.resolve().then() 1")
// })
// Promise.resolve().then(()=>{
//     console.log("This is Promise.resolve().then() 2")
//     process.nextTick(() => {
//         console.log("This is process.nextTick() inside Promise.resolve().then()")
//     })
// })
// Promise.resolve().then(()=>{
//     console.log("This is Promise.resolve().then() 3")
// })

//=====================================================//
// process.nextTick(()=>{
//     console.log("This is process.nextTick() 1")
// })
// process.nextTick(()=>{
//     console.log("This is process.nextTick() 2")
//     process.nextTick(() => {
//         console.log("This is process.nextTick() inside process.nextTick()")
//     })
// })
// process.nextTick(()=>{
//     console.log("This is process.nextTick() 3")
// })


// Promise.resolve().then(()=>{
//     console.log("This is Promise.resolve().then() 1")
// })
// Promise.resolve().then(()=>{
//     console.log("This is Promise.resolve().then() 2")
//     process.nextTick(() => {
//         console.log("This is process.nextTick() inside Promise.resolve().then()")
//     })
// })
// Promise.resolve().then(()=>{
//     console.log("This is Promise.resolve().then() 3")
// })

//=====================================================//

// Promise.resolve().then(()=>{
//     console.log("This is Promise.resolve().then() 1")
// })

// process.nextTick(()=>{
//     console.log("This is process.nextTick() 1")
// })

//=====================================================//
// console.log("console log 1")
// process.nextTick(()=>{
//     console.log("This is process.nextTick() 1")
// })
// console.log("console log 2")

//promise queue
// Promise.resolve().then(()=>{
//     console.log("This is Promise.resolve().then() 1")

// })
