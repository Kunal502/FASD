function classification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/OA3ljd8Ug/model.json", modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
    console.log(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);

        colour_of_number_r = Math.floor(Math.random() * 255) + 1;
        colour_of_number_g = Math.floor(Math.random() * 255) + 1;
        colour_of_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("object").innerHTML = "I can hear" + results[0].label;
        document.getElementById("Accuracy").innerHTML = 'Accuracy = ' + (results[0].Accuracy * 100).toFixed(2)+"%";
        document.getElementById("object").style.color = "rgb(" + colour_of_number_r+  ", + "+ colour_of_number_g +", "+ colour_of_number_b+")";
        document.getElementById("Accuracy").style.color = "rgb(" + colour_of_number_r+  ", + "+ colour_of_number_g +", "+ colour_of_number_b+")";

        image1 = document.getElementById('alien1');
        image2 = document.getElementById('alien2');
        image3 = document.getElementById('alien3');
        image4 = document.getElementById('alien4');

        if (results[0].label == "clap") {
            image1.src = 'aliens-01.gif';
            image2.src = 'aliens-02.png';
            image3.src = 'aliens-03.png';
            image4.src = 'aliens-04.png';
        } else if (results[0].label == "bell") {
            image1.src = 'aliens-01.png';
            image2.src = 'aliens-02.gif';
            image3.src = 'aliens-03.png';
            image4.src = 'aliens-04.png';
        } else if (results[0].label == "snap") {
            image1.src = 'aliens-01.png';
            image2.src = 'aliens-02.png';
            image3.src = 'aliens-03.gif';
            image4.src = 'aliens-04.png';
        } else {
            image1.src = 'aliens-01.png';
            image2.src = 'aliens-02.png';
            image3.src = 'aliens-03.png';
            image4.src = 'aliens-04.gif';
        }

    }

}