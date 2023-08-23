const Triangle = require('./triangletest');
const Circle = require('./circletest');
const Square = require('./squaretest');
const UserInput = require('./userinputtest');

describe('Triangle', () => {
  describe('triangle', () => {
    it('the triangle should match with the orientation in the triangle.js file', () => {
      const validate = new Triangle();
      const result = validate.triangle(
        '<polygon points="150, 18 244, 182 56, 182" />'
      );

      expect(result).toEqual(true);
    });
  });
  describe('Circle', () => {
    describe('circle', () => {
      it('the circle should match with the orientation in the circletest.js file', () => {
        const validate = new Circle();
        const result = validate.circle('<circle cx="95" cy="95" r="90" />');

        expect(result).toEqual(true);
      });
    });

    describe('Square', () => {
      describe('square', () => {
        it('the square should match with the orientation in the squaretest.js file', () => {
          const validate = new Square();
          const result = validate.square(
            'rect x="5" y="5" width="175" height="175"'
          );

          expect(result).toEqual(true);
        });
      });
      describe("userTest", () => {
        describe('usertext', () => {
          it("User can enter up to 3 characters otherwise they will receive an error", () => {
            const validate = new UserInput();
            const result = validate.userText(
              'ABC'
            );
    
            expect(result).toEqual(true);

          });
        });
    })
    });
  });
});
