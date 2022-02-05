let arr=[];
sendMe.onclick=function() {
    let message=document.getElementById('message').value;
    arr.push(message);
    generateTasks(); 
    checkSpam();
}
    
function generateTasks(){
    let optionString="";
    for (let elem of arr) {
        optionString+=`<p>${elem}</p><hr>`;
    }
// if (optionString.match('viagra')) {
  
//     document.getElementById('dialog').innerHTML="***";
// }
    document.getElementById('dialog').innerHTML=optionString;
    document.getElementById('message').value='';
}
//document.addEventListener("DomContentLoaded", function(){
//     generateTasks();
// })
function checkSpam(optionString) {
    if (arr.match('viagra')) {
        alert('3');
    }
}