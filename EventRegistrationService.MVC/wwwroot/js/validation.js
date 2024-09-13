$(document).ready(function () {
    $("#registrationForm").validate({
        rules: {
            EventName: "required",
            ParticipantName: "required",
            EmailAddress: {
                required: true,
                email: true
            },
            NumberOfTickets: {
                required: true,
                digits: true,
                min: 1
            },
            EventType: "required"
        },
        messages: {
            EventName: "Please enter event name",
            ParticipantName: "Please enter participant name",
            EmailAddress: {
                required: "Please enter a valid email address",
                email: "Please enter a valid email address"
            },
            NumberOfTickets: {
                required: "Please enter a valid number of tickets",
                digits: "Please enter a valid number of tickets",
                min: "Number of tickets must be greater than 0"
            },
            EventType: "Please select an event type"
        },
        errorPlacement: function (error, element) {
            error.appendTo(element.closest("div").find("span.text-danger"));
        }
    });
});
