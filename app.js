let boxes = document.querySelectorAll(".box");
let msg =  document.querySelector(".msg-screen");
let msg2 =  document.querySelector(".msg-screen2");
msg2.innerText = "";

let expression ="";


function shortNum(num) {
    if (Number.isInteger(num)) {
        return num;
    } else {
        return parseFloat(num.toFixed(7));
    }
}

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if (box.id == "="){
            try{
                msg2.innerText = shortNum(eval(expression));
                expression = eval(expression);
            }
            catch(err){
                msg2.innerText = "Error";
            }
        }
        else if (box.id == "c"){
            msg2.innerText = "";
            msg2.classList.add("dis");
            msg.classList.remove("dis");           
            expression = "";
        }
        else if (box.id ==="%"){
            msg2.innerText = expression/100;
            expression = expression/100;
        }
        else {
            console.log(expression.length)
            if (expression.length<12) {
                msg2.classList.remove("dis");
                msg.classList.add("dis");
                expression = expression + box.id;
                msg2.innerText = msg2.innerText + box.innerText;
            }

            else{
                msg2.innerText = "Not Allowed"
            }
        }
    })
})

