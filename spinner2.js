let delay = 100;
const symbols = ['|', '/', '-', '\\'];
setTimeout(() => {
  for (let i = 0; i < symbols.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${symbols[i]}   `);
    }, delay * i);
    delay += 200;
  }
});
