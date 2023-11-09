
# Title 
logo-generator-svg




## Description 
This project takes user input from inquirer, and creates a custom SVG file. 

My motivation for this project was to build something that was easy on the eyes, simple, and functional. I started this project thinking it'd be as difficult as my readme generator, but with learning the SVG rendering, it turned out to be more complex than I anticipated, especially when adding in the testing functions for the shapes/colors.  
I feel like this generator solved the issue of quick accessibility and needing to use a 3rd party web site, or even the use of a designer.  I definitely think some cooler graphic options can be added, which I may implement later since there's so many ways to design a SVG file.  

With my initial expectations of this project being simple and too closely related to the readme generator, I learned that there were so many more elements to this project since I was no longer just adding user input and text to a page, rather creating shapes based on formulas I'm still not sure I entirely understand. I spent a good deal of time trying to get my polygon to sit at the upper left hand corner, and implemented the use of viewbox, however it broke the entire design of what should be pretty simple, so I've still got more experience needed in that regard. 

The other thing I spent quite a bit of time on was my initial testing functions, and managed to second guess myself a lot on whether it was actually "testing" and not just returning "true/false" because I told it to, so I reached out to ASK BCS (service provided by the school), and was reassured that what I was doing was valid, but well over, yet still missing the base expectation of the projeect, nonetheless the testing was enjoyable, and really got my brain moving.



## Table of Contents (Optional)


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Installation 
nodejs along with any other code editing software should run the contents of this app. 



## Usage 
To generate a SVG file, open your terminal from the main folder and type in node index.js then follow the prompts for how you would like your SVG to appear, then navigate to the folder assets and locate logo.svg. To run jest, you will need to navigate to the lib folder and type in npm run test.

This SVG was created by the logo generator: 

![logo](https://github.com/saevans86/logo-generator-svg/assets/130856120/c01ed112-5392-456a-a74f-11b7695c2a36)

This video shows the functionality of the logo generator with a quick walk through, as well as tests showing the shape/color tests 


https://github.com/saevans86/logo-generator-svg/assets/130856120/4a1411ad-e210-4c3b-af6f-03e4e0a287ed

![Screenshot 2023-11-09 044501](https://github.com/saevans86/logo-generator-svg/assets/130856120/00acc520-78ce-450e-adf0-321ea30b942e)


    

## Credits 
MDN, W3, Stack, but would also like to mention ask BCS as well as the TA's for providing insight and feedback!



## License 
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## License Link 
[license: MIT](https://opensource.org/licenses/MIT)


---
# License section 

  Copyright 2023 saevans86
  
  Permission is hereby granted, free of charge, to any person obtaining a 
  copy of this software and associated documentation files (the “Software”),
  to deal in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
  of the Software, and to permit persons to whom the Software is furnished to do so, 
  subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all copies 
  or substantial portions of the Software.
      
  THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      






## Features 
The main features are using jest, and inquirer. https://jestjs.io/docs/getting-started // https://www.npmjs.com/package/inquirer 
As I researched SVG files, I found some really rad ways to make them look even better. In the future I may implement more variety in the inquirer input to add 
additional features to the SVG.







## Tests 
The tests performed were to ensure the colors added by the user would properly convey when renderer to SVG, please see the lib folder for the codes used to test the colors and render methods, and see the assets folder to see what has been rendered!



