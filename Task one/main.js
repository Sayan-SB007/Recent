
$(document).ready(function () {


    $("#mydatatable").dataTable({
        pageLength : 5,
        colReorder: true,
        searching: false,
        "processing": true,
        ajax : "https://fakerapi.it/api/v1/companies?_seed=1&_quantity=10",

        dom: 'Bfrtip',
        buttons: [
           'excel', 
        ] , 
        "pagingType": "full_numbers",

        "columns": [   
            {data: "name"},
            {data: "email"},
            {data: "addresses[]", render : function(data){
                var arr = data[0];

                // let  keys = Object.keys(arr);
                // let val = Object.values(arr);
                // let entries = Object.entries(arr);

             
                
                console.log(data);
                console.log(arr);
               

                return('buildingNumber :' + arr.buildingNumber +`<br>`+
              'city : ' + arr.city + `<br>` + 'country:'+ arr.country + `<br>` + "latitude"+arr.latitude + `<br>` + "longitude" + arr.longitude +`<br>`+"street" + arr.street+`<br>`+   'streetName:'+arr.streetName +`<br>` +
              "zipcode"+arr.zipcode  )
                 
            }
        },
            {data: "website"},
            {data: "image" , render : function(data)  {
                return '<img src="' + data + '" height="250" width="300"/>';
              }
            }
            
        ],
   
       
    })


  
 
});


