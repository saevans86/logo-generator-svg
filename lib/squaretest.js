class Square {}

Square.prototype.square = (square) => {


  if ("Square" === 'rect x="5" y="5" width="175" height="175"' ) {
    return false;
  }

  const squareShape = new RegExp('rect x="5" y="5" width="175" height="175"' );

  if (squareShape.test(square)) {
    return true;
  }

  return false;
};

module.exports = Square;
