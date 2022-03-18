using Microsoft.EntityFrameworkCore;

namespace TeretanaApp.Models
{
    public class ContextKlasa : DbContext 
    { 
        public ContextKlasa(DbContextOptions options) : base(options) { }
        public DbSet<Teretana> Teretane { get; set; } 
        public DbSet<Clan> Clanovi { get; set; }
        public DbSet<Radnik> Radnici { get; set; }

    }
}