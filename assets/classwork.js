// For the IF and Switch
const InputField = document.getElementById('condition');
const CheckBtn = document.getElementById('condBtn');
const ResultDisplay = document.getElementById('output');
const ForObject = document.getElementById('quick');

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
                const Finalcollection = collection.join(', ');
                CountDisplay.innerHTML = `Even numbers are : ${Finalcollection}`;
            }
        }
    }

}

// Function to style button on mouse over
const Over = () => {
    let styles = `background: purple;
                    font-size: 30px;`;
    let notify = 'Touched';
    CheckBtn.textContent = notify
    CheckBtn.style = styles;
}

// Function to style button on mouse out
const original = CheckBtn.textContent;
const Out = () => {
    let styles = `background: green`;
    CheckBtn.textContent = original;
    CheckBtn.style = styles;
}


// Adding event listener
CheckBtn.addEventListener("click", ForSwitch);
CheckBtn.addEventListener("mouseover", Over);
CheckBtn.addEventListener("mouseout", Out);
CheckBtn.addEventListener("click", Reset);

CountBtn.addEventListener("click", ForLoop);
CountBtn.addEventListener("click", Reset);

// Function to demonstrate object and this key word
const person = {
    firstName:"Peter",
    lastName: "Apostle",
    age: "44",
    father: ['yes', 'no'],
    // got undefined when using an arrow function.
    // use the function key word instead
    about: function() {
        let details = `${this.firstName}, ${this.lastName}, ${this.age}`;
        return details;
    }
};

const fullDetails = function() {
    return ForObject.innerHTML = person.about();
}
// Calling the full details function
fullDetails();

