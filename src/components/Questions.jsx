import './Questions.css'

import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import Option from './Options';

const Questions = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestion.answer, option },
        });
    };

    return (
        <div id='question'>
            <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                {currentQuestion.options.map((option) => (
                    <Option option={option} key={option} answer={currentQuestion.answer} selectOption={() => onSelectOption(option)} hide={quizState.optionToHide === option ? "hide" : null} />
                ))}
            </div>
            {!quizState.answerSelected && !quizState.help && (
                <>
                    {currentQuestion.tip && (
                        <button onClick={() => dispatch({ type: "SHOW_TIP" })}>Dica</button>
                    )}
                    <button onClick={() => dispatch({ type: "REMOVE_OPTION" })}>
                        Excluir uma
                    </button>
                </>
            )}
            {!quizState.answerSelected && quizState.help === "tip" && (
                <p>{currentQuestion.tip}</p>
            )}
            {quizState.answerSelected && (
                <button onClick={() => dispatch({ type: "NEXT_QUESTION" })}>
                    Continuar
                </button>
            )}
        </div>
    )
}

export default Questions