// Incorrect Example

const myCar = {
  brand: "Ferrari", // typo!
  model: "Mustang",
};

const theCar = (myCar, changeModel) => {
  myCar.model = changeModel;  // avoid change directly to the values of object
};

const listCar = theCar(myCar, "Ford");

console.log(myCar);

/**
 * Output:
 *  { brand: 'Ferrari', model: 'Ford' }
*/

// Correct Example

const myCar = {
  brand: "Ferrari",  // typo!
  model: "Mustang",
};

const theCar = (myCar, changeModel) => {
  return {...myCar, model: changeModel};  //destructuring object
};

const listCar = theCar(myCar, "Ford");

console.log(listCar);

/**
 * Output:
 *  { brand: 'Ferrari', model: 'Ford' }
*/
