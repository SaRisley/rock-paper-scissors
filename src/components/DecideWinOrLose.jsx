import { useEffect } from "react";
import PropTypes from 'prop-types';

const DecideWinOrLose = (props) => {

useEffect(() => {
    if (props.userChoice !== ""){
        if ((props.userChoice === "🪨" && props.computerChoice === "✂️") || (props.userChoice === "📄" && props.computerChoice === "🪨") || (props.userChoice === "✂️" && props.computerChoice === "📄")){
            props.setWinOrLose("YOU WIN")
        }else if (props.computerChoice === props.userChoice){
            props.setWinOrLose("DRAW")
        }else{
            props.setWinOrLose("YOU LOSE")
        }
    }
}, [props.userChoice, props.computerChoice])

return(
    <div>
        <h1>{props.winOrLose}</h1>
    </div>
)

}

DecideWinOrLose.propTypes = {
    userChoice: PropTypes.string,
    computerChoice: PropTypes.string,
    winOrLose: PropTypes.string,
    setWinOrLose: PropTypes.string
};

export default DecideWinOrLose;
