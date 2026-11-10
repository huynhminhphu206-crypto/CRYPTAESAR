let text = "";
let number = 0;
let char = "";
document.getElementById("DECRYPT").onclick = function(){
 text = document.getElementById("char").value;
 number = Number(document.getElementById("number").value);

 char = "";
 
   for (let i = 0; i < text.length; i++){
    let text_number = text.charCodeAt(i);
    text_number -= number;
    let new_text = String.fromCharCode(text_number);
    char += new_text;
   }
  
 document.getElementById("result").textContent = `${char}`;
}
document.getElementById("ENCRYPT").onclick = function(){
    text = document.getElementById("char").value;
    number = Number(document.getElementById("number").value);

    char = ""

    for (let i = 0 ; i < text.length ; i++){
        let text_number = text.charCodeAt(i);
        text_number += number;
        let new_text = String.fromCharCode(text_number)
        char += new_text;
    }
   
    document.getElementById("result").textContent = `${char}`;
}