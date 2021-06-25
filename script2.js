$(document).ready(function(){
    var arr = [];
    $("#info").append("<br>"); 
    $("#info").append("<br>"); 
    for (var i = 0; i < localStorage.length; i++) {
        arr.push(localStorage.key(i));
        $("#info").append("<button id='abc' onclick = 'myfunction()' value ="+localStorage.key(i)+">"+localStorage.key(i)+" </button>" + " <br>"); 
    }
    
      
});
function myfunction(){

    // $("#dis").append(localStorage.getItem($("#but").value));
   $("#dis").append(localStorage.getItem((document.getElementById("abc").value)));
   $("#dis").append("<br>");
   // (document.getElementById("abc").value);
}