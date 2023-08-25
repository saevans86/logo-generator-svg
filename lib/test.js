const Triangle = require('./triangletest');
const Circle = require('./circletest');
const Square = require('./squaretest');
const UserInput = require('./userinputtest');

describe('Triangle', () => {
  describe('triangle', () => {
    it('the triangle should match the color in the triangle.js file', () => {
      const triangle = new Triangle();
      triangle.setColor('#04FF00');
      expect(triangle.render()).toEqual(
        `<polygon points="150, 38 244, 182 66, 182"  fill="#04FF00"`
      );
    });
  });
  describe('Circle', () => {
    describe('circle', () => {
      it('the circle color should match the color in the circletest.js file', () => {
        const circle = new Circle();
        circle.setColor('gray');
        expect(circle.render()).toEqual(
          `<circle cx="95" cy="95" r="90" fill="gray"`
        );
      });
    });

    describe('Square', () => {
      describe('square', () => {
        it('the square should match the color in the squaretest.js file', () => {
          const square = new Square();
          square.setColor('EE68E1');

          expect(square.render()).toEqual(
            `<rect x="5" y="5" width="175" height="175"  fill="EE68E1"`
          );
        });
      });
      describe('userTest', () => {
        describe('usertext', () => {
          it('User can only enter up to 3 characters', () => {
            const userInput = new UserInput();
            userInput.thisText('ABC');

            expect(userInput.render()).toEqual(`fill="ABC"`);
          });
        });
      });
    });
  });
});
