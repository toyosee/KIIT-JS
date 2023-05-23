// For the IF and Switch
const InputField = document.getElementById('condition');
const CheckBtn = document.getElementById('condBtn');
const ResultDisplay = document.getElementById('output');

// For the FOR loop
const Entry = document.getElementById('counting');
const CountBtn = document.getElementById('count');
const CountDisplay = document.getElementById('preview');

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
    InputField.value = "";
    Entry.value = "";
}

// for loop
const ForLoop = () => {
    let count = Entry.value;
    let collection = [];
    if(count === ''){
        CountDisplay.innerHTML = "Input field can not be empty";
    }
    else{
        for(let begin = 1; begin <= count; begin++){
            if(begin % 2 === 0){
                collection.push(begin.toString());
                const Finalcollection = collection.join('| ');
                CountDisplay.innerHTML = `Even numbers are : ${Finalcollection}`;
            }
        }
    }

}

// Adding event listener
CheckBtn.addEventListener("click", ForSwitch);
CheckBtn.addEventListener("click", Reset);

CountBtn.addEventListener("click", ForLoop);
CountBtn.addEventListener("click", Reset);

