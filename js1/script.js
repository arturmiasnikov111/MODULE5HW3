function Counter () {
    let count = 0;
  
    return (input) => {
      return count += input;
    }
  }


function getUpdatedArr () {
    let arr = [];
  
    return (inputItem) => {
      if (inputItem) {
         arr.push(inputItem);
      }
      else {
        arr = [];
      }
      return arr;
    }
  }

let counter = Counter();
console.log(counter(3));
console.log(counter(5));
console.log(counter(228));

let getUpdatedArray = getUpdatedArr();
console.log(getUpdatedArray(3));
console.log(getUpdatedArray(5));
console.log(getUpdatedArray({ name: 'Vasya' }));
console.log(getUpdatedArray());
console.log(getUpdatedArray(4));