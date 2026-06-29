/* ==========================
   ANIMATED COUNTERS
========================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            counters.forEach(counter => {

                const target = +counter.getAttribute("data-target");
                let count = 0;

                const increment = target / 100;

                const updateCounter = () => {

                    if(count < target){

                        count += increment;

                        counter.innerText = Math.ceil(count);

                        requestAnimationFrame(updateCounter);

                    }else{

                        counter.innerText = target + "+";
                    }
                };

                updateCounter();

            });

            counterObserver.disconnect();

        }

    });

});

const statsSection = document.querySelector(".stats");

if(statsSection){
    counterObserver.observe(statsSection);
}


/* ==========================
   COURSE FILTER
========================== */

function filterSelection(category){

    const cards = document.querySelectorAll(".course-card");

    cards.forEach(card => {

        if(category === "all"){

            card.style.display = "block";

        }else{

            if(card.classList.contains(category)){

                card.style.display = "block";

            }else{

                card.style.display = "none";
            }
        }

    });

}


/* ==========================
   SORTABLE TABLE
========================== */

function sortTable(columnIndex){

    const table = document.getElementById("courseTable");

    let switching = true;

    while(switching){

        switching = false;

        let rows = table.rows;

        for(let i = 1; i < rows.length - 1; i++){

            let shouldSwitch = false;

            let x = rows[i].getElementsByTagName("TD")[columnIndex];
            let y = rows[i + 1].getElementsByTagName("TD")[columnIndex];

            let xValue = x.innerHTML.toLowerCase();
            let yValue = y.innerHTML.toLowerCase();

            if(!isNaN(xValue) && !isNaN(yValue)){

                xValue = Number(xValue);
                yValue = Number(yValue);
            }

            if(xValue > yValue){

                shouldSwitch = true;
                break;
            }
        }

        if(shouldSwitch){

            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);

            switching = true;
        }
    }
}


/* ==========================
   GALLERY LIGHTBOX
========================== */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(src){

    lightbox.style.display = "flex";

    lightboxImg.src = src;
}

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";
});

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        lightbox.style.display = "none";
    }

});


/* ==========================
   CONTACT FORM VALIDATION
========================== */

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const message = document.getElementById("message").value.trim();

        const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(name === ""){

            alert("Please enter your name");
            return;
        }

        if(!emailPattern.test(email)){

            alert("Please enter a valid email address");
            return;
        }

        if(message.length < 10){

            alert("Message must contain at least 10 characters");
            return;
        }

        alert("Thank you! Your message has been submitted successfully.");

        contactForm.reset();

    });

}


/* ==========================
   APPLY NOW BUTTON
========================== */

const applyBtn = document.querySelector(".apply-btn");

if(applyBtn){

    applyBtn.addEventListener("click", () => {

        alert(
            "Admissions Open 2026!\n\nApply Online at BlueHeaven Institute of Technology."
        );

    });

}


/* ==========================
   NAVBAR ACTIVE LINK
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){

            link.classList.add("active");
        }

    });

});


/* ==========================
   SMOOTH PAGE LOADING
========================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});