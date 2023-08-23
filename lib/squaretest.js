class Square {}

Square.prototype.square = (square) => {
  let imgColor = ""
  let textColor = ""
  let letters = ""
  if (`<rect x="5" y="5" width="175" height="175"  fill="${imgColor}"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">
        <tspan x="90" y="100" font-family="Verdana" font-size="75">"${letters}"</tspan></text>`) {
    return true;
  }

  const squareShape = new RegExp(`<rect x="5" y="5" width="175" height="175"  fill="nothing"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="nothing">
        <tspan x="90" y="100" font-family="Verdana" font-size="75">"nothing"</tspan></text>`);

  if (squareShape.test(square)) {
    return false;
  }

  return false;
};

module.exports = Square;
