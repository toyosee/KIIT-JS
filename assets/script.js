// Getting elements from HTML
const Value = document.getElementById('value');
const Display = document.getElementById('world');
const Btn = document.getElementById('click');
const dropdown = document.getElementById('myDropdown');


// Function to style display
const Style = () => {
    styles = `color:green;
                font-weight: bolder;
                font-style: italic;`
    Display.style= styles;
}

// function to handle temperature conversion
const Convert = () => {
    let error = "Please enter only Digit. 0 inclusive";
    let value = Number(Value.value);
    let symbol = '\u00B0'
    if(isNaN(value)){
        Display.style.color= "red";
        Display.innerHTML = error
    } else{
        let convert = (value -32)/1.8;
        Style();
        Display.innerHTML = `${value} ${symbol}F = ${convert} ${symbol}C`; 
    }

}

// Function to handle calculation of Area of circle
const Circle = () => {
    let value = Number(Value.value);
    const pi = 3.142;
    let result = pi * (value * value);
    Style();
    Display.innerHTML = ` Area of circle with radius ${value}  = ${result}m² `; 
}


// function for circumference of a circle
const Circumference = () =>{
    let value = Number(Value.value);
    const pi = 3.142;
    let result = 2 * pi * value;
    Style();
    Display.innerHTML = ` Circumference of circle with radius ${value}  = ${result}m `; 
}

// Calculating factorial of a number using for loop and if
const Factorial = () => {
    let value = Number(Value.value)
    if(value === 0 || value === 1){
        value = 1;
        Style();
        Display.innerHTML = `${value}! = ${value}`;
    }else{
        let num = Number(Value.value);
        for(i = value - 1; i >= 1; i-- ){
            value *= i
            Style();
            Display.innerHTML = `${num}! = ${value}`;
    }
    }
}

// Take an input and generate a word and number.
const Generate = () => {
    let value = Value.value;
    let store = 5;
    let combinedText = value;

    for(let i = 1; i < store; i++){
        let randomNumber = Math.floor(Math.random()*10);
        combinedText += randomNumber;
    }
    Style();
    Display.innerHTML = `Your new password is ${combinedText}`;
}


// Function to change button value based on selected drop down value
const Btnvalue = () => {
    let btnValue = dropdown.value

    if(btnValue === 'factorial'){
        Btn.textContent = 'Factorial';
    }
    else if(btnValue === 'convert'){
        Btn.textContent = 'Convert';
    
    }
    else if(btnValue === 'circle'){
        Btn.textContent = 'Area';
    }
    else if(btnValue === 'circumference'){
        Btn.textContent = 'Circumference';
    }
    else if(btnValue === 'generate'){
        Btn.textContent = 'Generate';
    }
    else if(btnValue === '-'){
        Btn.textContent = '-';
    };
}


// Function to handle button click
const Btnclick = () => {

    //let inputValue = Number(Value.value)
    const selectedValue = dropdown.value;
    if(selectedValue === '-'){
        Btn.textContent = '-';
    }
    else if(selectedValue === "convert"){
        // Do something
        Convert();
    }
    else if(selectedValue === "circle"){
        // Do another thing
        Circle();
    }
    else if(selectedValue === 'circumference'){
        Circumference();
    }
    else if(selectedValue === 'factorial'){
        Factorial()
    }
    else if(selectedValue === 'generate'){
        Generate();
    };
}

// Reset inout field function
const Clear = () => {
    Value.value = '';
}

// Adding event listiners to button
dropdown.addEventListener('click', Btnvalue)
Btn.addEventListener('click', Btnclick);
Btn.addEventListener('click', Clear);

//let greeting = "Yay Welcome to class";
//alert(greeting);
