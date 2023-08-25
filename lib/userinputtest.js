class UserInput {
  constructor() {
    this.text = 'ABC';
  }
  thisText(text) {
    this.text = text;
  }
  render() {
    return `fill="${this.text}"`;
  }
}
module.exports = UserInput;
