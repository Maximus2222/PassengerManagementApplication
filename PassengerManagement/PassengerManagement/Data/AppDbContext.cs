using Microsoft.EntityFrameworkCore;
using PassengerManagement.Models;

namespace PassengerManagement.Data
{
    public class AppDbContext: DbContext
    {
        public DbSet<Passenger> Passengers { get; set; }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
    }
}
