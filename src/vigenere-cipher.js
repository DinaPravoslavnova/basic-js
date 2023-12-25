/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct === false ? false : true;
  }

  encrypt(message, key) {
    if (!message || !key) throw Error('Incorrect arguments!');

    let encryptedMessage = '',
      keyIndex = 0;

    const messageUpperCase = message.toUpperCase(),
      keyUpperCase = key.toUpperCase(),
      messageLength = messageUpperCase.length;

    for (let i = 0; i < messageLength; i++) {
      const isLetter =
        messageUpperCase[i].charCodeAt() > 64 &&
        messageUpperCase[i].charCodeAt() < 91;

      if (isLetter) {
        const messageLetterIndex = messageUpperCase[i].charCodeAt() - 65,
          keyLetterIndex =
            keyUpperCase[keyIndex % keyUpperCase.length].charCodeAt() - 65,
          encryptedLetterIndex =
            ((messageLetterIndex + keyLetterIndex) % 26) + 65;

        encryptedMessage += String.fromCharCode(encryptedLetterIndex);

        keyIndex++;
      } else {
        encryptedMessage += messageUpperCase[i];
      }
    }

    const reverseEncryptedMessage = encryptedMessage
      .split('')
      .reverse()
      .join('');

    return this.direct ? encryptedMessage : reverseEncryptedMessage;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw Error('Incorrect arguments!');

    let message = '',
      keyIndex = 0;

    const encryptedMessageUpperCase = encryptedMessage.toUpperCase(),
      keyUpperCase = key.toUpperCase(),
      encryptedMessageLength = encryptedMessage.length;

    for (let i = 0; i < encryptedMessageLength; i++) {
      const isLetter =
        encryptedMessageUpperCase[i].charCodeAt() > 64 &&
        encryptedMessageUpperCase[i].charCodeAt() < 91;

      if (isLetter) {
        const messageLetterIndex =
            encryptedMessageUpperCase[i].charCodeAt() - 65,
          keyLetterIndex =
            keyUpperCase[keyIndex % keyUpperCase.length].charCodeAt() - 65,
          letterIndex = (messageLetterIndex - keyLetterIndex + 26) % 26;

        message += String.fromCharCode(letterIndex + 65);

        keyIndex++;
      } else {
        message += encryptedMessageUpperCase[i];
      }
    }

    const reverseMessage = message.split('').reverse().join('');

    return this.direct ? message : reverseMessage;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
