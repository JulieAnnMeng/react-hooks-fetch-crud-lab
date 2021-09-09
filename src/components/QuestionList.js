import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setUpdate }) {

  const questionList = questions.map(question => {
    return(
      <QuestionItem 
        key={question.id}
        question={question}
        handleDelete={handleDelete}
        handlePatch={handlePatch}
      />
    )
  })

  function handleDelete(question) {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: 'DELETE',
    })
    setUpdate(true)
  }

  function handlePatch(e, question) {
    const newCorrectIndex = parseInt(e.target.selectedIndex);
    debugger;
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify ({"correctIndex": newCorrectIndex})
    })
    setUpdate(true)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;
