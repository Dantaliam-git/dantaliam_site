// ============================
// Плавное появление элементов
// ============================

const observerOptions = {
    threshold: 0.15
};


const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, observerOptions);



document.querySelectorAll(".fade").forEach(element => {

    observer.observe(element);

});




// ============================
// Плавный переход по ссылкам
// ============================


document.querySelectorAll('a[href^="#"]').forEach(link => {


    link.addEventListener("click", function(event) {


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if (target) {

            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }


    });


});




// ============================
// Небольшая задержка карточек
// ============================


document.querySelectorAll(".card").forEach((card, index) => {


    card.style.transitionDelay =
        `${index * 0.08}s`;


});
