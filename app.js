let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg-screen");
let msg2 = document.querySelector(".msg-screen2");
let expression = "";
let bs = document.querySelector(".bs");

let shortNum = (num)=>{
    if (Number.isInteger(num)){
        return num;
    }else{
        return parseFloat(num.toFixed(7));
    }
}
for(let box of boxes){
    box.addEventListener("click",()=>{
        msg.style.fontSize = "3.5rem";
        msg2.style.fontSize = "3.5rem";

        if (box.id === "="){
            try{
                msg.innerText = shortNum(eval(expression));
            }
            catch {
                msg.innerText = "Error";
            }            
        }
        else if (box.id === "%"){
            msg.innerText = msg.innerText/100;
        }
        else if (box.id === "bs"){
            expression = expression.slice(0,-1);
            msg.innerText = msg.innerText.slice(0,-1);
            if (expression === ""){
                    msg.classList.add("dis");
                    msg2.classList.remove("dis");
            }
        }
        else if (box.id === "c"){
            msg.innerText = "";
            expression = "";
            msg.classList.add("dis");
            msg2.classList.remove("dis");
        }
        else{
            if (msg.innerText.length<10){
                 msg.classList.remove("dis");
                 msg2.classList.add("dis");
                 msg.innerText = msg.innerText + box.innerText ;
                 expression = expression + box.id;
            }
            else{
                msg.style.fontSize = "2.5rem";
                msg.innerText = "Not Allowed"
            }
           
        }
    })
}
