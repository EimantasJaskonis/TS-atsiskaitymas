"use strict";
/* ------------------------------ TASK 7 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas ir jų žaidėjus.
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus
nurodomas komandos pavadinimas ir papildomose "mini kortelėse" išvardinti žaidėjai su vardais, pavardėmis ir nuoroda į daugiau informacijos apie juos.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
const ENDPOINT = 'NBA.json';
document.addEventListener('DOMContentLoaded', () => {
    const output = document.querySelector('#output');
    fetch(ENDPOINT)
        .then((response) => {
        if (!response.ok)
            throw new Error('Failed to fetch teams');
        return response.json();
    })
        .then((data) => {
        const teams = data.teams;
        if (!output)
            return;
        output.innerHTML = '';
        teams.forEach((team) => {
            const teamCard = document.createElement('div');
            teamCard.className = 'team-card';
            const teamName = document.createElement('h2');
            teamName.textContent = team.team;
            teamCard.appendChild(teamName);
            const playersContainer = document.createElement('div');
            playersContainer.className = 'players-container';
            team.players.forEach((player) => {
                const playerCard = document.createElement('div');
                playerCard.className = 'player-card';
                const name = document.createElement('p');
                name.textContent = `${player.firstName} ${player.lastName}`;
                const link = document.createElement('a');
                link.href = player.googleSearch;
                link.textContent = 'View details';
                link.target = '_blank';
                playerCard.append(name, link);
                playersContainer.appendChild(playerCard);
            });
            teamCard.appendChild(playersContainer);
            output.appendChild(teamCard);
        });
    })
        .catch((error) => {
        console.error('Error:', error);
        if (output)
            output.innerHTML = '<p>Error loading teams. Please try again later.</p>';
    });
});
