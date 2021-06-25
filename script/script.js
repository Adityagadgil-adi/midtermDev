$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "products.json",
        dataType: "json",
        error: (e) => { console.log(e); },
        success: parseJSON
    })
  

    class prod{
        constructor(product, model, item_num, distributors,pricing){
        this.product = product; 
        this.model = model;
        this.item_num = item_num;
        this.distributors=distributors;
        this.pricing=pricing;
        
    }
}
    function parseJSON(data){

        $("#info").append("<br>")
        $("#info").append("<br>")
        for(let i of data){
            
            report =new prod(i.product,
                i.model,
                i.item_num,
                i.distributors,
                i.pricing);
                
                localStorage.setItem(report.product, JSON.stringify(report));

        }
        
        
    }
}); 
