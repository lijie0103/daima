let arr = [22,13,55,77,89];
let keys = arr.keys();
let values = arr.values();
let entries = arr.entries();
console.log(keys);
for(let key of keys){
    console.log(key); // 索引
}
console.log(values);
for(let value of values){
    console.log(value);
}
console.log(entries);
for(let entry of entries){
    console.log(entry);
}