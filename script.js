$(document).ready(function () {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //console.log(data);
      var pokemons = data.results;
      //a.push(data.results);
      console.log(pokemons);
      for (const pokemon in pokemons) {
        $(".container").append(
          `<div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${pokemons[pokemon].name}</h5>
          <p></p>
        </div>
      </div>`
        );
      }
    });
});

/*.ajax({
  url: "https://pokeapi.co/api/v2/pokemon",
  dataType: "json",
  type: "get",
  success: function (result) {
    console.log(result);
    result.each(function(index){
      $("h5")
    })
  },
});*/
