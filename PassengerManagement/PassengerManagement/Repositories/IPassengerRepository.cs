using PassengerManagement.Models;

namespace PassengerManagement.Repositories
{
    public interface IPassengerRepository
    {
        Task<IEnumerable<Passenger>> GetAllAsync();
        Task<Passenger?> GetByIdAsync (int id);
        Task AddPassengerAsync (Passenger passenger);
        Task UpdatePassengerAsync (Passenger passenger);
        Task DeletePassengerAsync (int id);

    }
}
