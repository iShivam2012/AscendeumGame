import "./GameCard.css"

const GameCard = (props) => {
    const { grid, players } = props;

    let a = []
    for (let i = 0; i < players; i++) {
        a[i] = {
            DiceRoll: 0,
            DiceRollHistory: [],
            PositionHistory: [],
            WinStatus: false,
            pos: 0
        }
    }
    // console.log(a);
    let gridSize = grid * grid;
    // console.log(gridSize)

    let status = false;
    while (!status) {
        for (let i = 0; i < players; i++) {
            let dice = Math.floor(Math.random() * 6) + 1;
            console.log(dice)
            if (a[i].pos === gridSize) {
                status = true
                a[i].WinStatus = true
                break
            }
            else {
                a[i].DiceRoll = dice;
                a[i].DiceRollHistory.push(dice)
                let futurePos = a[i].pos + dice;
                if (futurePos <= gridSize) {
                    a[i].pos = futurePos;
                    a[i].PositionHistory.push(a[i].pos)
                }
            }
        }
    }

    console.log("op ", a)

    return (
        <div>
            <h1>
                Game Card
            </h1>
            <p>{`Players ${players} `}</p>
            <p>{`Grid Size ${grid} `}</p>
            {a.map((player, index) => {
                return (

                    // <div className="box" >
                    //     <h3>Player Number</h3>
                    //     <p>{`Player ${index + 1}`}</p>
                    //     <h3>Dice Roll</h3>
                    //     <p>{player.DiceRoll}</p>
                    //     <h3>DiceRoll History</h3>
                    //     <p>{player.DiceRollHistory.join(" ")}</p>
                    //     <h3>Position History</h3>
                    //     <p>{player.PositionHistory.join(" ")}</p>
                    //     <h3>Win Status</h3>
                    //     <p>{player.WinStatus ? "Winner" : ""}</p>
                    // </div>

                    <div className="card">
                        <table>
                            <tr>
                                <th>Player Number</th>
                                <td>{`Player ${index + 1}`}</td>
                            </tr>
                            <tr>
                                <th>Dice Roll</th>
                                <td>{player.DiceRoll}</td>
                            </tr>
                            <tr>
                                <th>DiceRoll History</th>
                                <td>{player.DiceRollHistory.join(" ")}</td>
                            </tr>
                            <tr>
                                <th>Position History</th>
                                <td>{player.PositionHistory.join(" ")}</td>
                            </tr>
                            <tr>
                                <th>Win Status</th>
                                <td>{player.WinStatus ? "Winner" : ""}</td>
                            </tr>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}

export default GameCard