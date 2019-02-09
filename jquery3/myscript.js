$(document).ready(function() {
    $('#advance-group').hide();
    $('#advance').click(function(){
        $('#advance-group').toggle();
    })
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var x="";
        response.forEach(element => {                      
            console.log(element.name, element.age, element.brand, element.color, element.model, element.price);
            x +="<tr>"+
            "<td>"+ element.name +"</td>"+
            "<td>"+ element.age +"</td>"+ 
            "<td>"+ element.brand +"</td>"+
            "<td>"+ element.color +"</td>"+ 
            "<td>"+ element.model +"</td>"+
            "<td>"+ element.price  +"</td></tr>";
            $('#teety').html(x);  

        });
    });
});                   

$('#submit-btn').click(function(){
    console.log($('#input-text').val());
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var x="";
        if($('#input-text').val() == ""){ 
            response.forEach(element => {                      
                console.log(element.name, element.age, element.brand, element.color, element.model, element.price);
                x +="<tr>"+
                "<td>"+ element.name +"</td>"+
                "<td>"+ element.age +"</td>"+ 
                "<td>"+ element.brand +"</td>"+
                "<td>"+ element.color +"</td>"+ 
                "<td>"+ element.model +"</td>"+
                "<td>"+ element.price  +"</td></tr>";
                $('#teety').html(x);  
    
            });
        }
        else{
            response.forEach(element => {                      
                if(element.name.includes($('#input-text').val()) || $('#input-text').val() == element.age || element.brand.includes($('#input-text').val()) || element.color.includes($('#input-text').val()) || $('#input-text').val() == element.model || $('#input-text').val() == element.price ){
                x +="<tr>"+
                "<td>"+ element.name +"</td>"+
                "<td>"+ element.age +"</td>"+ 
                "<td>"+ element.brand +"</td>"+
                "<td>"+ element.color +"</td>"+ 
                "<td>"+ element.model +"</td>"+
                "<td>"+ element.price  +"</td></tr>";
                $('#teety').html(x);  }
                
            
    
            });
        }
    });
})


$('#advance-search-btn').click(function(){
    console.log($('#input-text').val());
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var x="";
        var brand = $('#input-brand').val();
        var model = $('#input-model').val();
            response.forEach(element => {                      
                console.log(brand,model);
                console.log(model == element.model);
                if(element.brand.includes(brand) && element.model.includes(model) ){ 
                    console.log("hello");
                    x +="<tr>"+
                    "<td>"+ element.name +"</td>"+
                    "<td>"+ element.age +"</td>"+ 
                    "<td>"+ element.brand +"</td>"+
                    "<td>"+ element.color +"</td>"+ 
                    "<td>"+ element.model +"</td>"+
                    "<td>"+ element.price  +"</td></tr>";
                    $('#teety').html(x);  
                }
            });
        
        });
    });
    