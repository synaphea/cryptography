export class MorseCipher {
  private static MORSE_CODES: any = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
    ',': '--..--',
    '.': '.-.-.-',
    '?': '..--..',
    '/': '-..-.',
    '-': '-....-',
    '(': '-.--.',
    ')': '-.--.-'
  };
  private CODE_VALS: string[] = Object.keys(MorseCipher.MORSE_CODES).map(key => MorseCipher.MORSE_CODES[key]);

  encrypt = (message: string) => {
    let cipher = '';
    message.split('').forEach(letter => {
      if (letter !== ' ') {
        // looks up the dictionary and adds the correspponding morse code
        // along with a space to separate morse codes for different characters
        cipher += MorseCipher.MORSE_CODES[letter.toUpperCase()] + ' ';
      } else {
        // 1 space indicates different characters & 2 indicates different words
        cipher += ' ';
      }
    });

    return cipher.trim();
  }

  // Function to decrypt the string from morse to english
  decrypt = (message: string) => {
    message += ' '; // extra space added at the end to access the last morse code
    let decipher = '';
    let citext = '';
    let i = 0; // counter to keep track of space
    message.split('').forEach(letter => {
      // checks for space
      if (letter !== ' ') {
        i = 0;
        citext += letter; // storing morse code of a single character
      } else {
        // if i = 1 that indicates a new character
        i += 1;
        // if i = 2 that indicates a new word
        if (i === 2) {
          decipher += ' '; // adding space to separate words
        } else {
          // accessing the keys using their values (reverse of encryption via array of values)
          decipher += Object.keys(MorseCipher.MORSE_CODES)[this.CODE_VALS.indexOf(citext)];
          citext = '';
        }

      }
    });

    return decipher;
  }
}

export default MorseCipher;
