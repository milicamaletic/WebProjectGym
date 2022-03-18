import { Clan } from "./clan.js";
import { Radnik } from "./radnik.js";
import { Teretana } from "./teretana.js";
/*
let teretana = new Teretana(1, "Revolucija", "Cairska 3");
teretana.clan.push(new Clan(1, "Pera", "Peric", 1999, 180, 80));
teretana.clan.push(new Clan(1, "Pera", "Peric", 1999, 180, 80));
teretana.clan.push(new Clan(1, "Pera", "Peric", 1999, 180, 80));
teretana.clan.push(new Clan(1, "Pera", "Peric", 1999, 180, 80));
teretana.clan.push(new Clan(1, "Pera", "Peric", 1999, 180, 80));

teretana.radnik.push(new Radnik(1, "Mira", "Miric", 1999));
teretana.radnik.push(new Radnik(1, "Mira", "Miric", 1999));
teretana.radnik.push(new Radnik(1, "Mira", "Miric", 1999));
teretana.radnik.push(new Radnik(1, "Mira", "Miric", 1999));
teretana.radnik.push(new Radnik(1, "Mira", "Miric", 1999));
teretana.radnik.push(new Radnik(1, "Mira", "Miric", 1999));
teretana.radnik.push(new Radnik(1, "Mira", "Miric", 1999));
teretana.radnik.push(new Radnik(1, "Mira", "Miric", 1999));
teretana.radnik.push(new Radnik(1, "Mira", "Miric", 1999));
teretana.radnik.push(new Radnik(1, "Mira", "Miric", 1999));
teretana.radnik.push(new Radnik(1, "Mira", "Miric", 1999));

teretana.crtajTeretanu(document.body);
*/

const vratiTeretaneURL = "https://localhost:5001/Teretana/sveTeretane";

function pribaviTeretane(){
    fetch(vratiTeretaneURL, {
        method: "GET"
    }).then(resp => resp.json())
    .then(teretane => {
        teretane.forEach(teretana => {
            let t = new Teretana(teretana.teretanaId, 
                teretana.naziv, teretana.adresa, teretana.kapacitet);

                teretana.clan.forEach(el=>{
                t.dodajClana(new Clan(el.clanId, el.ime, el.prezime,
                                    el.godinaRodjenja, el.visina, el.tezina));
            })
            teretana.radnik.forEach(el=>{
                t.dodajRadnika(new Radnik(el.radnikId, el.ime, el.prezime, el.godinaRodjenja));
            })
            t.crtajTeretanu(document.body);
        });
    })
}

pribaviTeretane();