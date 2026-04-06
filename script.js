function checkQuiz() {
  let score = 0;
  let feedback = [];

  const answers = {
    q1: "a",
    q2: "b",
    q3: "b",
    q4: "c",
    q5: "b",
    q6: "c"
  };

  const explanations = {
    q1: "WiFi uses radio waves to send data wirelessly.",
    q2: "Wireless data can be intercepted if the network is not protected.",
    q3: "Encryption changes readable data into coded form.",
    q4: "In a Caesar Cipher with a shift of 3, A becomes D.",
    q5: "The private key is used to decrypt the message.",
    q6: "Keeping software updated helps protect devices from attacks."
  };

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);

    if (selected && selected.value === answers[key]) {
      score++;
      feedback.push(`<p>✅ ${key.toUpperCase()}: Correct</p>`);
    } else {
      feedback.push(`<p>❌ ${key.toUpperCase()}: ${explanations[key]}</p>`);
    }
  }

  const resultBox = document.getElementById("result");
  resultBox.innerHTML = `
    <p>Your score is ${score} out of 6</p>
    ${feedback.join("")}
  `;
}
