import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect (() => {
    console.log(update)
    debugger;
    fetch("http://localhost:4000/questions")
    .then(response => response.json())
    .then(data => setQuestions(data))
  }, [update])
 

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm setUpdate={setUpdate}/> : <QuestionList questions={questions} setUpdate={setUpdate}/>}
    </main>
  );
}

export default App;