// const fruits = ['Apple', 'Mango', 'Banana', 'Nut', 'Grape'];

// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }

// const nums = [10, 20, 30, 40, 50];
// sum = 0;
// for (let i = 0; i < nums.length; i++) {
//   const currentNumber = nums[i];
//   sum = sum + currentNumber;
//   console.log(sum);
// }
// const fruits = ['Apple', 'Mango', 'Banana', 'Nut', 'Grape'];
// const target = 'Jackfruits';
// let foundIndex = -1;
// for (let i = 0; i < fruits.length; i++) {
//   const currentFruit = fruits[i];
//   if (currentFruit == target) {
//     foundIndex = i;
//   }
// }

// if (foundIndex > -1) {
//   console.log(foundIndex, 'Founded');
// }
// else {
//   console.log('Not Found')
// }

const purchaseHistory = [100, 300, 700, 150, 50];
const discountPrice = [];
for (let i = 0; i < purchaseHistory.length; i++) {
  const currentElem = purchaseHistory[i];
  if (currentElem > 200) {
    const calculatedDiscount = currentElem - currentElem * 10 / 100;
    discountPrice.push(calculatedDiscount);
  } else {
    discountPrice.push(currentElem);
  }
}

const discountPriceUsingMap = purchaseHistory.map(function (currentElem) {
  if (currentElem > 200) {
    const calculatedDiscount = currentElem - currentElem * 10 / 100;
    return calculatedDiscount
  } else {
    return currentElem
  }
})

console.log(discountPriceUsingMap)