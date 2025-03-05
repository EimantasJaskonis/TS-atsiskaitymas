/* ------------------------------ TASK 9 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į teams.json failą ir iš jo atvaizduos visas NBA komandas. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos: pilnas pavadinimas, paprastas pavadinimas, trumpinys, lokacija ir mygtukas "Players", kurį paspaudus bus kreipiamasi į players.json ir atidaromas modalas su visais TOS komandos žaidėjais.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */


type Teams = {
    id: number;
    teamName: string;
    simpleName: string;
    abbreviation: string;
    location: string;
  };
  
  type Players = {
    id: number;
    firstFame: string;
    lastName: string;
    teamId: number;
  };
  
  const TEAMS_ENDPOINT = 'teams.json';
const PLAYERS_ENDPOINT = 'players.json';

document.addEventListener('DOMContentLoaded', async () => {
  const output = document.querySelector('#output');
  if (!output) return;

  try {
    const teams = await fetchTeams();
    output.innerHTML = teams.map(teamToHTML).join('');

    document.querySelectorAll('.players-btn').forEach((button) => {
      button.addEventListener('click', async (event) => {
        const teamId = (event.target as HTMLButtonElement).dataset.teamId;
        if (teamId) {
          const players = await fetchPlayers(Number(teamId));
          showPlayersModal(players);
        }
      });
    });
  } catch (error) {
    console.error('Error loading teams:', error);
  }
});

async function fetchTeams(): Promise<Team[]> {
  const response = await fetch(TEAMS_ENDPOINT);
  if (!response.ok) throw new Error('Failed to load teams');
  const data = await response.json();
  return data.teams;
}

async function fetchPlayers(teamId: number): Promise<Player[]> {
  const response = await fetch(PLAYERS_ENDPOINT);
  if (!response.ok) throw new Error('Failed to load players');
  const data = await response.json();
  return data.players.filter((player: Player) => player.teamId === teamId);
}

function teamToHTML(team: Team): string {
  return `
    <div class="team-card">
      <h2>${team.teamName} (${team.abbreviation})</h2>
      <p>Simple Name: ${team.simpleName}</p>
      <p>Location: ${team.location}</p>
      <button class="players-btn" data-team-id="${team.id}">Players</button>
    </div>
  `;
}

function showPlayersModal(players: Player[]): void {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <h3>Players</h3>
      <ul>
        ${players.map(player => `<li>${player.firstName} ${player.lastName}</li>`).join('')}
      </ul>
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector('.close-btn')?.addEventListener('click', () => {
    modal.remove();
  });
}