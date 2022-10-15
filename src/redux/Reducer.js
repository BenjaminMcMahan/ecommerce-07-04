/*
  Reducer: Responsible for managing our application data

  Array.reduce
*/

const starWars = [
  {
    name: 'Yoda',
    gender: 'neutral',
    forcePower: 100
  },
  {
    name: 'Chewy',
    gender: 'male',
    forcePower: 10
  },
  {
    name: 'Luke Skywalker',
    gender: 'male',
    forcePower: 90
  },
  {
    name: 'Darth Vader',
    gender: 'male',
    forcePower: 95
  },
  {
    name: 'Akbar',
    gender: 'male',
    forcePower: 20
  },
  {
    name: 'Rei',
    gender: 'female',
    forcePower: 50
  },
  {
    name: 'Princess Leia',
    gender: 'female',
    forcePower: 5
  }
];


// Count up all the different genders we have
// { females: 2, males: 4, neutral: 1 }
let genders = starWars.reduce(function(acc, item) {
  let gender = item.gender;
  if (gender == 'male') {
    return { ...acc, males: acc.males + 1 };
  } else if (gender == 'female') {
    return { ...acc, females: acc.females + 1 };
  } else {
    return { ...acc, neutral: acc.neutral + 1 };
  }
}, { males: 0, females: 0, neutral: 0 })




// Total power of all my star wars characters
let sumPower = 0;
for (let x = 0; x < starWars.length; x++) {
  sumPower += starWars[x].forcePower;
}

let result = starWars.reduce(function(accumulator, currItem) {
  // Return the next accumulator value
  return accumulator + currItem.forcePower;
}, 0);

// 1st iteration: acc = 0, currItem = Yoda, 100, nextAcc = 100
// 2nd iteration: acc = 100, currItem = Chewy, 10, nextAcc = 110

console.log(result);
console.log(sumPower);










let initialState = {
  productsList: []
};

const ProductReducer = (state, action) => {
  console.log("Action is", action);
  // Action is an object describing the action
  switch (action.type) {
    case 'ADD_PRODUCT':
      // let temp = state.productsList;
      // temp.push(action.addedProduct);
      return { ...state, productsList: 
        [...state.productsList, action.addedProduct]
      };
    case 'DELETE_PRODUCT':
      // filter products
      const newProducts = state.productsList.filter(function(product) {
        return product.isbn !== action.deletedProduct
      })
      console.log('new products', newProducts);
      return { ...state, productsList: newProducts };
    default:
      return initialState;
  }
};

export default ProductReducer;