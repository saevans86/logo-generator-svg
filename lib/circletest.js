class Circle {}

Circle.prototype.circle = (circle) => {


  if ("Circle" === '<circle cx="95" cy="95" r="90" />') {
    return false;
  }

  const circleShape = new RegExp('<circle cx="95" cy="95" r="90" />');

  if (circleShape.test(circle)) {
    return true;
  }

  return false;
};

module.exports = Circle;
