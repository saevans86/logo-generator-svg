function renderShape(shape, letters, textColor, imgColor) {
    let svgContent = '';
 
    if (shape === "Circle") {
        svgContent = `<circle cx="95" cy="95" r="90" fill="${imgColor}"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">
        <tspan x="95" y="100" font-family="Verdana" font-size="70">${letters}</tspan></text>`        
    } else if (shape === 'Square') {
        svgContent = `<rect x="5" y="5" width="175" height="175"  fill="${imgColor}"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">
        <tspan x="90" y="100" font-family="Verdana" font-size="75">${letters}</tspan></text>`   
    } else if (shape === 'Triangle') {
        svgContent = `<polygon points="150, 38 244, 182 66, 182"  fill="${imgColor}"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">
        <tspan x="150" y="130" font-family="Verdana" font-size="40">${letters}</tspan></text>`   
    }
    
    const svgImg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svgContent}</svg>`;
    return svgImg;
}

function renderSVG(data) {
    return renderShape(data.shape, data.letters, data.textColor, data.imgColor);
}

module.exports = renderSVG;



