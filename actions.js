
// Finds the RSVP form and the confirmation message area
const rsvpForm = document.getElementById("rsvp-form");
const confirmationMessage = document.getElementById("confirmation-message");

// Runs this code when the user submits the form
rsvpForm.addEventListener("submit", function(event) {

    // Prevents the page from refreshing after submission
    event.preventDefault();

    // Gets the user's attendance selection
    const attendance = document.getElementById("attendance").value;

    // Checks if the user selected that they will attend
    if (attendance === "yes") {

        // Displays a party emoji and a positive message
        confirmationMessage.textContent =
            "🎉 Awesome! We're excited to see you at the GIF Gala! Get ready for an unforgettable night!";

    } else {

        // Displays a message if the user cannot attend
        confirmationMessage.textContent =
            "Thank you for your response! We're sorry you can't make it. 🎭";
    }

    // Makes the confirmation message visible
    confirmationMessage.style.display = "block";
});
