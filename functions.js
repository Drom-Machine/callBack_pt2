const identity = function (value) {
  return value;
};

//-------------------------------------------------------------indexOf----

const indexOf = function (array, target) {
  //array = [1], target = 1
  var result = -1;

  each(array, function (item, index) {
    //item = 1
    if (item === target && result === -1) {
      result = index;
      //result = 1
    }
  });

  return result;
};

//-------------------------------------------------------------each----

const each = function (collection, iterator) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (collection instanceof Object) {
    for (let prop in collection) {
      iterator(collection[prop], prop, collection);
    }
  }
};

//-------------------------------------------------------------map----

const map = function (collection, iterator) {
  var result = [];

  each(collection, function (element, index, array) {
    result.push(iterator(element));
  });

  return result;
};

//------------------------------------------------------------filter----

const filter = function (collection, isEven) {
  //callback = isEven()
  let result = [];

  each(collection, function (value) {
    if isEven(value))
    result.push(value);
    }
  });
  return result;
};

//reject([1, 2, 3, 4, 5, 6], isEven);

//-------------------------------------------------------------reject----

const reject = function (collection, callbackTest) {
  return filter(collection, function (value) {
    return !callbackTest(value);
  });
};


// const reject = function (collection, callbackTest) {
//   let result = [];
//   each(collection, function (value) {
//     if (!callbackTest(value)) {
//       result.push(value);
//     }
//   });
//   return result;
// };

//-------------------------------------------------------------uniq----

const uniq = function (array) {
  let result = [];
  each(array, function (element) {
    if (indexOf(result, element,) === -1) {
      result.push(element);
    }
  })
  return result;
};

var numbers = [1, 2, 1, 3, 1, 4];
result = []



//-------------------------------------------------------------reduce----

const reduce = function (collection, iterator, accumulator) {
  let initializing = arguments.length === 2;

  each(collection, function(value) {
    if (initializing) {
      accumulator = value;
      initializing = false;
    } else {
      accumulator = iterator(accumulator, value);
    }          
  });
  return accumulator;
};


// const reduce = function (collection, iterator, accumulator) {
//   let initializing = arguments.length === 2;
//   each(collection, function (value) {
//     if (initializing) {
//       accumulator = value;
//       initializing = false;
//     } else {
//       accumulator = iterator(accumulator, value);
//     }
//   });
//   return accumulator;
// };



module.exports = {
  filter,
  reject,
  uniq,
  reduce,
  map,
};
