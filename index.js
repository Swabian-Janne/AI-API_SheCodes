/** @format */
function showAnswer(response) {
  alert(response.data.answer);
}
let apiKey = "ef3aab353f2ado9faa8tccd552b00647";
let context =
  "be polite and provide a short answer. Make sure to provide a clear and precise answer";
let prompt = "Who was the first female president of the world?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Processing");
axios.get(apiUrl).then(showAnswer);
