let sales = 123_456_789;
let course = "Typescript";
let is_published = true;
let level;

//for arrays in typescript, if you want to set it to an empty array, you need to specify hat kind of elements will go into the array
//arrays can only have one type of value
let numbers: number[] = [];

//enum
enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);
//output will be 2, because small is equal to 1 and 2 is the next number

//objects
let employee: { id: number; name: string } = { id: 1, name: "Bob" };
