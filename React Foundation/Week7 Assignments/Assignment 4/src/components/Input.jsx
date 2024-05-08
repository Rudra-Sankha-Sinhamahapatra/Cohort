import { useRecoilState } from "recoil";
import { inputAtom, wordAtom } from "../atoms/atoms";

const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];

export function Input() {
  const [num, setNum] = useRecoilState(inputAtom);
  const [word, setWord] = useRecoilState(wordAtom);

  const generateParagraph = () => {
    let paragraph = "";
    for (let i = 0; i < num; i++) {
      const randomIndex = Math.floor(Math.random() * words.length); 
      paragraph += words[randomIndex] + " ";
    }
    setWord(paragraph.trim());
  };

  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Para Generator
      </h1>{" "}
      <br />
      <input
        style={{
          height: "40px",
          width: "900px",
          position: "relative",
          left: "40px",
        }}
        type="number"
        placeholder="Enter the Number of words"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          position: "relative",
          left: "60px",
          height: "40px",
          width: "100px",
          borderRadius: "30px",
        }}
        onClick={generateParagraph} 
      >
        Generate
      </button>
      <div
        style={{
          position: "relative",
          left: "40px",
          top: "50px",
        }}
      >
        {word}
      </div>
    </div>
  );
}
