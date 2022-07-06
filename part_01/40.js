// spread operator

// The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.

const array1=[1,2,3];
const array2=[4,5,6];

const newArray=[...array1,...array2,8,9]
console.log(newArray);
// [
//     1, 2, 3, 4,
//     5, 6, 8, 9
//   ]


// spread operator in objects

const obj1={
    key1:"value1",
    key2:"value2"
};

const obj2={
    key1:"valueUnique",
    key3:"value3",
    key4:"value4"
}

const newObject={
    ...obj1,
    ...obj2,
    key5:"value5"

}

console.log(newObject);
// {
//     key1: 'valueUnique',
//     key2: 'value2',
//     key3: 'value3',
//     key4: 'value4',
//     key5: 'value5'
//   }