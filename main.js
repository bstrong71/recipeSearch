
let searchResult = document.querySelector("#searchResult");
let button = document.getElementById('button');


button.addEventListener("click", function(){
  let input = document.getElementById('search');
  let entry = "https://recipepuppyproxy.herokuapp.com/api/?q=" + input.value;
  searchResult.innerHTML = "";
  fetch(entry)
    .then(function(response){
      if(response.status !== 200){
        console.log(response);
        return;
      }
      response.json().then(function(data){

        for (var i = 0; i < 8; i++) {
          let recipe = document.createElement("div");
          if(data.results[i].thumbnail === ""){
            recipe.innerHTML += `
              <h5>${data.results[i].title}</h5>
              <img src="https://s-media-cache-ak0.pinimg.com/736x/2b/60/b7/2b60b75c366d21b5f45b949f0faece99--funny-cats-funny-animals.jpg">
              <a href="${data.results[i].href}"></a>
            `;
          } else {
          recipe.innerHTML += `
            <h5>${data.results[i].title}</h5>
            <img src="${data.results[i].thumbnail}">
            <a href="${data.results[i].href}"></a>
          `;
          }
          searchResult.appendChild(recipe);
        }
      });
    });

})
