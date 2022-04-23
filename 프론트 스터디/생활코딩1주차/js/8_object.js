let ob1 = {
    key1 : 1,
    key2 : 2,
    key3 : 3,
};

console.log(ob1.key1);
console.log(ob1["key1"]);

let arr = Object.keys(ob1);
console.log(arr);

for (let i=0; i<arr.length; i++)
{
    console.log(arr[i]);
    curkey = arr[i];
    console.log(ob1[curkey]);
}