using Microsoft.EntityFrameworkCore.Migrations;

namespace TeretanaApp.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Teretane",
                columns: table => new
                {
                    TeretanaId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Adresa = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Kapacitet = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Teretane", x => x.TeretanaId);
                });

            migrationBuilder.CreateTable(
                name: "Clanovi",
                columns: table => new
                {
                    ClanId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Prezime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GodinaRodjenja = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Visina = table.Column<int>(type: "int", nullable: false),
                    Tezina = table.Column<double>(type: "float", nullable: false),
                    TeretanaId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clanovi", x => x.ClanId);
                    table.ForeignKey(
                        name: "FK_Clanovi_Teretane_TeretanaId",
                        column: x => x.TeretanaId,
                        principalTable: "Teretane",
                        principalColumn: "TeretanaId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Radnici",
                columns: table => new
                {
                    RadnikId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Prezime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GodinaRodjenja = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TeretanaId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Radnici", x => x.RadnikId);
                    table.ForeignKey(
                        name: "FK_Radnici_Teretane_TeretanaId",
                        column: x => x.TeretanaId,
                        principalTable: "Teretane",
                        principalColumn: "TeretanaId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Clanovi_TeretanaId",
                table: "Clanovi",
                column: "TeretanaId");

            migrationBuilder.CreateIndex(
                name: "IX_Radnici_TeretanaId",
                table: "Radnici",
                column: "TeretanaId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Clanovi");

            migrationBuilder.DropTable(
                name: "Radnici");

            migrationBuilder.DropTable(
                name: "Teretane");
        }
    }
}
