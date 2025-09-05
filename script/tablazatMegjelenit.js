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


/* A fapados táblázat kiírása az oldalra */
Papa.parse("adat/tarsasLista.csv",{
    download: true,
    header: true,
    complete: function(results){
        const adat = results.data;
        const table = document.getElementById("tarsasjatekLista-1");
    
    // fejlés létrehozása
    const headerRow = document.createElement('tr');
    Object.keys(adat[0]).forEach(key => {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // adatsorok létrehozása
    adat.forEach(row => {
        const tr = document.createElement("tr");
        Object.values(row).forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    }
});


Papa.parse("adat/tarsasListaKozos.csv",{
    download: true,
    header: true,
    complete: function(results){
        const adat = results.data;
        const table = document.getElementById("tarsasjatekLista-2");
    
    // fejlés létrehozása
    const headerRow = document.createElement('tr');
    Object.keys(adat[0]).forEach(key => {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // adatsorok létrehozása
    adat.forEach(row => {
        const tr = document.createElement("tr");
        Object.values(row).forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    }
});