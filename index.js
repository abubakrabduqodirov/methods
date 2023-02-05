// filter() method
// map() method
// find() method
// forEach() method
// includes() method
// some() method
// reduce() method

const items = [
    { name: "Book", price: 10 },
    { name: "Album", price: 200 },
    { name: "NoteBook", price: 5 },
    { name: "CD", price: 100 },
    { name: "Pencil", price: 8 },
    { name: "Book", price: 20 },
];

const nums = [4, 7, 8];

// ------------------------------reduce() method

// const result = items.reduce((currentValue, item) => {
//   return currentValue + item.price;
// }, 0);

// console.log(result);/////////////////////////////////////////////////



//  -------------------------------some() method

// const result = nums.some((item) => {
//   return item < 3;
// });
// console.log(result);//////////////////////////////////////////////

// --------------------------------includes() method

// const isIncluded = nums.includes(7);


// console.log(isIncluded);

// --------------------------------forEach() method

// const itemsName = items.forEach((item) => {
//   console.log(item);
// });////////////////////////////////////

// ---------------------------------filter() method

// const filteredItems = items.filter((item) => {
//   return item.name === "Book";
// });

// console.log(filteredItems);///////////////////////////////////////

// ----------------------------------map()  method

// const mappedItems = items.map((item) => {
//   return item.price;
// });

// console.log(mappedItems);//////////////////////////////////////////////////

// ---------------------------------find() method

// const foundedItem = items.find((item) => {
//   return item.price == 20;
// });////////////////////////////////////////////////////////////////

// console.log(foundedItem);

// ------------------------------questions------------------------------

// const arr = [1, 3, 5, 4, 45, 23, 88, 63, 100, 209, 196]
//-------------------find method example

// 1. Write a JavaScript function to get all the elements those are greater than 50

// const foundedItem =items.find((item)=>{
//     return item.price >=50;
//     })
//     console.log(foundedItem)

//----------example------------------filter methods

// 2. Write a JavaScript function to check if element exists (includes) in array

// const filteredItems = items.filter((item) => {
//   return item.name === "CD";
// });
// console.log(filteredItems);

//------------example----reduce method

// 3. Write a JavaScript function to find the sum of an array of numbers
//     const result = items.reduce((currVal,item)=>{
//     return currVal+item.price;
//     },0)
//   console.log(result);


// 4. Write a JavaScript function to find specific element

//-------------example----some method;
// const result = nums.some((item) => {
//   return item < 25;
// });
// console.log(result);



// 5. Write a JavaScript function to multiply each element by 2 within an array
//  const itemsName = items.forEach((item) => {
//   console.log(item);
// });

// 6. Write a JavaScript function to log each element on console

// const mappedItems = items.map((item) => {
//   return item.price;
// });

// console.log(mappedItems);


// 7. Write a JavaScript function to check if there is an element greater than 10


// const isIncluded = nums.includes(10);
// console.log(isIncluded);




