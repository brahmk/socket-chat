import React from "react";

export default function useBot(input) {
  const inputs = [
    ["how are you", "how is life", "how are things", "how r u"], //0
    ["hi", "hey", "hello", "good morning", "good afternoon", "yo"], //1
    ["what are you doing", "what is going on", "what is up", "sup"], //2
    ["how old are you"], //3
    [
      "who are you",
      "what is your name",
      "who is this",
      "whos this",
      "are you human",
      "are you bot",
      "are you human or bot",
      "are you a robot",
      "who am i talking to",
    ], //4
    [
      "i am hungry",
      "i am bored",
      "i am tired",
      "im hungry",
      "im bored",
      "im tired",
    ], // 5
  ];

  // responses

  const answers = [
    [
      "Fine... how are you?",
      "Pretty good, how are you?",
      "Great, and yourself?",
    ], //0
    ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"], //1
    [
      "Nothing much",
      "Chatting with you!",
      "Living the dream",
      "Same old stuff, you?",
    ], //2
    ["Younger than you :D"], //3
    ["I am DumberChild", "None of your business", "Don't worry about that :)"], //4
    ["Same", "Me too", "Who cares"], //5
  ];

  // alts

  const alternatives = ["Go on...", "Cool", "Interesting..."];

  function compare(inputsArray, answersArray, string) {
    let item;
    let items;
    for (let x = 0; x < inputsArray.length; x++) {
      for (let y = 0; y < inputsArray[x].length; y++) {
        if (inputsArray[x][y] === string) {
          items = answersArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    return item;
  }
  function generateResponse(input) {
    let response;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
      .replace(/ a /g, " ")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "");

    if (compare(inputs, answers, text)) {
      response = compare(inputs, answers, text);
    } else {
      response = alternatives[Math.floor(Math.random() * alternatives.length)];
    }

    return response;
  }

  return { generateResponse };
}
