var speech = true;
window.SpeechRecognition = window.SpeechRecognition
    || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

    document.getElementById("p").innerHTML = transcript;
    console.log(transcript);
});

if (speech == true) {
    recognition.start();
    recognition.addEventListener('end', recognition.start);
}

// var btn = document.querySelector('.btn');

// btn.addEventListener('click', (ea) => {
//     btn.classList.add('fade')

//     let recognition = new webkitSpeechRecongnition()
//     recognition.lang = 'en-GB';
//     recognition.addEventListener('result', (e) => {
//         document.querySelector('.text').value = e.results[0][0].transcript
//         btn.classList.remove('fade')
//     })
//     recognition.start()
// })