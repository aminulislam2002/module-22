/* includes() */
const lyrics = "Amr sonar bangla ami tomay valobashi";
const searchStrings = lyrics.includes("tomay");
console.log(searchStrings); // return true

// case ignore
const lyrics01 = "Amr sonar bangla, ami tomay VALOBASHI";
const searchWord = "Valobashi";
const lyrics01ToLowerCase = lyrics01.toLowerCase();
const searchStrings01 = lyrics01ToLowerCase.includes(searchWord.toLowerCase());
console.log(searchStrings01); // return true

/* indexOf() */
const lyrics02 = "Amr sonar bangla, ami tomay VALOBASHI";
console.log(lyrics02.indexOf("Amr")); // return 0
console.log(lyrics02.indexOf("ami")); // return 18

if (lyrics02.indexOf("bangla") !== -1) {
  console.log("Ata ace!"); // return its
} else {
  console.log("ata nai");
}

const lyrics03 = "Amr sonar bangla, ami tomay VALOBASHI";
// startWith()
console.log(lyrics03.startsWith("Amr")); // return true
// endsWith()
console.log(lyrics03.endsWith("VALOBASHI")); // return true
