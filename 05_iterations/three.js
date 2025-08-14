const arr = [1,2,3,4,5]
for (const num of arr){
    console.log(num);//1 to 5 print
}
const greetings = "Hello world!"
for (const greet of greetings){
    console.log(`Each char is ${greet}`)//h e aisa ek ek line print hoga
}
//Map
const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")
console.log(map);
for (const [Key,value]of map){//IN:-India aisa karke baki 3 vline key aur vale print hogi agar key value bracket hoga toh array type line by line print hoga
    console.log(Key,':-',value);
}
const myObject={
    'game1': 'NFS',
    'game2':'Spider'
}
//for (const [Key,value]of map){
  //  console.log(Key,':-',value);// not working bcz object ka concept alag hau
