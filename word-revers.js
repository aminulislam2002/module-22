function wordRevers(string) {
  const words = string.split(" ");
  const result = [];
  for (let i = words.length - 1; i >= 0; i--) {
    const element = words[i];
    result.push(element);
  }
  const reversd = result.join(" ");
  return reversd;
}

const myString = "My name is Aminul Islam Emon";
const output = wordRevers(myString);
console.log(output);
