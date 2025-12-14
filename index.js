module.exports.greet = function greet(name = 'World') {
  return `Hello, ${name}!`;
};

// If run directly, print a greeting
if (require.main === module) {
  console.log(module.exports.greet());
}
