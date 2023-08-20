const fs = require("fs");
const color = require('./lib/colors');
const shapes = require('./lib/shapes');
const inquirer = require('inquirer')

async function writeTofile() {
  try {
    const questions = await inquirer.prompt([
        {
        type: 'input',
        name: 'letters',
        message: 'Please enter up to three characters for the logo.'
      },
      {
        type: 'input',
        name: 'imgColor',
        message: 'Please enter a color keyword or hexadecimal number for the image color.'
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a color keyword or hexadecimal number for the text color',        
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Please select the shape you would like to use.',
        Choices: ['Square', 'Triangle', 'Circle'],
      },
    
    ]);
    const userResponse = shapes(questions);
    fs.writeFileSync("svgImg.svg", userResponse);
} catch (error) {
    console.error("\x1b[31m", "Error occured. WHAT DID YOU DO?!! >:[", error);
}
}
function init() {
    writeTofile()
}
init();


