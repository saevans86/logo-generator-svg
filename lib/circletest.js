class Circle {
  constructor() {
    this.color = 'gray';
  }
  setColor(color) {
    this.color = color;
  }
  render() {
    return `<circle cx="95" cy="95" r="90" fill="${this.color}"`;
  }
}

module.exports = Circle;
