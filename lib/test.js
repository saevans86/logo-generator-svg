
const Triangle = require("./triangletest")


  describe('Triangle', () => {
  
    describe('triangle', () => {
      it('the triangle should match with the orientation in the shapetest.js file', () => {
        const validate = new Triangle();
        const result = validate.triangle('<polygon points="150, 18 244, 182 56, 182" />');
  
        expect(result).toEqual(true);
      });
    });
    // describe('Triangle', () => {
  
    //     describe('circle', () => {
    //       it('the triangle should match with the orientation in the shapetest.js file', () => {
    //         const validate = new Validate();
    //         const result = validate.triangle('<polygon points="150, 18 244, 182 56, 182" />');
      
    //         expect(result).toEqual(false);
    //       });
    //     });

    // })
})