const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '\n'];
let count = 0;
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, 100 + (200 * count));
  count++;
}
