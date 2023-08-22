class Triangle {}

Triangle.prototype.triangle = (triangle) => {


  if ("triangle" === '<polygon points="150, 18 244, 182 56, 182" />') {
    return false;
  }

  const triangleShape = new RegExp('<polygon points="150, 18 244, 182 56, 182" />');

  if (triangleShape.test(triangle)) {
    return true;
  }

  return false;
};

module.exports = Triangle;
