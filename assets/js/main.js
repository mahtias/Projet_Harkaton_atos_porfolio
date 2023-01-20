
/*imTail.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      imTail.style.left = timePassed / 5 + 'px';

      if (timePassed > 2000) clearInterval(timer);

    }, 20);
  }
  */

let eltsH = document.getElementsByClassName('h');
console.log(eltsH);

eltsH.fo

for (let elt in eltsH) {
   console.log(eltsH[elt]);
}


// ici c'est la recuperartion de formulaire de contact
let objet = document.querySelector("#my-fom")
   console.log(objet)


   objet.addEventListener("keyup", function (event) {
  if(objet.email.validity.typeMismatch && objet.password) {
    objet.setCustomValidity("J'attends un e-mail, mon cher  et un mot de pass !");
  } else {
    objet.setCustomValidity("");
  }
});
