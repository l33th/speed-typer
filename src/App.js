import { useState, useEffect } from 'react';
import randomWords from 'random-words';

const NUM_OF_WORDS = 300;
const SECONDS = 60;

function App() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(generateWords())
  }, [])

  const generateWords = () => {
    return new Array(NUM_OF_WORDS).fill(null).map(() => randomWords())
  }

  return (
    <div className="App">
      {JSON.stringify(words)}
    </div>
  );
}

export default App;
