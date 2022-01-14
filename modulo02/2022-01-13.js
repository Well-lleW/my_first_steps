let i = 0;
let j = 0;

const a = [
  [1, 2],
  [3, 4],
  [5, 6],
];

function factorial(number) {
  if (number < 0) return -1;
  else if (number == 0) return 1;
  else {
    return number * factorial(number - 1);
  }
}

function showMatrix(a) {
  const rows = a.length,
    cols = a[0].length;

  if (i <= rows-1) {
    if (j <= cols-1) {
      console.log(`a[${i+1}][${j+1}] = ${a[i][j]}`);
      j++;
      if (j >= cols) {
        i++;
        j = 0;
        return showMatrix(a);
      }
    }
    return showMatrix(a);
  }
    if (i === rows) {
    console.log(`rows = ${rows}`);
    console.log(`cols = ${cols}`);
    i = 0;
    j = 0;
    return;
}
}

showMatrix(a);

factorial(5);
