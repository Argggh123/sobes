setTimeout(() => console.log('setTimeout'), 0);

new Promise((resolve) => {
  console.log('Promise');
  resolve();
});

new Promise((resolve) => {
  console.log('Promise');
  setTimeout(() => {
    console.log('setTimeout Promise');
    resolve();
  }, 0);
});

// В какой последовательности выведутся консоль логи?
