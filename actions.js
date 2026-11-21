
// Finds the RSVP form and confirmation message area
const rsvpForm = document.getElementById("rsvp-form");
const confirmationMessage = document.getElementById("confirmation-message");

// Runs when the user submits the form
rsvpForm.addEventListener("submit", function(event) {

    // Prevents the page from refreshing
    event.preventDefault();

    // Gets the user's attendance selection
    const attendance = document.getElementById("attendance").value;

    // Checks if the user will attend
    if (attendance === "yes") {

        // Displays a positive confirmation message
        confirmationMessage.textContent =
            "🎉 Awesome! We're excited to see you at the GIF Gala! Get ready for an unforgettable night!";

        // Applies the attending background GIF
        document.body.classList.add("attending");

        // Removes the not-attending background GIF
        document.body.classList.remove("not-attending");

    } else {

        // Displays the requested message if the user cannot attend
        confirmationMessage.textContent =
            "😔 We will miss you at the GIF Gala!";

        // Applies the not-attending background GIF
        document.body.classList.add("not-attending");

        // Removes the attending background GIF
        document.body.classList.remove("attending");
    }

    // Displays the confirmation message
    confirmationMessage.style.display = "block";
});
