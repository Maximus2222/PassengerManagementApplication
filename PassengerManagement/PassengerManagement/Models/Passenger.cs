using System.ComponentModel.DataAnnotations;

namespace PassengerManagement.Models
{
    public class Passenger
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Passenger lacking a prename.")]
        public string PreName { get; set; }

        [Required(ErrorMessage = "Passenger lacking a last name.")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Passenger lacking an email.")]
        [EmailAddress(ErrorMessage = "Email lacking valid format.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Passenger lacking a phone number.")]
        public string PhoneNumber { get; set; }

        [Required(ErrorMessage = "Passenger lacking a train number.")]
        public string TrainNumber { get; set; }
    }
}
