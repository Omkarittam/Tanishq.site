document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        fetch("process_form.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            alert(result);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});
