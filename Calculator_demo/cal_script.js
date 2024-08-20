const display = document.querySelector(".display");
const Buttons = document.querySelectorAll("button");
const specialChars = ["%","*","/","-","+","x²","="];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else if (btnValue === "x²") {
        // exponential of the value takes place here
        if (output !== "") {
            output = Math.pow(parseFloat(output), 2).toString();
        }
    } else {
        if (output === "" && specialChars.includes(btnValue)) 
            return;
        output += btnValue;
    }
    display.value = output;
};

// event listener's are added for buttons to perform calculation on click.
Buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
