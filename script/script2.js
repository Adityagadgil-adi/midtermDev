$(document).ready(function(){
    
    $("#info").append("<br>"); 
    $("#info").append("<br>"); 
    for (var i = 0; i < localStorage.length; i++) {
        
        $("#info").append("<button id='abc' onclick = 'myfunction()' value ="+localStorage.key(i)+">"+localStorage.key(i)+" </button>" + " <br>"); 
    }
    
      
});
function myfunction(){

    location.href = '../displaypage/displaypage.html';
    
}