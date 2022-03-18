using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TeretanaApp.Models;

namespace TeretanaApp.Controllers{
//POST , PUT, GET, DELETE
    [ApiController]
    [Route("[controller]")]
    public class TeretanaController : ControllerBase{
        public ContextKlasa dbContext; 
        public TeretanaController(ContextKlasa context){
            dbContext = context;
        }

        [HttpGet]
        [Route("sveTeretane")]
        public IEnumerable<Models.Teretana> Get(){
            var teretane = dbContext.Teretane.Include(x=>x.Clan).Include(y=>y.Radnik);

            return teretane.ToArray();
        }

        [HttpGet]
        [Route("vratiTeretane/{id}")]
        public Teretana Get(int id){
            var teretana = dbContext.Teretane.Find(id);

            return teretana;
        }

        [HttpPut]
        [Route("izmeniTezinu/{id}/{tezina}")]
        public Clan IzmeniTezinu(int id, int tezina){
            var clan = dbContext.Clanovi.Find(id);
            clan.Tezina += tezina;

            //novo
            dbContext.Update(clan);
            dbContext.SaveChanges();

            return clan;
        }

        [HttpPost]
        [Route("dodajClana/{idTeretane}")]
        public Clan dodajClana([FromBody] Clan clan,int idTeretane)
        {

            var teretana = dbContext.Teretane.Find(idTeretane);
            clan.Teretana= teretana;

            if(clan!=null){

                dbContext.Add(clan);

                dbContext.SaveChanges();

            }else{
                throw new Exception("Nije pronadjena Teretama gde bi dodali clana!");
            }
            return clan;
        }

        [HttpDelete]
        [Route("brisiRadnika/{id}")]
        public void BrisiRadnika(int id)
        {
            var radnik = dbContext.Radnici.Find(id);
            if(radnik!=null){
                dbContext.Remove(radnik);
                dbContext.SaveChanges();
            }else{
                throw new Exception("Nije pronadjen radnik za brisanje!");
            }
        }

    }
}