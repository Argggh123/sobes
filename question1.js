const arr = [5,"adawd",4,3,"",2, null,1];

let reverseAndFilterArr = function (arrToFilter) {
  return arrToFilter
    .reverse()
    .filter((value) => {return !!value})
    .filter(value => typeof value === 'string')
};

// const curryFunc = TODO: карировать функцию reverseAndFilterArr для логирования действий

// let decorateFunc = TODO: декорировать функцию reverseAndFilterArr для логирования действий

// достаточно ли лаконичный код?

// Есть ошибка в коде, где она?

// в чем разница между каррированием и декарированием функций


