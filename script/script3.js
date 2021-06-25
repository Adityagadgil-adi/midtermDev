$(document).ready(function(){
   
    $("#info").append("<br>"); 
    $("#info").append("<br>"); 

    for (var i = 0; i < localStorage.length; i++) {
        
        $("#info").append(localStorage.key(i)); 
        $("#info").append(localStorage.getItem($("abc").value)); 

    }
    
      
});
