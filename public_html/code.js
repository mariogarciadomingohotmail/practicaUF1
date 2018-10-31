/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mapa;
var F1 = { x: 11, y: 15, sentit: 1 };
var F2 = { x: 15, y: 16, sentit: 1 };
var F3 = { x: 15, y: 14, sentit: 1 };
var Player = { x: 9, y: 10, sentit: 1 };
InicialitzarMapa();
ColocarElements();
function InicialitzarMapa() {
 var MapCode = "000000000000011111000000000000011111111111011111011111111110010101000011000100010100000010010101111111110101110111111110010100100000010101011100000010010100100011111111000111111110010111111110100001100000100000010101000010111000100111111110010101000010101111111100000010011101111110100100100111111110000101000010100100100100000100110111022011111111111111111101110001000010100200101010010001111111111110100200101010011111110001001010102220101010010001110111001010102220101011111101000100001010100000101000100100011100001010111111101011111110010111111110100000101010000010010100001011111111111110222010010100001010000100100010002010010111111111111111111111102010010100010101000000100000100010010100111111111111111111111110010100100000010101000000010010011111111111010101111111111110010010101001110101110010101010010010101001000100010010101010011111111111011111011111111110000000000000011111000000000000".split("");
 mapa = new Array(30);
 cont = 0;
 contY = 0;
 mapa[0] = new Array(30);
 for (var i = 0; i < 30; i++) {
  mapa[i] = new Array(30);
  for (var x = 0; x < 30; x++) {
   mapa[i][x] = MapCode[cont];
   cont++;
  }
 }
}
function MostrarMapa() {
 var out = "";
 for (var i = 0; i < 30; i++) {
  for (var x = 0; x < 30; x++) {
   if (mapa[i][x] == 0)
    out = out + "##"
   else if (mapa[i][x] == 1)
    out = out + "  "
   else if (mapa[i][x] == 2)
    out = out + "//";
    else if (mapa[i][x] == 3)
    out = out + "F3";
    else if (mapa[i][x] == 4)
    out = out + "F4";
    else if (mapa[i][x] == 5)
    out = out + "F5";
    else if (mapa[i][x] == 6)
    out = out + "O:";
  }
  out = out + "\n";
 }
 console.log(out);
}
function ColocarElements() {
 mapa[F1["x"]][F1["y"]] = "3";
 mapa[F2["x"]][F2["y"]] = "4";
 mapa[F3["x"]][F3["y"]] = "5";
 mapa[Player["x"]][Player["y"]] = "6";
 MostrarMapa();
}






