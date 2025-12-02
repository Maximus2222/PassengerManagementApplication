using Microsoft.EntityFrameworkCore;
using PassengerManagement.Data;
using PassengerManagement.Models;

namespace PassengerManagement.Repositories
{
    public class PassengerRepository : IPassengerRepository
    {
        readonly AppDbContext _context;
        public PassengerRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task AddPassengerAsync(Passenger passenger)
        {
            await _context.Passengers.AddAsync(passenger);
            await _context.SaveChangesAsync();
        }

        public async Task DeletePassengerAsync(int id)
        {
            var passengerInDb = await _context.Passengers.FindAsync(id);

            if(passengerInDb is null)
            {
                throw new Exception($"Passenger with id {id} not found");
            }
            _context.Passengers.Remove(passengerInDb);
            await _context.SaveChangesAsync();

        }

        public async Task<IEnumerable<Passenger>> GetAllAsync()
        {
            return await _context.Passengers.ToListAsync();
        }

        public async Task<Passenger?> GetByIdAsync(int id)
        {
            return await _context.Passengers.FindAsync(id);
        }

        public async Task UpdatePassengerAsync(Passenger passenger)
        {
            _context.Passengers.Update(passenger);
            await _context.SaveChangesAsync();
        }
    }
}
