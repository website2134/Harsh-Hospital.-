const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
let slides = document.querySelectorAll(".slide");
let current = 0;

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

next.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
});

prev.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});

// Auto Slide
setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 4000);
const boxes = document.querySelectorAll(".feature-box");

function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.8;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);

// run once on load
showOnScroll();
const form = document.querySelector(".appoint-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // simple animation feedback
    form.style.transform = "scale(0.95)";

    setTimeout(() => {
        form.style.transform = "scale(1)";
        alert("Appointment Submitted Successfully!");
    }, 200);
});
// optional smooth scroll effect
// optional smooth scroll effect
const container = document.querySelector(".doctor-container");

container.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    container.scrollLeft += evt.deltaY;
});
let index = 0;
const slider = document.querySelector(".testimonial-slider");
const totalSlides = document.querySelectorAll(".testimonial-card").length;

function slideTestimonials() {
    index++;
    if (index >= totalSlides) {
        index = 0;
    }

    slider.style.transform = `translateX(-${index * 100}%)`;
}

// Auto slide every 3 seconds
setInterval(slideTestimonials, 3000);
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        // Close all other items
        faqItems.forEach(el => {
            if (el !== item) {
                el.classList.remove("active");
            }
        });

        // Toggle current
        item.classList.toggle("active");
    });
});
const visionBoxes = document.querySelectorAll(".hsPointBox");

function showVisionBoxes() {
    const trigger = window.innerHeight - 100;

    visionBoxes.forEach((box) => {
        const top = box.getBoundingClientRect().top;

        if (top < trigger) {
            box.classList.add("showBox");
        }
    });
}

window.addEventListener("scroll", showVisionBoxes);
window.addEventListener("load", showVisionBoxes);


// Button pulse animation
const visionBtn = document.querySelector(".hsVisionBtn");

setInterval(() => {
    visionBtn.style.transform = "scale(1.06)";

    setTimeout(() => {
        visionBtn.style.transform = "scale(1)";
    }, 500);

}, 2000);
const saiCards = document.querySelectorAll(".saiCardItem");

function revealSaiCards() {
    const triggerBottom = window.innerHeight - 80;

    saiCards.forEach((card, index) => {
        const top = card.getBoundingClientRect().top;

        if (top < triggerBottom) {
            setTimeout(() => {
                card.classList.add("showSaiCard");
            }, index * 120);
        }
    });
}

window.addEventListener("scroll", revealSaiCards);
window.addEventListener("load", revealSaiCards);


// Appointment button pulse effect
const bookBtn = document.querySelector(".saiBookBtn");

setInterval(() => {
    bookBtn.style.transform = "scale(1.06)";

    setTimeout(() => {
        bookBtn.style.transform = "scale(1)";
    }, 500);

}, 2200);


// Card hover tilt effect
saiCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const x = e.offsetX / card.clientWidth - 0.5;
        const y = e.offsetY / card.clientHeight - 0.5;

        card.style.transform =
            `rotateY(${x * 8}deg) rotateX(${y * -8}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});
const deptCards = document.querySelectorAll(".saiDeptCard");

function revealDepartments() {
    const trigger = window.innerHeight - 80;

    deptCards.forEach((card, index) => {
        const top = card.getBoundingClientRect().top;

        if (top < trigger) {
            setTimeout(() => {
                card.classList.add("showDept");
            }, index * 80);
        }
    });
}

window.addEventListener("scroll", revealDepartments);
window.addEventListener("load", revealDepartments);


/* Button pulse */
const deptBtn = document.querySelector(".saiDeptBtn");

setInterval(() => {
    deptBtn.style.transform = "scale(1.05)";
    setTimeout(() => {
        deptBtn.style.transform = "scale(1)";
    }, 500);
}, 2200);


/* Tilt effect */
deptCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {
        const x = e.offsetX / card.clientWidth - 0.5;
        const y = e.offsetY / card.clientHeight - 0.5;

        card.style.transform =
            `rotateY(${x * 10}deg) rotateX(${y * -10}deg) translateY(-6px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});
/* =========================
   LOADER + WELCOME POPUP
========================= */

window.onload = function () {

    if (sessionStorage.getItem("enteredSite")) {

        document.getElementById("pageLoader").style.display = "none";
        document.getElementById("welcomePopup").style.display = "none";

    } else {

        setTimeout(function () {

            document.getElementById("pageLoader").style.display = "none";
            document.getElementById("welcomePopup").style.display = "flex";

        }, 2500);

    }

};


/* Enter Button */
document.getElementById("enterSiteBtn").onclick = function () {

    sessionStorage.setItem("enteredSite", "yes");
    document.getElementById("welcomePopup").style.display = "none";

};


/* Close Button */
document.getElementById("closeWelcome").onclick = function () {

    sessionStorage.setItem("enteredSite", "yes");
    document.getElementById("welcomePopup").style.display = "none";

};
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const speed = target / 100;

        if (count < target) {

            counter.innerText = Math.ceil(count + speed);

            setTimeout(updateCounter, 25);

        } else {

            counter.innerText = target.toLocaleString();

        }

    };

    updateCounter();

});