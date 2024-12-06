document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("appointmentForm");
    const confirmation = document.getElementById("confirmation");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission

        // Get form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const appointmentType = document.getElementById("appointmentType").value;
        const appointmentDate = document.getElementById("appointmentDate").value;

        // Example: Log form data (You can send it to a server here)
        console.log({
            name,
            email,
            phone,
            appointmentType,
            appointmentDate,
        });

        // Show confirmation message
        confirmation.classList.remove("hidden");

        // Optionally clear form
        form.reset();
    });
});
