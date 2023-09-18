
let total =0 ;
let operatorNum ="";
let accumulator = "";
let array = [];
let statusEqual = false;

function continueCalculate(status){
    if(status){
        document.getElementById("num").textContent  = total;
        document.getElementById("sum").textContent  =  "";
        //clear the content in an array and then push the total as the initial value
        
        displayOperator();
        //total = 0;
        status = false;
    }
    else{
        //status = false;
        displayOperator();
    }
}


//Display the operator
function displayOperator(){
    document.getElementById("num").textContent  += operatorNum;
    operatorNum ="";
    accumulator ="";
    
}
//Mathematical Operation
function add(){
    operatorNum += "+";
    if(accumulator != "")
        array.push(parseFloat(accumulator));
    array.push(operatorNum);
    continueCalculate(statusEqual);
}

function subtract(){
    operatorNum += "-";
    if(accumulator != "")
        array.push(parseFloat(accumulator));
    array.push(operatorNum);
    continueCalculate(statusEqual);
}

function divide(){
    operatorNum += "/";
    if(accumulator != "")
        array.push(parseFloat(accumulator));
    array.push(operatorNum);
    continueCalculate(statusEqual);
}

function multiply(){
    operatorNum += "x";
    if(accumulator != "")
        array.push(parseFloat(accumulator));
    array.push(operatorNum);
    continueCalculate(statusEqual);;
}



//Reset everything
function reset(){
 
    operatorNum = "";
    document.getElementById("sum").textContent  =  "";
    document.getElementById("num").innerText  =  "";    
    array = [];
    total =0;
    statusEqual = false;
}

//Delete element (Deal with this later on)
// function deleteNum(){
//     document.getElementById("num").value  += total;
//     document.getElementById("operator").textContent  =  "";
// }

//Calculate the total

function equal(){
    statusEqual = true;
    array.push(parseFloat(accumulator));
    accumulator = "";
    //Find the operator within the array and perform the mathematical calculation
    for(let i=0; i<array.length; i++){
       
        if(array[i] == "x"){
            array[i-1] = array[i-1] * array[i+1];
            array.splice(i,2);
            i -=1;
        }
        else if(array[i] == "/"){
            array[i-1] = array[i-1] / array[i+1];
            array.splice(i,2);
            i -=1;
        }
       
            
        else continue;
    
    }
    for(let i=0; i<array.length; i++){
        if(array[i] == "-"){
            array[i-1] = array[i-1] - array[i+1];
            array.splice(i,2);
            i -=1;
        }
        else if(array[i] == "+"){
            array[i-1] = array[i-1] + array[i+1];
            array.splice(i,2);
            i -=1;            
        }
  
        else continue;

    }
    operatorNum += " = ";
    displayOperator();    
    //Display final result
    total = array[0];
    document.getElementById("sum").textContent  =  total;

}


//Push all the number in an array
function display(number){
    document.getElementById("num").textContent  += number;
    accumulator += number;
}


function clearCurrent(){
   let character = document.getElementById("num").textContent;
   character = character.slice(0,-1);
   document.getElementById("num").textContent = character;
}
 
//Create a function that enable a mathematical calculation
// function continueCalculate(status){
//     if(status){
//         document.getElementById("num").textContent  = total;
//         document.getElementById("sum").textContent  =  "";
//         //clear the content in an array and then push the total as the initial value
//         array = [];
//         array.push(total);

//         operatorNum = "";
//         total = 0;
//         status = false;
//     }
//     else{
//         status = false;
//     }
// }




// function reset(){
//     num =0;
//     operatorNum = "";
//     document.getElementById("sum").textContent  =  "";
//     document.getElementById("num").innerText  =  "";    
//     array = [];
//     total =0;
//     statusEqual = false;
// }



