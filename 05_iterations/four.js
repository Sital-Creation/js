const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);//js shortcut for javascript aisa line by line print hoga    
}
const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(programming[key]);//js,rb line by line print
}
const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

for(const key in map){
   console.log(key);//map ka ittrate nahi ho toh loop mai nahi likh sakte
}
