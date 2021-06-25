$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "products.json",
        dataType: "json",
        error: (e) => { console.log(e); },
        success: parseJSON
    })
  

    class prod{
        constructor(id, date, previous, totalDose, totalFully, totalIndi ){
        this.id = id; 
        this.date = date;
        this.previous = previous;
        this.totalDose=totalDose;
        this.totalFully=totalFully;
        this.totalIndi = totalIndi;
    }
}
    function parseJSON(data){

        $("#info").append("<br>")
        $("#info").append("<br>")
        for(let i of data){
            
            report =new dose(991384833,i.report_date,
                i.previous_day_doses_administered,
                i.total_doses_administered,
                i.total_doses_in_fully_vaccinated_individuals,
                i.total_individuals_fully_vaccinated );
                
                localStorage.setItem(report.date, JSON.stringify(report));

        }
        
        
    }
}); 
