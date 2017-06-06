const testingTeam = {
  lead: 'Jon',
  tester: 'James'
};

const engineeringTeam = {
  testingTeam,
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Peter'
};

function* testingTeamIterator(testingTeam) {
  yield testingTeam.lead;
  yield testingTeam.tester;
}

function* teamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;

  const testingTeamGenerator = testingTeamIterator(team.testingTeam);

  yield testingTeamGenerator.next().value;
  yield testingTeamGenerator.next().value;
  //yield* testingTeamGenerator;
}

let memberNames = [];

for(let name of teamIterator(engineeringTeam)) {
  memberNames.push(name);
}

console.log(memberNames);
