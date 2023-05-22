const InputField = document.getElementById('condition');
const CheckBtn = document.getElementById('condBtn');
const ResultDisplay = document.getElementById('output');

// Function to work with If Statement
const ForIF = () => {
    let entry = InputField.value;
    if(entry === "5"){
        ResultDisplay.innerHTML = "i got a number";
    }
    else if(entry === "five"){
        ResultDisplay.innerHTML = "i got a string";
    }
    else{
        ResultDisplay.innerHTML = "Try again!"
    }
}

//Function to work with switch
const ForSwitch = () => {
    let entry = Number(InputField.value);
    switch(entry){
        case 1:
            ResultDisplay.innerHTML = `${entry} corresponds to Sunday`;
            break;
        case 2:
            ResultDisplay.innerHTML = `${entry} corresponds to Monday`;
            break;
        case 3:
            ResultDisplay.innerHTML = `${entry} corresponds to Tuesday`;
            break;
        case 4:
            ResultDisplay.innerHTML = `${entry} corresponds to Wednesday`;
            break;
        case 5:
            ResultDisplay.innerHTML = `${entry} corresponds to Thursday`;
            break;
        case 6:
            ResultDisplay.innerHTML = `${entry} corresponds to Friday`;
            break;
        case 7:
            ResultDisplay.innerHTML = `${entry} corresponds to Saturday`;
            break;
        default:
            ResultDisplay.innerHTML = "Nothing to see here";

    };
}

// Reset input field
const Reset = () => {
    InputField.value = ""
}

// Adding event listener
CheckBtn.addEventListener("click", ForSwitch);
CheckBtn.addEventListener("click", Reset);

