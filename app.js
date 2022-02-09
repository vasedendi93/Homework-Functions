console.log("Connected");



function digitnumber (num){

    return  `${num.toString().length}`;
    
}


digitnumber(10)


function evenOrOddNumber (number){
    if(number %2 === 0){
        return `${number} is Even `
    }else{
        return `${number} is Odd `
    }
}

evenOrOddNumber(26)



function positiveOrNegative (number1){
    if(number1 > 0){
        return `${number1} is positive`
    }else{
        return `${number1} is negative`
    }
}

positiveOrNegative(2)



function getNumberStats(resultNumber){
  
    return `${digitnumber(resultNumber)} digits  ${evenOrOddNumber(resultNumber)} ${positiveOrNegative(resultNumber)}`;

}

console.log(getNumberStats(407));




// --------------------------------------------- Exercise 2

let firstDiv = document.getElementById("firstDiv");
let textSizeInput = document.getElementById("sizeInput");
let color = document.getElementById("colorInput");
let button = document.getElementById("myBtn");
let resultDiv = document.getElementById("resultDiv");
let heading = document.getElementById("heading");

let genereateTextSize = (element,textSize) => {
    element.style.fontSize = `${textSize}px`;
    
}

button.addEventListener("click", function() {
    generateColorText(heading,color);
    console.log(`The color of text is magic ${color.value}`)
    genereateTextSize(heading,textSizeInput);
    console.log(`The text size  is magic ${textSizeInput.value}`)


} )

let generateColorText = (element,color) => {
    element.style.color = color
}
