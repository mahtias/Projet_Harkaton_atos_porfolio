
imTail.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      imTail.style.left = timePassed / 5 + 'px';

      if (timePassed > 2000) clearInterval(timer);

    }, 20);
  }

let eltsH = document.getElementsByClassName('h');
console.log(eltsH);

eltsH.fo

for (let elt in eltsH) {
   console.log(eltsH[elt]);
}
