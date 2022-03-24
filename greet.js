function greet(name) {
  if (name === null) {
    return `Hello there!`;
  }
  // if (Array.isArray(name) && name.length <= 2) {
  //   return `Hello,${name[0]},${name[1]}`;
  // }
  if (Array.isArray(name)) {
    let names = name.join();
    return `Hello,${names}`;
  }

  if (name === name.toUpperCase()) {
    return `HELLO ${name}!`;
  }

  return 'Hello, ' + name;
}

console.log(greet('Elizabeth'));
console.log(greet(null));

// export { greet };
module.exports = greet;
