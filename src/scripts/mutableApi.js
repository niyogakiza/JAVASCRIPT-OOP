const state = {
    players: [
        {
            folded: false, chips: 205, name: 'Thomas', cards: []
        },
        {
            folded: false, chips: 110, name: 'Graham', cards: []
        },
        {
            folded: false, chips: 450, name: 'Wendy', cards: []
        },
        {
            folded: false, chips: 500, name: 'Josh', cards: []
        }
    ],
    phase: 0,
    ante: 10,
    community: [
        [10, 'h'], [4, 'hi'], [12, 'lk']
    ],
    chipValues: {
        white: 1,
        blue: 5,
        green: 10,
        yellow: 25,
        red: 50,
        black: 100
    }
};

function getPlayers () {
    return state.players.slice(0);
};
function removePlayer(name){
    const players = getPlayers()
    return players.filter(player => player.name !== name, state.players);
};

function addPlayer(name) {
    const players = getPlayers()
    return players.push(name);
}

function getState() {
    return state;
}
const players = getPlayers();
const removed = removePlayer('Wendy')
const addPlayers = addPlayer({ chaos: 0})
const states = getState()

debugger;
