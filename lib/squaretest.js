class Square {
  constructor() {
    this.color = 'EE68E1';
  }
  setColor(color) {
    this.color = color;
  }
  render() {
    return `<rect x="5" y="5" width="175" height="175"  fill="${this.color}"`;
  }
}

module.exports = Square;
