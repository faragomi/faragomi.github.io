/********************************************************************************
A táblázat oszlopai 2026.01.04-én

01 - Társasjáték név,                           tarsasjatekNev,     szöveg
02 - Társasjáték ID,                            tarsasjatekID,      szám
03 - Alapjáték?,                                alapjatek,          igen/nem       
04 - Az alapjáték neve, ha kiegészítő lenne,    alapjatekNev,       szöveg
05 - Alapjáték ID,                              alapjatekID,        szám
06 - A játék nyelve,                            jatekNyelv,         szöveg
07 - A játék nyelvfüggetlen?,                   nyelvfuggetlen,     igen/nem
08 - Van hozzó magyar szabály?,                 magyarJatekszabaly, igen/nem
09 - Minimális játékosszám,                     minJatekos,         szám
10 - Maximális játékosszám,                     maxJatekos,         szám
11 - Kiadás éve,                                kiadasEv,           szám
12 - Kiadó,                                     kiado,              szöveg
13 - Megjegyzes,                                megjegyzes,         szöveg
14 - Szerző,                                    szerzo,             szöveg

********************************************************************************/

const gombSzuroMegjelenit = document.getElementById("jatekListaSzuro-gomb");        // szuro gomb megkeresése ID alapján
const gombLathatoOszlopokValaszt = document.getElementById("lathatoOszlopok-gomb"); // oszlop láthatóság gomb megkeresése ID alapján

/* Oszlop megjelenítéshez tartozó checkboxok megkeresése */
const tarsasjatekIDChecbox = document.getElementById("tarsasjatekID-oszlopLathatosag");
const alapjatekChecbox = document.getElementById("alapjatek-oszlopLathatosag");
const alapjatekNevChecbox = document.getElementById("alapjatekNev-oszlopLathatosag");
const alapjatekIDChecbox = document.getElementById("alapjatekID-oszlopLathatosag");
const jatekNyelveChecbox = document.getElementById("jatekNyelve-oszlopLathatosag");
const nyelvfuggetlenChecbox = document.getElementById("nyelvfuggetlen-oszlopLathatosag");
const magyarJatekszabalyChecbox = document.getElementById("magyarJatekszabaly-oszlopLathatosag");
const minJatekosChecbox = document.getElementById("minJatekos-oszlopLathatosag");
const maxJatekosChecbox = document.getElementById("maxJatekos-oszlopLathatosag");
const kiadasEvChecbox = document.getElementById("kiadasEv-oszlopLathatosag");
const kiadoChecbox = document.getElementById("kiado-oszlopLathatosag");
const megjegyzesChecbox = document.getElementById("megjegyzes-oszlopLathatosag");
const szerzoChecbox = document.getElementById("szerzo-oszlopLathatosag");

gombSzuroMegjelenit.addEventListener("click", function() {
    const szuroMegjelenit = this.nextElementSibling;
    szuroMegjelenit.classList.toggle("szuro-megjelenit");
});

gombLathatoOszlopokValaszt.addEventListener("click", function() {
    const tablaMegjelenit = this.nextElementSibling;
    tablaMegjelenit.classList.toggle("lathatoOszlopok-tabla-megjelenit");
});

