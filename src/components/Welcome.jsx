import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Quiz from '../img/quiz.svg'
import './welcome.css'

const Welcome = () => {
    const [quizState , dispatch] = useContext(QuizContext);

    return (
        <div id='welcome'>
            <h2>Bem Vindo</h2>
            <p>Clique no botão para inciar</p>
            <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
            <img src={Quiz} alt="inicial-quiz" />
        </div>
    )
}

export default Welcome