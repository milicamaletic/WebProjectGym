export class Clan{
    constructor(clanId, ime, prezime, godinaRodjenja, visina, tezina){
        this.clanId = clanId;
        if(ime)
            this.ime = ime;
        else
            this.ime = "Default";
        
        if(prezime)
            this.prezime = prezime;
        else
            this.prezime = "Default";

        if(godinaRodjenja)
            this.godinaRodjenja = godinaRodjenja;
        else
            this.godinaRodjenja = 2000;

        if(visina)
            this.visina = visina;
        else
            this.visina = 170;

        if(tezina)
            this.tezina = tezina;
        else
            this.tezina = 70;

        this.container = null;
    }

    crtajClana(host){
        this.container = document.createElement("div");
        this.container.className = "clan";
        host.appendChild(this.container);

        const imeprezime = document.createElement("h3");
        imeprezime.innerHTML = this.ime + " " + this.prezime;
        this.container.appendChild(imeprezime);

        let labelaGod = document.createElement("label");
        labelaGod.innerHTML = "Godina rođenja: " + this.godinaRodjenja;
        this.container.appendChild(labelaGod);

        let labelaVisina = document.createElement("label");
        labelaVisina.innerHTML = "Visina: " + this.visina + " cm";
        this.container.appendChild(labelaVisina);

        let labelaTezina = document.createElement("label");
        labelaTezina.innerHTML = "Tezina: " + this.tezina + " kg";
        labelaTezina.className = "labela-tezina";
        this.container.appendChild(labelaTezina);

        let tezinaInput = document.createElement("input");
        tezinaInput.className = "tInput";
        tezinaInput.type = "number";
        this.container.appendChild(tezinaInput);
        
        let dugmici = document.createElement("div");
        dugmici.className = "dugmici";
        this.container.appendChild(dugmici);

        let dugmePlus = document.createElement("button");
        dugmePlus.className = "dugmeIzmeni";
        dugmePlus.innerHTML = "Izmeni težinu";
        dugmePlus.onclick = (ev)=>this.dodajKilazu();
        dugmici.appendChild(dugmePlus);

        return this.container;
    }

    dodajKilazu(){
        let tezinaInput = this.container.querySelector(".tInput");
        let tezina = parseInt(this.container.querySelector(".tInput").value);
        if(!tezina)
            alert("Unesite prvo težinu!");
        else{
            fetch("https://localhost:5001/Teretana/izmeniTezinu/"+this.clanId+"/"+ tezina,{
                method:"PUT"
            }).then(resp=>resp.json())
            .then(cl=>{
                    alert("Ažurirana je težina člana: " + this.ime + " "+ this.prezime);
                    let labT = this.container.querySelector(".labela-tezina");
                    labT.innerHTML = "Tezina: " + (cl.tezina) + " kg";
            })
        }
    }

}