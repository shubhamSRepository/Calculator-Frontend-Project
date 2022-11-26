

var button = document.getElementsByClassName("button");//this will give us an array of all elements of class "button"
var screen = document.getElementById("screen");
var operand1 = 0;
var operand2 = null;
var operator = null;
var string = ""; // for an empty screen

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');

        if (value == '+') {
            operator = '+';
            operand1 = parseFloat(screen.innerText);
            screen.innerText = string;
        }

        else if (value == '-') {
            operator = '-';
            operand1 = parseFloat(screen.innerText);
            screen.innerText = string;
        }

        else if (value == '*') {
            operator = '*';
            operand1 = parseFloat(screen.innerText);
            screen.innerText = string;
        }

        else if (value == '/') {
            operator = '/';
            operand1 = parseFloat(screen.innerText);
            screen.innerText = string;
        }
        
        else if(value=='%') {
            operator='%';
            operand1 = parseFloat(screen.innerText);
            screen.innerText = string;
        }

        else if (value == 'AC') {
            screen.innerText = string;
            operand1 = 0;
            operand2 = null;
            operator = null;

        }

        else if (value == '=') {
            operand2 = parseFloat(screen.innerText);

            if (operator == '+') {
                screen.innerText = +(operand1 + operand2);
            }
            else if (operator == '-') {
                screen.innerText = (operand1 - operand2);
            }
            else if (operator == '*') {
                screen.innerText = (operand1 * operand2);
            }
            else if (operator == '/')
            {
                screen.innerText = (operand1 / operand2);
            }
            else if(operator == '%')
            {
                screen.innerText = (operand1/operand2)*100 +'%';
            }

        }

        else {
            screen.innerText += value;
        }
    })
}