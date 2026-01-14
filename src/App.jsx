import { useState } from "react";
import "./App.css";
let message = ["Learn React*", "Apply for jobs", "Invest new income"];
function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setisOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  }

  function handleNext() {
    if (step < message.length) {
      setStep((step) => step + 1);
    }
  }
  return (
    <>
      <button className="close-btn" onClick={() => setisOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p>{` Step number ${step}: ${message[step - 1]}`}</p>
          <div className="btns">
            <Button onClick={handlePrevious} width="180px">
              <span>👈</span>
              <span>Previous</span>
            </Button>
            <Button onClick={handleNext} width="130px">
              <span>
                Next <span>👉</span>
              </span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ onClick, children, width }) {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "20px",
        width: width,
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      {children}{" "}
    </button>
  );
}
export default App;
