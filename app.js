let boxes = document.querySelectorAll(".box");
let msg =  document.querySelector(".msg-screen");
let msg_value = msg.innerText;


let expression ="0";


function shortNum(num) {
    if (Number.isInteger(num)) {
        return num;
    } else {
        return parseFloat(num.toFixed(7));
    }
}

boxes.forEach((box) =>{
    box.addEventListener("click", (evt)=>{
        if (box.id == "="){
            try{
                msg.innerText = shortNum(eval(expression));
            }
            catch(err){
                msg.innerText = "Error";
            }
            expression = eval(expression);
        }
        else if (box.id == "c"){
            msg.innerText = "0";
            expression = "0";
        }
        else if (box.id ==="%"){
            msg.innerText = expression/100;
            expression = expression/100;
        }
        else if (box.id == "00"){
            msg.innerText = "00";
            expression = "0";
        }
        else {
                expression = expression + box.id;
                msg.innerText = msg.innerText + box.innerText;
        }
    })
})

