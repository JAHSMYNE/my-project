let outputScreen = document.getElementById('output');
function display (num){
    outputScreen.value += num;
// alert('working')
}

function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
        }
        catch(err){
            alert('invalid input');
        }
} 

function Clear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value= outputScreen.value.slice(0,-1)
// alert('working')
}