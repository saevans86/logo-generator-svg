function renderShape(shape, letters, textColor, imgColor) {
    let svgContent = '';
 
    if (shape === "Circle", "letters", "textColor") {
        svgContent = `<circle cx="150" cy="100" r="50" fill="${imgColor}"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${letters}</text>`        
    } else if (shape === 'Square', "letters", "textColor") {
        svgContent = `<rect x="10" y="10" fill="${imgColor}"/>/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${letters}</text>`
    } else if (shape === 'Triangle', "letters", "textColor") {
        svgContent = `<polygon points="150,10 290,190 10,190" fill="${imgColor}"/>"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${letters}</text>`
    }
    
    const svgImg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svgContent}</svg>`;
    return svgImg;
}

function renderSVG(data) {
    return renderShape(data.shape, data.letters, data.textColor, data.imgColor);
}

module.exports = renderSVG;


