// Getting elements from HTML
const Value = document.getElementById('value');
const Display = document.getElementById('world');
const Btn = document.getElementById('click');
const Dropdown = document.getElementById('myDropdown');


// Function to style display for success
const Style = () => {
    let styles = `color:green;
                font-weight: bolder;
                font-style: italic;`
    Display.style= styles;
}

//Function to display style for Error
const Style2 = () => {
    let style = `color:red;`
    Display.style = style;
}

// function to handle temperature conversion
const Convert = () => {
    let error = "Please enter only Digit. 0 inclusive";
    let value = Number(Value.value);
    let symbol = '\u00B0'
    if(isNaN(value)){
        Style2();
        Display.innerHTML = error;
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
        let invalue = Value.value;
        value = 1;
        Style();
        Display.innerHTML = `${invalue}! = ${value}`;
    }else{
        let num = Number(Value.value);
        for(i = value - 1; i >= 1; i-- ){
            value *= i;
            Style();
            let details = `<strong><a href="https://www.mathsisfun.com/numbers/factorial.html" target="_blank">Details</a></strong>`;
            let learn = `click here ${details} to learn more about factorial`;
            Display.innerHTML = `${num}! = ${value}  ${learn}`;
            
    }
    }
}

// Take an input and generate a word and number.
const Generate = () => {
    let value = Value.value;
    let store = 5;
    let combinedText = value;
    if(value === ''){
        Style2();
        Display.innerHTML = `<h1>Input can't be empty</h1>`;
    }
    else{
        for(let i = 1; i < store; i++){
            let randomNumber = Math.floor(Math.random()*10);
            combinedText += randomNumber;
        }
        Style();
        Display.innerHTML = `Your new password is ${combinedText}`;
    }
}


// Function to change button value based on selected drop down value
const Btnvalue = () => {
    let btnValue = Dropdown.value

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
    const selectedValue = Dropdown.value;
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
Dropdown.addEventListener('click', Btnvalue)
Btn.addEventListener('click', Btnclick);
Btn.addEventListener('click', Clear);

//let greeting = "Yay Welcome to class";
//alert(greeting);
