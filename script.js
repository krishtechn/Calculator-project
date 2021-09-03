const input = document.getElementById('input');


function Calculateresult(){
      try{
           input.value = eval(input.value);  
      }
      catch(error){
            alert("Invalid operators");
      }
}


function Clear(){
 input.value = "";
}


function display(opperaters){
   input.value += opperaters;   
}

function Delete(){
   input.value = input.value.slice(0,-1);
}

