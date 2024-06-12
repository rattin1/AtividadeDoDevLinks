trocaTema = () => {
//  const html = document.documentElement;

//  document.querySelector("body").style.background = "pink"

 document.documentElement.classList.toggle("light");

 const isLight = document.documentElement.classList.contains("light");

 const imagem = 
 isLight ? "./img/eu2.png" 
 : "./img/eu.jpg";

 document.querySelector("#perfil img").setAttribute("src", imagem);

const altTxt = isLight 
? "bebê fofinho com um bigode de glacê"
: "bebê fofinho com um bigode de glacê soltando lasers pelos olhos";

document.querySelector("#perfil img").setAttribute("alt", altTxt);

}

