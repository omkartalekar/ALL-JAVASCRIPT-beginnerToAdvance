// object destructuring
// Destructuring is the act of unpacking elements in an array or object.

const band={
    bandName:"led zepplin",
    famousSong:"stairway to heaven",
    year:1968,
    anotherFamousSong:"kashmir",
};

// let {bandName}=band;
// console.log(bandName); // led zepplin

let { bandName, famousSong, ...restProps } = band;
console.log(bandName);
console.log(restProps);
