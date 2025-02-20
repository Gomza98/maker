function generateFixtures() {
    // Get user input
    let teamsInput = document.getElementById('teams').value;
    let matchTimesInput = document.getElementById('match-times').value;
    let locationsInput = document.getElementById('locations').value;
    let numMatches = document.getElementById('num-matches').value;

    if (!teamsInput || !matchTimesInput || !locationsInput || !numMatches) {
        alert("Please fill in all fields!");
        return;
    }

    let teams = teamsInput.split(',').map(team => team.trim());
    let matchTimes = matchTimesInput.split(',').map(time => time.trim());
    let locations = locationsInput.split(',').map(location => location.trim());

    // Check if there are enough match times and locations
    if (matchTimes.length < numMatches || locations.length < numMatches) {
        alert("Not enough match times or locations for the number of matches.");
        return;
    }

    let fixtureTable = document.getElementById('fixtures-body');
    fixtureTable.innerHTML = '';

    let matchNumber = 1;
    for (let i = 0; i < numMatches; i++) {
        // Randomly select two teams
        let team1 = teams[Math.floor(Math.random() * teams.length)];
        let team2 = teams[Math.floor(Math.random() * teams.length)];
        while (team1 === team2) {
            team2 = teams[Math.floor(Math.random() * teams.length)];
        }

        // Assign a random match time and location
        let time = matchTimes[i % matchTimes.length];
        let location = locations[i % locations.length];

        // Add the fixture row to the table
        let row = `<tr>
            <td>${matchNumber}</td>
            <td>${team1}</td>
            <td>${team2}</td>
            <td>${location}</td>
            <td>${time}</td>
        </tr>`;

        fixtureTable.innerHTML += row;
        matchNumber++;
    }

    // Show the table
    document.getElementById('fixtures-table').style.display = 'table';
}
