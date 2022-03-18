using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace TeretanaApp.Models
{
    public class Teretana{
        [Key]
        public int TeretanaId{get;set;}
        public string Naziv{get;set;}
        public string Adresa{get; set;}
        public int Kapacitet{get; set;}
        public IList<Clan> Clan {get; set;}
        public IList<Radnik> Radnik {get; set;}
    }
}