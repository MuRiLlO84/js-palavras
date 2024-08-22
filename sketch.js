function setup() {
  createCanvas(450, 450);

}

function draw() {
  
  background("lightgreen")
  fill("purple");
  textSize(50);
  textAlign(CENTER,CENTER);
  
  let maximo = width;
  let minimo = 1;
  let palavra = " Meu esporte";
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let parcial = palavra.substring(0,quantidade);
  text(parcial,225,150);
  
  fill("darkblue");
  textSize(50);
  textAlign(CENTER,CENTER);
  
  let maximo1 = width;
  let minimo1 = 1;
  let palavra1 = " favorito";
  let quantidade1 = map(mouseX, 0, width, 1, palavra.length);
  let parcial1 = palavra1.substring(0,quantidade1);
  text(parcial1,225,200);
  
  fill("red");
  textSize(50);
  textAlign(CENTER,CENTER);
  
  let maximo2 = width;
  let minimo2 = 1;
  let palavra2 = " é o basquete";
  let quantidade2 = map(mouseX, 0, width, 1, palavra.length);
  let parcial2 = palavra2.substring(0,quantidade2);
  text(parcial2,225,250);
}
