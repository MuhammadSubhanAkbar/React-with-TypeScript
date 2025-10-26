import { useReducer } from 'react';

interface Scorer {
    id: number;
    score: number;
    name: string;
}

type Action =
    | { type: 'INCREASE'; id: number }

const reducer = (state: Scorer[], action: Action): Scorer[] => {
    switch (action.type) {
        case 'INCREASE':
            return state.map((player) => {
                if (player.id === action.id) {
                    return { ...player, score: player.score + 1 };
                } else {
                    return player;
                }
            });
        default:
            return state;
    }
}

const App = () => {
    const initialScore: Scorer[] = [
        {
            id: 1,
            score: 0,
            name: "John",
        },
        {
            id: 2,
            score: 0,
            name: "Sally",
        },
        {
            id: 3,
            score: 0,
            name: "Mike",
        },
        {
            id: 4,
            score: 0,
            name: "Emily",
        },
        {
            id: 5,
            score: 0,
            name: "David",
        },
        {
            id: 6,
            score: 0,
            name: "Sarah",
        },
        {
            id: 7,
            score: 0,
            name: "Chris",
        },
        {
            id: 8,
            score: 0,
            name: "Jessica",
        }
    ];


    const [score, dispatch] = useReducer(reducer, initialScore);

    const handleIncrease = (player: Scorer) => {
        dispatch({ type: 'INCREASE', id: player.id });
    }

    return (
        <>
            {score.map((player) => (
                <div key={player.id}>
                    <label>
                        <input
                            type="button"
                            onClick={() => handleIncrease(player)}
                            value={player.name}
                        />
                        {player.score}
                    </label>
                </div>
            ))}
        </>
    );
}

export default App;