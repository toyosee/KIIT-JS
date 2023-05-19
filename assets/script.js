// Getting elements from HTML
const Value = document.getElementById('value');
const Display = document.getElementById('world');
const Btn = document.getElementById('click');
const dropdown = document.getElementById('myDropdown');

// function to handle temperature conversion
Convert = function convert(){
    let error = "Please enter only Digit. 0 inclusive";
    let value = Number(Value.value);
    let symbol = '\u00B0'
    if(isNaN(value)){
        Display.style.color= "red";
        Display.innerHTML = error
    } else{
        let convert = (value -32)/1.8;
        Display.style.color= "green";
        Display.innerHTML = `${value} ${symbol}F = ${convert} ${symbol}C`; 
    }

}


// Function to handle calculation of Area of circle
Circle = function cal_circle(){
    let value = Number(Value.value);
    const pi = 3.142;
    let result = pi * (value * value);
    Display.style.color= "green";
    Display.innerHTML = ` Area of circle with radius ${value}  = ${result} `; 
}


// function for circumference of a circle
Circumference = function circumference(){
    let value = Number(Value.value);
    const pi = 3.142;
    let result = 2 * pi * value;
    Display.style.color= "green";
    Display.innerHTML = ` Circumference of circle with radius ${value}  = ${result} `; 
}

// Calculating factorial

Factorial = function fact(){
    let value = Number(Value.value)
    pow_four = Math.pow(value,4)
    Display.style.color = 'green';
    Display.innerHTML = `${value} to power 4 = ${pow_four}`;
}

// Function to change button value based on selected drop down value
Btnvalue = function btn_value(){
    let btnValue = dropdown.value

    if(btnValue === 'factorial'){
        Btn.textContent = 'Power 4';
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
}

// Function to handle button click
Btnclick = function btn_clicked(){

    //let inputValue = Number(Value.value)
    const selectedValue = dropdown.value;

    if(selectedValue === "convert"){
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
    };
}

// Reset inout field function
Clear = function clear_value(){
    Value.value = '';
}

// Adding event listiners to button
dropdown.addEventListener('click', Btnvalue)
Btn.addEventListener('click', Btnclick);
Btn.addEventListener('click', Clear);


