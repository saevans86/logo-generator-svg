class Circle {}

Circle.prototype.circle = (circle) => {
  let imgColor = ""
  let textColor = ""
  let letters = ""
  if ( "circle" === `<circle cx="95" cy="95" r="90" fill="${imgColor}"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">
  <tspan x="95" y="100" font-family="Verdana" font-size="70">"${letters}"</tspan></text>`) {
    return true;
  }

  const circleShape = new RegExp(`<circle cx="95" cy="95" r="90" fill="nothing"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="nothing">
  <tspan x="95" y="100" font-family="Verdana" font-size="70">nothing</tspan></text>`);

  if (circleShape.test(circle)) {
    return false;
  }

  return false;
};

module.exports = Circle;
