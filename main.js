window.addEventListener("load", () => {
  const kontener = document.querySelectorAll("article");
  kontener[0].innerHTML = "<button>Kattints ide!</button>";

  /* Egyik féle megoldás */

  const gombElem = document.querySelectorAll("article button");
  gombElem[0].addEventListener("click", () => {
    let x = 0;
    console.log(x + 1);
  });

  /* Másik féle megoldás */

  const kep = "<img src='cica.jpg' alt='miaucica'>";
  kontener[0].innerHTML += kep;
  const kepElem = document.querySelectorAll("article img");
  kepElem[0].addEventListener("mouseover", () => {
    kepElem[0].style.border = "1px solid black";
    kepElem[0].style.width = "30%";
  });
  kepElem[0].addEventListener("mouseout", () => {
    kepElem[0].style.border = "0";
  })
});
