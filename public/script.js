// let nav=document.querySelector('nav');

// window.addEventListener('scroll',()=>{
//     nav.classList.toggle('naWinScroll',window,scrollY>0)
// })

// Load EmailJS SDK
// (function() {
//     emailjs.init("j6Bz6cDFA24V_1yPV"); // Replace with your EmailJS Public Key
// })();

// document.getElementById("contact-form").addEventListener("submit", function(event) {
//     event.preventDefault();

//     emailjs.sendForm("service_qdvpwwp", "template_mle1dwv", this)
//         .then(function() {
//             alert("✅ Message sent successfully!");
//             document.getElementById("contact-form").reset();
//         }, function(error) {
//             alert("❌ Failed to send message: " + error.text);
//         });
// });


document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.querySelector('input[name="first_name"]').value.trim();
    const lastName  = document.querySelector('input[name="last_name"]').value.trim();
    const email     = document.querySelector('input[name="email"]').value.trim();
    const phone     = document.querySelector('input[name="phone"]').value.trim();
    const message   = document.querySelector('textarea[name="message"]').value.trim();

    // 🔴 Fixed WhatsApp Number
    const yourNumber = "916207956060";

    const whatsappMessage = encodeURIComponent(
        `New Contact Form Message\n\n` +
        `Name: ${firstName} ${lastName}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n\n` +
        `Message:\n${message}`
    );

    const whatsappURL = `https://wa.me/${yourNumber}?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Show success message
    const successMsg = document.getElementById("success-msg");
    successMsg.style.display = "block";

    // Reset form
    document.getElementById("contact-form").reset();

    // Auto hide success message after 5 sec
    setTimeout(() => {
        successMsg.style.display = "none";
    }, 5000);
});



document.querySelectorAll(".project-links a").forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault(); // page reload roke

        const url = this.getAttribute("data-url");
        if (url) {
            window.open(url, "_blank"); // new tab me open
        }
    });
});

const readMoreBtn = document.querySelector('a[href="#About"]');

if (readMoreBtn) {
    readMoreBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const aboutSection = document.getElementById("About");
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}



