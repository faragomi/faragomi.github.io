
/* PapaParse meglétének ellenőrzése */
// console.log("PapaParse betöltve:", typeof Papa !== "undefined");

/* A táblázat adatainak kiírása Consolban */
/*
Papa.parse("adat/tarsasLista.csv",{
    download: true,
    header:true,
    complete: function(results){
        console.log("Beolvasott adatok:", results.data);
    }
});
*/


/* Adatok tárolására létrehozott változók */
/***** Első táblázat *****/
let mindenJatekListaSajat = [];  // teljes csv tartalma
let szurtJatekListaSajat = [];   // aktuálisan szűrt lista

/***  Második táblázat ***/
let mindenJatekListaKozos = [];  // teljes csv tartalma
let szurtJatekListaKozos = [];   // aktuálisan szűrt lista


/***** Saját lista, első táblázat *****/
Papa.parse("adat/tarsasLista.csv",{
    download: true,
    header: true,
    complete: function(results){
        mindenJatekListaSajat = results.data;
        szurtJatekListaSajat = mindenJatekListaSajat;
        renderTable(szurtJatekListaSajat,"tarsasLista");
        console.log("Saját lista betöltve:", mindenJatekListaSajat.length);
    }
    
});


/***** Közös lista, második táblázat *****/
Papa.parse("adat/tarsasListaKozos.csv",{
    download: true,
    header: true,
    complete: function(results){
        mindenJatekListaKozos = results.data;
        szurtJatekListaKozos = mindenJatekListaKozos;
        renderTable(szurtJatekListaKozos,"tarsasListaKozos");
        console.log("Közös lista betöltve", mindenJatekListaKozos.length);
    }
    
    
});


const fejlecMap = {
    tarsasjatekNev : "Játék neve",
    tarsasjatekID : "Társasjáték ID",
    alapjatekNev: "Alapjáték neve",
    alapjatekID: "Alapjáték ID",
    jatekNyelv: "játék nyelve",
    nyelvfuggetlen: "Nyelvfüggetlen?",
    magyarJatekszabaly: "Magyar játékszabály elérhető?",
    minJatekos: "Minimális játékosszám",
    maxJatekos: "Maximális játékosszám",
    kiadasEv: "Kiadás éve",
    kiado: "Kiadó",
    megjegyzes: "Megjegyzés",
    szerzo: "Szerző"
};

/***** Tábla rajzolása *****/

function renderTable(jatekLista, tablaID){
    const tabla = document.getElementById(tablaID);
    tabla.innerHTML = "";

    if(!jatekLista.length){
        return;
    }

    // fejléc létrehozása
    const fejlecSor = document.createElement("tr");
    Object.keys(jatekLista[0]).forEach(key => {
        const th = document.createElement("th");
        th.textContent = fejlecMap[key] ?? key;
        th.dataset.column = key;
        fejlecSor.appendChild(th);
    });
    tabla.appendChild(fejlecSor);

    // adatsorok létrehozása
    jatekLista.forEach( sor => {
        const tr = document.createElement("tr");
        Object.values(sor).forEach(ertek => {
            const td = document.createElement("td");
            td.textContent = ertek;
            tr.appendChild(td);
        });
        tabla.appendChild(tr);
    });
}

document.getElementById("jatekNevSzuro").addEventListener("input",szur);
function szur(){
    const keresettSzoveg = this.value.toLowerCase();
    
    szurtJatekListaSajat = mindenJatekListaSajat.filter(jatek =>
        jatek.tarsasjatekNev &&
        jatek.tarsasjatekNev.toLowerCase().includes(keresettSzoveg)
    );

    renderTable(szurtJatekListaSajat, "tarsasLista");
}