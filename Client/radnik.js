export class Radnik{
    constructor(radnikId, ime, prezime, godinaRodjenja){
        this.radnikId = radnikId;
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

        this.container = null;
    }

    crtajRadnika(host){
        this.container = document.createElement("div");
        this.container.className = "radnik";
        host.appendChild(this.container);

        const imeprezime = document.createElement("h3");
        imeprezime.innerHTML = this.ime + " " + this.prezime;
        this.container.appendChild(imeprezime);

        let labelaGod = document.createElement("label");
        labelaGod.innerHTML = "Godina rođenja: " + this.godinaRodjenja;
        this.container.appendChild(labelaGod);

    }
}
