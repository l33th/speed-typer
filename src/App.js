import { useState, useEffect } from 'react';
import randomWords from 'random-words';

const NUM_OF_WORDS = 300;
const SECONDS = 60;

function App() {
  const [words, setWords] = useState([]);
  const [countDown, setCountDown] = useState(SECONDS);

  useEffect(() => {
    setWords(generateWords())
  }, [])

  const generateWords = () => {
    return new Array(NUM_OF_WORDS).fill(null).map(() => randomWords())
  }

  const start = () => {
    let interval = setInterval(() => {
      setCountDown((prevCountDown) => {
        if(prevCountDown === 0) {
          clearInterval(interval)
        } else {
          return prevCountDown - 1;
        }
      })
    }, 1000)
  }

  return (
    <div className="App">
      <div className="section">
        <div className="is-size-1 has-text-centered has-text-primary">
          <h2>{countDown}</h2>
        </div>
      </div>
      <div className="control is-expanded section">
        <input type="text" className="input" />
      </div>
      <div className="section">
        <button className="button is-info is-fullwidth" onClick={start}>
          Start
        </button>
      </div>
      <div className="section">
        <div className="card">
          <div className="card-content">
            <div className="content">
              {words.map((word, i) => (
                <>
                <span>
                  {word}
                </span>
                <span>{' '}</span>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
