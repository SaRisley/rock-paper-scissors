import PropTypes from 'prop-types';

const Choice = (props) => {

    const selectRock = () => {
        props.setUserChoice("🪨");
        randomChoice();
    };

    const selectPaper = () => {
        props.setUserChoice("📄");
        randomChoice();
    };

    const selectScissors = () => {
        props.setUserChoice("✂️");
        randomChoice();
    };

    const randomChoice = () => {
        let choices = ["🪨", "📄", "✂️"];
        const index = Math.floor(Math.random() * choices.length)
        props.setComputerChoice(choices[index]);

    }

    return(
        <div>
            <h1>Make your choice!</h1>
            <p data-testid="user-choice">{props.userChoice}</p>
            <button onClick={selectRock}>Rock</button>
            <button onClick={selectPaper}>Paper</button>
            <button onClick={selectScissors}>Scissors</button>
            <br></br>
            <div>
                {(props.computerChoice!=="")?<h1>The computer chose: </h1> : <p>computer deciding...</p> }
                <p data-testid="computer-choice">{props.computerChoice}</p>
            </div>
        </div>
    )

}

Choice.propTypes = {
    userChoice: PropTypes.string,
    computerChoice: PropTypes.string,
    winOrLose: PropTypes.string,
    setUserChoice: PropTypes.string,
    setComputerChoice: PropTypes.string,
};

export default Choice;