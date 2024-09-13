using System.ComponentModel.DataAnnotations;

namespace EventRegistrationSystem.MVC.Models
{
    public class RegistrationViewModel
    {
        public string EventName { get; set; }

        public string ParticipantName { get; set; }

        public string EmailAddress { get; set; }

        public int NumberOfTickets { get; set; }

        public string EventType { get; set; }
    }
}
