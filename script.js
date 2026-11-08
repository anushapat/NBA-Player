
// NBA PLAYER SEARCH

const searchForm = document.getElementById("searchForm");

if (searchForm) {
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const searchInput = document.getElementById("playerSearch");
        const searchValue = searchInput.value.trim().toLowerCase();

        const playerCards = document.querySelectorAll(".player-card");
        const searchMessage = document.getElementById("searchMessage");

        let playersFound = 0;

        playerCards.forEach(function(card) {
            const playerName = card.dataset.name;

            if (playerName.includes(searchValue)) {
                card.style.display = "block";
                playersFound++;
            } else {
                card.style.display = "none";
            }
        });

        if (searchValue === "") {
            searchMessage.textContent = "Please enter a player name.";
            return;
        }

        if (playersFound === 0) {
            searchMessage.textContent = "No players found. Try another name.";
        } else {
            searchMessage.textContent =
                "Found " + playersFound + " player(s).";
        }
    });
}


// LOGIN FORM

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const message = document.getElementById("loginMessage");

        message.textContent =
            "Login is not connected yet. Authentication will be added with AWS Cognito.";
    });
}


// REGISTRATION FORM

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const password =
            document.getElementById("registerPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const message =
            document.getElementById("registerMessage");

        if (password !== confirmPassword) {
            message.textContent = "Passwords do not match.";
            return;
        }

        message.textContent =
            "Registration is not connected yet. AWS Cognito will be added later.";
    });
}
