// const coding =["js","ruby","java","python","cpp"]
// const values =coding.forEach((item) =>{
// console.log(item);
// return item//forEach value return nahi karta
// })
// console.log(values);
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// //const neNums=myNums.filter((num) => num>4 )//condition num>4
// const neNums=myNums.filter((num) => {
//    return num>4 //scoop open karne se return keyword use karna padega
// })
// console.log(newNums);//[5,6,7,8,9,10]
// const newNums =[]
// myNums.forEach(() =>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);//[5,6,7,8,9,10]
const books =[
    {title:'Book One',gener:'Fiction',publish:1981,edition:2004},
    {title:'Book Two',gener:'Non-Fiction',publish:1992,edition:2008},
    {title:'Book Three',gener:'History',publish:1999,edition:2007},
    {title:'Book Four',gener:'Non-Fiction',publish:1989,edition:2010},
    {title:'Book Five',gener:'Scienece',publish:2009,edition:2014},
    {title:'Book Six',gener:'Fiction',publish:1987,edition:2010},
    {title:'Book Seven',gener:'History',publish:1986,edition:1996},
    {title:'Book Eight',gener:'Scienece',publish:2011,edition:2016},
    {title:'Book Nine',gener:'Non-Fiction',publish:1981,edition:1989},
];
let userBooks = books.filter((bk) => bk.gener==='History')
 userBooks =books.filter((bk)=>{ 
    return bk.publish >=1995 && bk.gener ==="History"})//scoop use karne ke baad return key word use value ajyegi
console.log(userBooks);

