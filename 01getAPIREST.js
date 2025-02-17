/*
APIS PUBLICAS
https://github.com/public-apis/public-apis
https://api-ninjas.com/
  axios.get('https://api.api-ninjas.com/v1/cars?limit=2&model=camry', {
    responseType: 'json', 
    headers: {
      'X-Api-Key': 'lAC2+MkgFf5JvYZrropp4w==oHDCNcQFNlnFhRw0'
    }
  })

La que uso yo
https://jikan.moe/

En este ejemplo solicitamos info a API REST y mostramos algún elemento
*/

var boton = document.getElementById('axiosget');
boton.addEventListener('click', function() {

  axios.get('http://localhost:9000/api/characters', {
    responseType: 'json'
  })
    .then(function(res) {
      if(res.status==200) {
        console.log(res);
       var carac = res.data.data;
        dibuja(carac);
      } 
    })
    .catch(function(err) {
      console.log(err);
    })
    
});
function dibuja(gusArray) {
  var body = document.getElementsByTagName("body")[0];

  gusArray.forEach(gus => {
    let parag1 = document.createElement("p");
    parag1.className = "nombre";
    parag1.innerHTML = gus.mal_id;
    body.appendChild(parag1);

    let parag2 = document.createElement("p");
    parag2.className = "source";
    parag2.innerHTML = gus.source;
    body.appendChild(parag2);

    let foto = document.createElement("img");
    foto.className = 'pic';
    foto.src = gus.images.jpg.image_url;
    body.appendChild(foto);
  });
}