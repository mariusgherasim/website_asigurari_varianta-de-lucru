document.addEventListener("DOMContentLoaded", () => {

    fetch("reviste.json")
        .then(response => response.json())
        .then(reviste => {

            const container =
                document.getElementById("magazine-grid");

            reviste.forEach(revista => {

                const card = document.createElement("div");

                card.className = "magazine-card";

                card.innerHTML = `
                    <img src="${revista.coperta}"
                         alt="${revista.titlu}">

                    <h3>${revista.titlu}</h3>

                    <a href="${revista.link}"
                       target="_blank"
                       class="btn-primary">

                        Vezi ediția completă →

                    </a>
                `;

                container.appendChild(card);

            });

        });

});