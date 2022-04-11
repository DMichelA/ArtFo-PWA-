const container = document.querySelector(".container")
const pictures = [
  { name: "La noche estrellada", image: "images/nocheestrellada.jpg" },
  { name: "El beso", image: "images/elbeso.jpg" },
  { name: "El nacimiento de Venus", image: "images/elnacvenus.jpg" },
  { name: "Guernica", image: "images/gernika.jpg" },
  { name: "La Libertad guiando al Pueblo", image: "images/lalibertad.jpg" },
  { name: "La última cena", image: "images/laultimacena.jpg" },
  { name: "Las Meninas", image: "images/meninas.jpg" },
  { name: "La Gioconda", image: "images/monalisa.jpg" },
  { name: "La persistencia de la memoria", image: "images/persistencia.jpg" },
]

const showPictures = () => {
  let output = ""
  pictures.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <Button class="card--button" >Ver Información</Button>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showPictures)

if ('serviceWorker' in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register('service-worker.js')
      .then(function(){
        console.log("ServiceWorker registered!");
  })
  .catch(function(err){
    console.log("ServiceWorker failed!", err);
  });
});
}
