import { NotImplementedError } from '../extensions/index.js';

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
export default class VigenereCipheringMachine {
  flag;
  constructor(flag = true)
  {
    this.flag = flag;
  }
  encrypt(message, key) {
    if (typeof(message) == "undefined" || typeof(key) == "undefined") throw new Error ("Incorrect arguments!");
    let message2 = "";
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0, j = 0; message2.length < message.length; i++, j++)
    {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90)
      {
        while (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) 
        {
          message2 += message[i];
          i++;
        }
      }
      if (j < key.length) message2 += key[j];
      if (j == key.length - 1) j = -1;
    }
    let message3 = "";
    for (let i = 0; i < message.length; i++)
    {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90)
      {
        if (message.charCodeAt(i)+message2.charCodeAt(i)-65 > 90) message3 += String.fromCharCode((message.charCodeAt(i)+message2.charCodeAt(i)-91));
        else message3 += String.fromCharCode((message.charCodeAt(i)+message2.charCodeAt(i)-65));
      }
      else message3 += message[i];
    }
    if (this.flag == false) message3 = message3.split("").reverse().join("");
    return message3;
  }
  decrypt(message, key) {
    if (typeof(message) == "undefined" || typeof(key) == "undefined") throw new Error ("Incorrect arguments!");
    let message2 = "";
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0, j = 0; message2.length < message.length; i++, j++)
    {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90)
      {
        while (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) 
        {
          message2 += message[i];
          i++;
        }
      }
      if (j < key.length) message2 += key[j];
      if (j == key.length - 1) j = -1;
    }
    let message3 = "";
    for (let i = 0; i < message.length; i++)
    {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90)
      {
        if (message.charCodeAt(i)-message2.charCodeAt(i) < 0) message3 += String.fromCharCode((message.charCodeAt(i)-message2.charCodeAt(i)+91));
        else message3 += String.fromCharCode((message.charCodeAt(i)-message2.charCodeAt(i)+65));
      }
      else message3 += message[i];
    }
    if (this.flag == false) message3 = message3.split("").reverse().join("");
    return message3;
  }
}