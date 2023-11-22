import React from "react";
import "./App.css";
import IndicatorQuestion from "./components/IndicatorQuestion";
import {
  apiOpenAPIKEY,
  apiUrl,
  beginPrompt,
  sampleQuestions,
} from "./utils/constants";
import SuggestionDisplay from "./components/SuggestionDisplay";
import CustomBtn from "./components/CustomBtn";
import { UserResponse, ViewState } from "./utils/types";
import Loading from "./components/Loading";

function App() {
  const [result, setResult] = React.useState<string | null>(null);
  const [viewState, setViewState] = React.useState<ViewState>(
    ViewState.LOADING
  );
  const [userResponse, setUserResponse] = React.useState<UserResponse>({});
  const [suggestionClickedIndex, setSuggestionClickedIndex] = React.useState<
    number | null
  >(null);
  const [respondedQuestionState, setRespondedQuestionState] = React.useState([
    0,
  ]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const handleOnClick = () => {
    if (userResponse[sampleQuestions[currentQuestion].question]) {
      setCurrentQuestion((prevState) => prevState + 1);
      setRespondedQuestionState((prevState) => [
        ...prevState,
        currentQuestion + 1,
      ]);
      setSuggestionClickedIndex(() => null);

      if (currentQuestion == sampleQuestions.length - 1) {
        sendToOpenAi();
      }
    }
  };

  const sendToOpenAi = async () => {
    let prompt = beginPrompt;

    Object.keys(userResponse).map(
      (response) => (prompt += response + " " + userResponse[response] + ". ")
    );

    setViewState(() => ViewState.LOADING);
    try {
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiOpenAPIKEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
        }),
      })
        .then(
          (response) => response.json(),
          () => setViewState(() => ViewState.INITIAL)
        )
        .then((data) => {
          setViewState(() => ViewState.RESPONSE);
          setResult(() => data.choices[0].message.content as string);
        });
    } catch (error) {
      setViewState(() => ViewState.INITIAL);
    }
  };

  const handleClickOnSuggestion = (suggestion: string, index: number) => {
    setUserResponse((prevState) => ({
      ...prevState,
      [sampleQuestions[currentQuestion].question]: suggestion,
    }));
    setSuggestionClickedIndex(() => index);
  };

  return (
    <div>
      {/* Tracking Index Question */}
      <div className="spacer"></div>

      <div className="center">
        <div className="container">
          {viewState == ViewState.INITIAL && (
            <div>
              {" "}
              <div className="indicator__question_section">
                {sampleQuestions.map((_, index) => (
                  <IndicatorQuestion
                    key={index}
                    isActive={respondedQuestionState.indexOf(index) != -1}
                    content={(index + 1).toString()}
                  />
                ))}
              </div>
              <div className="center">
                <h2 className="question">
                  {sampleQuestions[currentQuestion].question}
                </h2>
              </div>
              {sampleQuestions[currentQuestion].suggestions.map(
                (suggestion, index) => (
                  <SuggestionDisplay
                    content={suggestion}
                    isSelected={suggestionClickedIndex === index}
                    key={index}
                    onClick={() => handleClickOnSuggestion(suggestion, index)}
                  />
                )
              )}
              <div className="spacer"></div>
              <div className="center">
                <CustomBtn
                  content={
                    currentQuestion != sampleQuestions.length - 1
                      ? "Suivant"
                      : "Evaluer"
                  }
                  onClick={handleOnClick}
                />
              </div>
            </div>
          )}

          {viewState === ViewState.LOADING && <Loading />}

          {viewState === ViewState.RESPONSE && (
            <p>
              {result?.split("\n").map((content, index) => (
                <React.Fragment key={index}>
                  {content}
                  <br />
                </React.Fragment>
              ))}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
