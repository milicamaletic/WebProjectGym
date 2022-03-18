import { Clan } from "./clan.js";

export class Teretana{
    constructor(teretanaId, naziv, adresa, kapacitet){
        this.teretanaId = teretanaId;
        if(naziv)
            this.naziv = naziv;
        else
            this.naziv = "Default";
        
        if(adresa)
            this.adresa = adresa;
        else
            this.adresa = "Default";

        if(kapacitet)
            this.kapacitet = kapacitet;
        else
            this.kapacitet = 20;

        this.clan = [];
        this.radnik = [];
        this.container = null;
    }

    dodajClana(clan)
    {
        this.clan.push(clan);
    }
    dodajRadnika(radnik)
    {
        this.radnik.push(radnik);
    }
    crtajTeretanu(host){
        this.container = document.createElement("div");
        this.container.className = "teretana";
        host.appendChild(this.container);

        let naslov = document.createElement("h1");
        naslov.className = "naslov";
        naslov.innerHTML = "Teretana: " + this.naziv + ", Adresa: " 
                            + this.adresa + ", Kapacitet članova: " 
                            + this.clan.length + "/" + this.kapacitet;
        this.container.appendChild(naslov);

        let dole = document.createElement("div");
        dole.className = "dole";
        this.container.appendChild(dole);

        let clanoviSve = document.createElement("div");
        clanoviSve.className = "clanoviSve";
        dole.appendChild(clanoviSve);

        let clanovi = document.createElement("div");
        clanovi.className = "clanovi";
        clanoviSve.appendChild(clanovi);

        this.clan.forEach((el, index)=>{
            el.crtajClana(clanovi);
        });

        let clanoviForme = document.createElement("div");
        clanoviForme.className = "clanoviForme";
        clanoviSve.appendChild(clanoviForme);

        let formaDodaj = document.createElement("div");
        formaDodaj.className = "formaDodaj";
        clanoviForme.appendChild(formaDodaj);

        let lab = document.createElement("h3");
        lab.innerHTML = "Dodaj člana";
        formaDodaj.appendChild(lab);

        let labelaIme = document.createElement("label");
        labelaIme.innerHTML = "Ime";
        formaDodaj.appendChild(labelaIme);

        let imeInput = document.createElement("input");
        imeInput.className = "imeInput";
        formaDodaj.appendChild(imeInput);

        let labelaPrezime = document.createElement("label");
        labelaPrezime.innerHTML = "Prezime";
        formaDodaj.appendChild(labelaPrezime);

        let prezimeInput = document.createElement("input");
        prezimeInput.className = "prezimeInput";
        formaDodaj.appendChild(prezimeInput);

        let labelaGodinaRodjenja = document.createElement("label");
        labelaGodinaRodjenja.innerHTML = "Godina rođenja";
        formaDodaj.appendChild(labelaGodinaRodjenja);
 
        let godinaRodjenjaInput = document.createElement("input");
        godinaRodjenjaInput.className = "godinaRodjenjaInput";
        godinaRodjenjaInput.type = "number";
        formaDodaj.appendChild(godinaRodjenjaInput);

        let labelaVisina = document.createElement("label");
        labelaVisina.innerHTML = "Visina";
        formaDodaj.appendChild(labelaVisina);
 
        let visinaInput = document.createElement("input");
        visinaInput.className = "visinaInput";
        visinaInput.type = "number";
        formaDodaj.appendChild(visinaInput);

        let labelaTezina = document.createElement("label");
        labelaTezina.innerHTML = "Težina";
        formaDodaj.appendChild(labelaTezina);
 
        let tezinaInput = document.createElement("input");
        tezinaInput.className = "tezinaInput";
        tezinaInput.type = "number";
        formaDodaj.appendChild(tezinaInput);

        let dugmeDodaj = document.createElement("button");
        dugmeDodaj.innerHTML = "Dodaj člana";
        dugmeDodaj.className = "dugmeDodaj";
        dugmeDodaj.onclick = (ev) => this.dodajClanaKlik(clanovi,
                                     imeInput.value, prezimeInput.value,
                                     godinaRodjenjaInput.value,
                                     visinaInput.value, tezinaInput.value);
        formaDodaj.appendChild(dugmeDodaj); 

        let radniciSve = document.createElement("div");
        radniciSve.className = "radniciSve";
        dole.appendChild(radniciSve);

        let radnici = document.createElement("div");
        radnici.className = "radnici";
        radniciSve.appendChild(radnici);

        this.radnik.forEach((el, index)=>{
            el.crtajRadnika(radnici);
        });

        let radniciForme = document.createElement("div");
        radniciForme.className = "radniciForme";
        radniciSve.appendChild(radniciForme);

        let formaBrisi = document.createElement("div");
        formaBrisi.className = "formaBrisi";
        radniciForme.appendChild(formaBrisi);

        let labelarad = document.createElement("label");
        labelarad.innerHTML = "Radnik: ";
        formaBrisi.appendChild(labelarad);


        let radnikSelekt = document.createElement("select");
        radnikSelekt.className = "selekt-ime";
        formaBrisi.appendChild(radnikSelekt);

        // let labelaPrezime = document.createElement("label");
        // labelaPrezime.innerHTML = "Prezime";
        // donjaForma.appendChild(labelaPrezime);

        this.radnik.forEach((r, index)=>{
            let opcija = document.createElement("option");
            opcija.className = "opcija";
            opcija.innerHTML = r.ime + " " + r.prezime + " " + r.godinaRodjenja; //padajući meni sa imenima direktora kojeg biramo
            opcija.value = r.radnikId; //pamtimo koji element liste smo izabrali
            radnikSelekt.appendChild(opcija);
        });

        // let prezimeSelekt = document.createElement("select");
        // prezimeSelekt.className = "selekt-prezime";
        // donjaForma.appendChild(prezimeSelekt);

        let dugmeS = document.createElement("button");
        dugmeS.innerHTML = "Izbrisi radnika";
        dugmeS.className = "dugmeS";
        dugmeS.onclick = (ev) => this.klikIzbrisi(radnikSelekt.value);
        formaBrisi.appendChild(dugmeS);

    }

    dodajClanaKlik(gde, ime, prezime, godinaRodjenja, visina, tezina){        
        if(this.clan.length < this.kapacitet){
            let zaBazu=({
                'ime':ime,
                'prezime':prezime, 
                'godinaRodjenja':godinaRodjenja, 
                'visina':visina, 
                'tezina' : tezina
            })
            fetch("https://localhost:5001/Teretana/dodajClana/" + this.teretanaId,{
                    method:"POST",
                    headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(zaBazu)
                })
                .then(response=>response.json())
                .then(c=>{
                    alert("Dodat je clan: " + ime + " "+prezime);
                    let naslov = this.container.querySelector(".naslov");
                    
    
                    let clan = new Clan(c.clanId, c.ime, c.prezime, c.godinaRodjenja, c.visina, c.tezina);
    
                    this.dodajClana(clan);
    
                    clan.crtajClana(gde);
                    naslov.innerHTML = "Teretana: " + this.naziv + ", Adresa: " 
                                    + this.adresa + ", Kapacitet članova: " 
                                    + this.clan.length + "/" + this.kapacitet;
                });
        }else{
            alert("Nema mesta za nove clanove!");
        }
        

    }

    klikIzbrisi(kog){
        if(this.radnik.length > 0)
        {
            for(let i = 0;i<this.radnik.length;i++){
                if(this.radnik[i].radnikId == kog){
                    this.radnik.splice(i,1);
                }
            }
            fetch("https://localhost:5001/Teretana/brisiRadnika/" + kog,{
                method:"DELETE"
            }).then(res=>res.text())
                .then(res=> alert("Radnik je obrisan!"));
    
            let radnici = this.container.querySelector(".radnici");
            radnici.innerHTML = '';
            
             this.radnik.forEach((dir, index)=>{
             dir.crtajRadnika(radnici);
             });

        }else{
            alert("Ne postoji radnik za brisanje!");
        }   
    }

}
