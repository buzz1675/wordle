import wordList from "./words.txt";

export const defaultBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let setOfWords;
  let correctWord;
  await fetch(wordList)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result
        .split("\n")
        .map((word) => word.trim().toLowerCase()); // Trim and convert to lowercase
        correctWord = wordArr[Math.floor(Math.random() * wordArr.length)];

      setOfWords = new Set(wordArr);
    });

  return { setOfWords, correctWord };
};
