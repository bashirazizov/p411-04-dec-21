class CustomArray {
  constructor() {
    this.elements = arguments;
  }

  Every(callback) {
    let result = true;

    for (const item of this.elements) {
      if (!callback(item)) {
        result = false;
        break;
      }
    }

    return result;
  }

  Some(callback) {
    let result = false;

    for (const item of this.elements) {
      if (callback(item)) {
        result = true;
        break;
      }
    }

    return result;
  }

  Map(callback) {
    let result = [];

    for (const item of this.elements) {
      result.push(callback(item));
    }

    return result;
  }

  Filter(callback) {
    let result = [];
    for (const item of this.elements) {
      if (callback(item)) {
        result.push(item);
      }
    }
    return result;
  }

  IndexOf(elem) {
    for (let i = 0; i < this.elements.length; i++) {
      const element = this.elements[i];
      if (element == elem) {
        return i;
      }
    }
    return -1;
  }

  LastIndexOf(elem) {
    for (let i = this.elements.length - 1; i >= 0; i--) {
      const element = this.elements[i];
      if (element == elem) {
        return i;
      }
    }
    return -1;
  }

  Includes(elem) {
    for (const item of this.elements) {
      if (item == elem) {
        return true;
      }
    }
    return false;
  }

  Reduce(callback, total = 0) {
    for (const item of this.elements) {
      total = callback(item, total);
    }
    return total;
  }

  ToString(divider = ", ") {
    let result = "";

    // for (let i = 0; i < this.elements.length-1; i++) {
    //     result += this.elements[i]+", ";
    // }
    // result += this.elements[this.elements.length-1];

    for (let i = 0; i < this.elements.length; i++) {
      if (i == this.elements.length - 1) {
        result += this.elements[i];
      } else {
        result += this.elements[i] + divider;
      }
    }

    // result += this.elements[this.elements.length - 1];

    return result;
  }
}

let myArr = new CustomArray(11, 20, 15, 21, 11, 52);
// console.log(myArr.Every(elem=>elem>0));

console.log(
  myArr.Filter((x) => {
    return x % 2 == 0 && x > 20;
  })
);

console.log(myArr.ToString());
console.log(myArr.ToString(" / "));
