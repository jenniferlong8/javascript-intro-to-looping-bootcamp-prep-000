// start counting from 0, add string to array 25 times
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
    }

  }
    return array
}
// count down from passed in number to 0
function whileLoop(n) {
  let countdown = n;
  while (countdown > 0) {
    console.log(--countdown);
  }
    return "done"
}
// use maybeTrue() as condition; remove elements
// from the array until array is empty
function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.shift()
  } while ((array.length > 0) && (maybeTrue()));

    return array
}
