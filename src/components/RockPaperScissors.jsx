import PropTypes from 'prop-types';
import { useState } from "react";
import Choice from "./Choice";
import DecideWinOrLose from './DecideWinOrLose';

const RockPaperScissors = () => {
    const [userChoice, setUserChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [winOrLose, setWinOrLose] = useState("");

    return (
        <div>
            <Choice userChoice={userChoice} setUserChoice={setUserChoice} computerChoice={computerChoice} setComputerChoice={setComputerChoice}></Choice>
            <DecideWinOrLose userChoice={userChoice} computerChoice={computerChoice} winOrLose={winOrLose} setWinOrLose={setWinOrLose}></DecideWinOrLose>
        </div>
    );
}

RockPaperScissors.propTypes = {
    userChoice: PropTypes.string,
    computerChoice: PropTypes.string,
    setUserChoice: PropTypes.string,
    setComputerChoice: PropTypes.string,
    winOrLose: PropTypes.string,
    setWinOrLose: PropTypes.string
};

export default RockPaperScissors;