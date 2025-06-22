// Projeto Agrinho - Festejando a Conexão Campo-Cidade
// Desenvolvido por [Seu Nome] - #agrinho

let fundo;
let tamanhoNuvem = 50;
let solX = 100;
let corDoCampo;

function setup() {
  createCanvas(700, 400);
  fundo = color(135, 206, 235);  // Azul céu
  corDoCampo = color(34, 139, 34); // Verde campo
}

function draw() {
  background(fundo);

  desenharCampo();
  desenharCidade();
  desenharSol();
  desenharNuvem(mouseX, mouseY, tamanhoNuvem);
}

function desenharCampo() {
  fill(corDoCampo);
  rect(0, height / 2, width, height / 2);
}

function desenharCidade() {
  fill(100);
  for (let i = 0; i < 5; i++) {
    let predioAltura = random(40, 100);
    rect(350 + i * 60, height / 2 - predioAltura, 40, predioAltura);
  }
}

function desenharSol() {
  fill(255, 204, 0);
  ellipse(solX, 80, 60, 60);
  solX += 0.5;
  if (solX > width + 30) {
    solX = -30;
  }
}

function desenharNuvem(x, y, tamanho) {
  fill(255);
  ellipse(x, y, tamanho, tamanho / 2);
  ellipse(x + 20, y - 10, tamanho, tamanho / 2);
  ellipse(x - 20, y - 10, tamanho, tamanho / 2);
}

function mousePressed() {
  fundo = color(random(100, 255), random(100, 255), random(100, 255));
}

function keyReleased() {
  tamanhoNuvem += 10;
  if (tamanhoNuvem > 100) {
    tamanhoNuvem = 50;
  }
}

      
