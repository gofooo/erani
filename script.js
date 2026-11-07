// CART

let cartCount = 0;

const cartCounter = document.getElementById("cartCount");

const addButtons = document.querySelectorAll(".add-button");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartCounter.textContent = cartCount;

        button.textContent = "Added!";

        setTimeout(() => {
            button.textContent = "Add to bag";
        }, 1000);

    });

});


// CATEGORY FILTER

const categoryButtons = document.querySelectorAll(".category-button");

const productCards = document.querySelectorAll(".product-card");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        productCards.forEach(product => {

            const productCategory = product.dataset.category;

            if (category === "all" || category === productCategory) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });

});


// LANGUAGE SWITCH

let currentLanguage = "en";

const languageButton = document.getElementById("languageButton");

languageButton.addEventListener("click", () => {

    currentLanguage = currentLanguage === "en" ? "ka" : "en";

    document.querySelectorAll("[data-en]").forEach(element => {

        element.textContent = element.dataset[currentLanguage];

    });

    languageButton.textContent = currentLanguage === "en" ? "KA" : "EN";

});