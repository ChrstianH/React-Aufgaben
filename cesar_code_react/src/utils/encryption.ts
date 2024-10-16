const alphabet: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const getEncodedText = (msg: string, shift: number): string => {
  let messageArray: string[] = msg.toUpperCase().split("");
  let counter: number = 0;
  do {
    const characterToEncode = messageArray[counter];
    let positionInAlphabet = alphabet.indexOf(characterToEncode);
    if (positionInAlphabet !== -1) {
      positionInAlphabet = positionInAlphabet + shift;
      while (positionInAlphabet < 0) {
        positionInAlphabet += 26;
      }
      positionInAlphabet %= 26;
      messageArray[counter] = alphabet[positionInAlphabet];
    }

    counter++;
  } while (counter < msg.length);

  return messageArray.join("");
};
