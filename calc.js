const display1E1 = document.querySelector(".display-1");
const display2E1 = document.querySelector(".display-2");
const calcResultE1 = document.querySelector(".calc-result");
const numbersE1 = document.querySelectorAll(".number");
const operationE1 = document.querySelectorAll(".operation");
const equalE1 = document.querySelector(".equal");
const clearbuttonE1 = document.querySelector(".btn-clear");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;
numbersE1.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (e.target.innerText === "." && !haveDot) {
            haveDot = true;

        } else if (e.target.innerText === "." && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        display2E1.innerText = dis2Num;

    });
});
operationE1.forEach((operation) => {
    operation.addEventListener("click", (e) => {
        if (!dis2Num) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    });
});
function clearVar(name = "") {
    dis1Num += dis2Num + "" + name + "";
    display1E1.innerText = dis1Num;
    display2E1.innerText = "";
    dis2Num = "";
    calcResultE1.innerText = result;
}
clearbuttonE1.addEventListener("click", () => {
    clearVar()
})
equalE1.addEventListener('click', () => {
    if (!dis1Num || !dis2Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2E1.innerText = result;
    calcResultE1.innerText = '';
    dis2Num = result;
    dis1Num = '';
});

function mathOperation() {
    if (lastOperation === "x") {
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === "+") {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === "-") {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === "/") {
        result = parseFloat(result) / parseFloat(dis2Num);
    }

}





