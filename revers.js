function reversString(text) {
  let reversd = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];
    reversd = reversd + element;
    console.log(element, reversd);
  }
  return reversd;
}
const myString = "My name is Aminul Islam Emon";
const reversd = reversString(myString);
console.log("Reverst Output: ", reversd);
