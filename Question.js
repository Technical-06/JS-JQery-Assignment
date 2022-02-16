let questionStr = `Thank you so much for contacting us. Dreamland guest relations. 
You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. 
What is your phone number? It is 9876535362 as mentioned in the book Diary. 
Thank you so much for providing the info!`;

// Question1->task1
const sentArr = questionStr.match(/(.*?(?:\.|\?|!))(?: |$)/g);
const resultArr = sentArr
  .map((sentence) => {
    sentence = sentence.replace(/(^\s*)|(\s*$)/gi, "");
    sentence = sentence.replace(/[ ]{2,}/gi, " ");
    sentence = sentence.replace(/\n /, "\n");
    size = sentence.split(" ").length;
    if (size > 3) {
      return sentence;
    }
  })
  .filter((ele) => ele != undefined);
const maskArr = resultArr.map((item) => {
  return item.replace(/[0-9]/g, "X");
});
for (var index = 0; index < maskArr.length; index++) {
  const answerString = `${index + 1}. ${maskArr[index]}`;
  console.log(answerString);
}