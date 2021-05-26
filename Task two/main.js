$(document).ready(() => {
    $('#btn').click(function () {


        let bookName = $('#searchText').val();
        getBooks(bookName);



    });


});






function getBooks(bookName) {
    console.log(bookName);


    $.ajax({
        method: 'GET',
        url: "http://openlibrary.org/search.json?q="
            + bookName,


        success: function (data) {

            // console.log(data.docs);
            console.log(data);
        
            // var i;
            // for (i = 0; i < data.docs[3].length; ++i) {
            //     console.log(data.docs[i].author_name);
            // }
            i=0;
            while(i<=data.docs.length){
                result = 
                ` <div class="jumbotron" 
                     <div class=curd>                      
                           <h2>${data.docs[i].title}</h2> 
                           <ul class="list-group" id="full-details">                <li class="list-group-item"><strong>Author Name:</strong>${data.docs[i].author_name}</li> 
                           <li class="list-group-item"><strong>Type:</strong>${data.docs[i].type}</li>   
                           <li class="list-group-item"><strong>Language:</strong>${data.docs[i].language}</li> 
   
                           <li class="list-group-item"><strong>Author Publish Date:</strong>${data.docs[i].publish_date}</li>  
   
                           <li class="list-group-item"><strong>Publisher :</strong>${data.docs[i].publisher}</li>  
   
                           <li class="list-group-item"><strong>Subject:</strong>${data.docs[i].subject}</li>     
                       </div >
                `
   
   
   
                $("#resultDiv").append(result);
                i++;
            };
            

            // result = 
            //  ` <div class="jumbotron" 
            //       <div class=curd>                      
            //             <h2>${data.docs[i].title}</h2> 
            //             <ul class="list-group" id="full-details">                <li class="list-group-item"><strong>Author Name:</strong>${data.docs[i].author_name}</li> 
            //             <li class="list-group-item"><strong>Type:</strong>${data.docs[i].type}</li>   
            //             <li class="list-group-item"><strong>Language:</strong>${data.docs[i].language}</li> 

            //             <li class="list-group-item"><strong>Author Publish Date:</strong>${data.docs[i].publish_date}</li>  

            //             <li class="list-group-item"><strong>Publisher :</strong>${data.docs[i].publisher}</li>  

            //             <li class="list-group-item"><strong>Subject:</strong>${data.docs[i].subject}</li>     
            //         </div >
            //  `



            //  $("#resultDiv").html(result)
        },

    });

}



// fetch(url)
//   .then(function (response) {
//     // The JSON data will arrive here
//   })
//   .catch(function (err) {
//     // If an error occured, you will catch it here
//   });

// document.getElementById("myBtn").onclick = function() {


//     var bookName  = document.getElementById("searchText").value;

//     console.log(bookName);
// };







