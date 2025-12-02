using Microsoft.AspNetCore.Mvc;
using PassengerManagement.Models;
using PassengerManagement.Repositories;
using System.Runtime.CompilerServices;

namespace PassengerManagement.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class Passengers: ControllerBase
    {

        public readonly IPassengerRepository _passengerRepository;

        public Passengers(IPassengerRepository passengerRepository)
        {
            _passengerRepository = passengerRepository;
        }
        [HttpGet]
        public async Task <ActionResult<IEnumerable<Passenger>>> GetAll()
        {
            return Ok(await _passengerRepository.GetAllAsync());
        }
        [HttpGet("{id}")]
        public async Task <ActionResult<Passenger>> GetById(int id)
        {
            var passenger = await _passengerRepository.GetByIdAsync(id);

            if (passenger == null)
            {
                return NotFound();
            }
            return Ok(passenger);
        }
        [HttpPost]
        public async Task <ActionResult<Passenger>> CreatePassenger(Passenger passenger)
        {
            await _passengerRepository.AddPassengerAsync(passenger);
            return CreatedAtAction(nameof(GetById), new {id=passenger.Id}, passenger);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteById(int id)
        {
            await _passengerRepository.DeletePassengerAsync(id);

            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Passenger>> UpdatebyId(int id, Passenger passenger)
        {
            if(id!=passenger.Id)
            {
                return BadRequest();
            }
            await _passengerRepository.UpdatePassengerAsync(passenger);
            return CreatedAtAction(nameof(GetById), new { id = passenger.Id }, passenger);
        }
    }
}
