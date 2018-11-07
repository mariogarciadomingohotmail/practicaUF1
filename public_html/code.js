/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mapa;
var mapa_temp;
//0 up , 1 down, 2 right, 3 left
var F1 = { x: 0, y: 0, sentit: 0 };
var F2 = { x: 0, y: 0, sentit: 0 };
var F3 = { x: 0, y: 0, sentit: 0 };
var Player = { x: 0, y: 0, sentit: 0, gir: 0 };
InicialitzarMapa();

InicialitzarJugadors();
setInterval(Rellotge, 400);
function Rellotge(){
	MoureJugador();
	ColocarElements();
}
function MoureJugador()
{
		if (Can(Player["x"], Player["y"], 	Player["gir"])) {
			Player["sentit"]=Player["gir"];
		}
		if (Can(Player["x"], Player["y"], 	Player["sentit"])) 
		{
			switch (Player["sentit"]) {
				case 0:
				Player["x"]=Player["x"]-1;
					break;
				case 1:
				Player["x"]=Player["x"]+1;
					break;
				case 2:
				Player["y"]=Player["y"]+1;
					break;
				case 3:
				Player["y"]=Player["y"]-1;
					break;
				default:
					return false;
					break;
			}
		}else
		{
			Player["sentit"]=SentitAleatori(Player["x"],Player["y"],Player["sentit"]);
			Player["gir"]=Player["sentit"];
			MoureJugador();
		}
}
function SentitAleatori(x,y,sentit)
{
	var sentits = [];

	if(Can(x,y,0) & sentit!=0 & sentit!=1)
	{
		sentits[sentits.length]=0 ;
	}
	if(Can(x,y,1)& sentit!=1 & sentit!=0)
	{
		sentits[sentits.length]=1;
	}
	if(Can(x,y,2)& sentit!=2 & sentit!=3)
	{
		sentits[sentits.length]=2;
	} 
	if(Can(x,y,3)& sentit!=3 &  sentit!=2)
	{
		sentits[sentits.length]=3;
	}

	return sentits[ parseInt(Math.random()*sentits.length)];
}
function InicialitzarMapa() {
	var MapCode = "000000000000022222000000000000011111111111022222011111111110010101000001000200010100000010010101111111110201110111111110010100100000010101011100000010010100100011111111000111111110010111111110100101100000100000010101000010100100100111111110010101000010111111111100000010011101111110100100100111111110000101000010100100100100000100220111022011111111111111111102220001000010100000101010010002222211111110102220101010011222220001001010102220101010010002220111001010102220101011111102000100001010100000101000100100011100001010111111101011111110010111111110100000101010000010010100001011111111111110222010010100001010000100100010002010010111111111111111111111102010010100010101000000100000100010010100111111111111111111111110010100100000010101000000010010011111111111010201111111111110010010101001110201110010101010010010101001000200010010101010011111111111022222011111111110000000000000022222000000000000".split("");
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
function Can(x, y, dir) {
	switch (dir) {
		case 0:
			if (mapa[x - 1][y] != 2 && mapa[x - 1][y] != 0) {
				return true;
			} else return false;
			break;
		case 1:
			if (mapa[x + 1][y] != 2 && mapa[x + 1][y] != 0) {
				return true;
			} else return false;
			break;
		case 2:
			if (mapa[x][y + 1] != 2 && mapa[x][y + 1] != 0) {
				return true;
			} else return false;
			break;
		case 3:
			if (mapa[x][y - 1] != 2 && mapa[x][y - 1] != 0) {
				return true;
			}
			else return false;
			break;
		default:
			return false;
			break;
	}
}
function InicialitzarJugadors() {
	var x = 0;
	var y = 0;
	do {
		x = Math.floor(Math.random() * 30);
		y = Math.floor(Math.random() * 30);
	} while (mapa[x][y] != 1);
	F1["x"] = x;
	F1["y"] = y;
	F1["sentit"] = SentitAleatori(x,y,-1);
	x = 0;
	y = 0;
	do {
		x = Math.floor(Math.random() * 30);
		y = Math.floor(Math.random() * 30);
	} while (mapa[x][y] != 1);
	F2["x"] = x;
	F2["y"] = y;
	F2["sentit"] = SentitAleatori(x,y,-1);
	x = 0;
	y = 0;
	do {
		x = Math.floor(Math.random() * 30);
		y = Math.floor(Math.random() * 30);
	} while (mapa[x][y] != 1);
	F3["x"] = x;
	F3["y"] = y;
	F3["sentit"] = SentitAleatori(x,y,-1);
	x = 0;
	y = 0;
	do {
		x = Math.floor(Math.random() * 30);
		y = Math.floor(Math.random() * 30);
	} while (mapa[x][y] != 1);
	Player["x"] = x;
	Player["y"] = y;
	Player["sentit"] = SentitAleatori(x,y,-1);
	Player["gir"] = 	Player["sentit"] ;


}
function MostrarMapa() {
	console.clear();
	var out = "";
	for (var i = 0; i < 30; i++) {
		for (var x = 0; x < 30; x++) {
			if (mapa_temp[i][x] == 0)
				out = out + "##"
			else if (mapa_temp[i][x] == 1)
				out = out + "  "
			else if (mapa_temp[i][x] == 2)
				out = out + "//";
			else if (mapa_temp[i][x] == 3)
				out = out + "F1";
			else if (mapa_temp[i][x] == 4)
				out = out + "F2";
			else if (mapa_temp[i][x] == 5)
				out = out + "F3";
			else if (mapa_temp[i][x] == 6)
				out = out + "O:";
		}
		out = out + "\n";
	}
	console.log(out);


}
function NetejarMapa() {
	mapa_temp = new Array(30);
	for (var i = 0; i < 30; i++) {
		mapa_temp[i] = new Array(30);
		for (var x = 0; x < 30; x++) {
			mapa_temp[i][x] = mapa[i][x];
			cont++;
		}
	}

}
function ColocarElements() {
	NetejarMapa();
	mapa_temp[F1["x"]][F1["y"]] = "3";
	mapa_temp[F2["x"]][F2["y"]] = "4";
	mapa_temp[F3["x"]][F3["y"]] = "5";
	mapa_temp[Player["x"]][Player["y"]] = "6";
	MostrarMapa();


}

function TeclaPitjada(e) {
	if (e["code"] == "ArrowUp") {
		Player["gir"]=0; 
	
	} else
		if (e["code"] == "ArrowDown") {
			Player["gir"]=1; 
			
		}
	if (e["code"] == "ArrowRight") {
		Player["gir"]=2; 
		
	}
	if (e["code"] == "ArrowLeft") {
		Player["gir"]=3; 
	
	}
}
