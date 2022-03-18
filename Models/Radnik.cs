using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using System;

namespace TeretanaApp.Models
{
    
    public class Radnik{
        [Key]
        public int RadnikId{ get; set;}
        public string Ime{get; set;}
        public string Prezime{get; set;}
        public string GodinaRodjenja{get; set;}

       [JsonIgnore]
        public Teretana Teretana{get; set;} 
    }
}