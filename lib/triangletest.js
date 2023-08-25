class Triangle {
  constructor() {
    this.color = '#04FF00';
  }
  setColor(color) {
    this.color = color;
  }
  render() {
    return `<polygon points="150, 38 244, 182 66, 182"  fill="${this.color}"`;
  }
}
module.exports = Triangle;
