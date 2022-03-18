using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using System;

namespace TeretanaApp.Models{
    public class Clan{
        [Key]
        public int ClanId{get; set;}
        public string Ime{get; set;}
        public string Prezime{get; set;}
        public string GodinaRodjenja{get; set;}
        public int Visina{get; set;}
        public double Tezina{get; set;}

        [JsonIgnore]
         public Teretana Teretana{get; set;} 
    }
}