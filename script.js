let searchBtn = document.getElementById("heroBtn");
let searchInput = document.getElementById("searchInput");
let cards = document.querySelectorAll(".card");
let noResult = document.getElementById("noResult");

searchBtn.addEventListener("click", function () {
    let searchValue = searchInput.value.toLowerCase().trim();
    let matchFound = false;

    cards.forEach(function (card) {
        let cardContent = card.innerText.toLowerCase();

        if (cardContent.includes(searchValue) && searchValue !== "") {
            card.style.display = "flex";
            matchFound = true;
        } else {
            card.style.display = "none";
        }
    });

    if (matchFound === false) {
        noResult.style.display = "block";
    } else {
        noResult.style.display = "none";
    }
});


/* Apply button alert */
let applyButtons = document.querySelectorAll(".card button");

applyButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        let card = btn.parentElement;
        let jobTitle = card.querySelector("h2").innerText;

        alert("Applied for position of " + jobTitle);
    });
});