// Question 2
qTeams = { aaiec: 400, aaiwc: 60, qai: 200, poc: 100, gtm: 50, hr: 10 };

let sortTeam = [];
for (let team in qTeams) {
    sortTeam.push([team, qTeams[team]]);
}
sortTeam.sort(function (a, b) {
    return b[1] - a[1];
});
for (let i = 0; i < sortTeam.length; i++) {
    console.log(sortTeam[i][0]);
}
