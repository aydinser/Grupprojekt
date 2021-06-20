const artistInput = document.getElementById("artist");
const titleInput = document.getElementById("title");
const button = document.getElementById("button");

artistInput.addEventListener("keyup", getText);
titleInput.addEventListener("keyup", getText);
button.addEventListener("click",getApi)


 /// function för att hämta värden från båda input
 /// Och visa knappen när det är fylld.
function getText(e){ 
    const value = e.currentTarget.value;
    button.disabled = false;
    if( value === ""){
        button.disabled = true;
    } 
   //console.log(e.target.value)
}




/// function för att hämta API
function getApi(){
    
const URL = "http://ianertson.com:3500/";
    
     const artist = artistInput.value.trim();  //tabort mellanrum på texten
     const title = titleInput.value.trim();  

     fetch(`${URL}${artist}/${title}`)
     .then(function(response){
         response.json()
         .then(function(data){
             const lycris = data[0].lyrics;
            document.getElementById("output").innerText = lycris;
             
         })
     })
    artistInput.value = ""; // Töm inputs
    titleInput.value = "";
}
