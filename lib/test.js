const Triangle = require('./triangletest');
const Circle = require('./circletest');
const Square = require('./squaretest');
const UserInput = require('./userinputtest');

describe('Triangle', () => {
  describe('triangle', () => {
    it('the triangle should match with the orientation in the triangle.js file', () => {
      const triangle = new Triangle();

      expect(triangle.render()).toEqual(
        `<polygon points="150, 38 244, 182 66, 182"  fill="gray"`
      );
    });
  });
  describe('Circle', () => {
    describe('circle', () => {
      it('the circle color should match with the color in the circletest.js file', () => {
        const circle = new Circle();

        expect(circle.render()).toEqual(
          `<circle cx="95" cy="95" r="90" fill="blue"`
        );
      });
    });

    describe('Square', () => {
      describe('square', () => {
        it('the square should match with the orientation in the squaretest.js file', () => {
          const square = new Square();

          expect(square.render()).toEqual(
            `<rect x="5" y="5" width="175" height="175"  fill="blue"`
          );
        });
      });
      describe('userTest', () => {
        describe('usertext', () => {
          it('User can only enter up to 3 characters', () => {
            const userInput = new UserInput();

            expect(userInput.render()).toEqual('abc');
          });
        });
      });
    });
  });
});
