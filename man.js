

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="image_captured" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version:",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bEGK07p8b/model.json',modelLoaded);

function modelLoaded() {
    console.log("Model Loaded Successfully!");
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        speak();
        if (results[0].label == "THUMBS UP")
        {
            document.getElementById("update_gesture").innerHTML = "&#128077;";
        }
        if (results[0].label == "PEACE")
        {
            document.getElementById("update_gesture").innerHTML = "&#9996;";
        }
        if (results[0].label == "OKAY")
        {
            document.getElementById("update_gesture").innerHTML = "&#128076;";
        }
        if (results[1].label == "THUMBS UP")
        {
            document.getElementById("update_gesture2").innerHTML = "&#128077;";
        }
        if (results[1].label == "PEACE")
        {
            document.getElementById("update_gesture2").innerHTML = "&#9996;";
        }
        if (results[1].label == "OKAY")
        {
            document.getElementById("update_gesture2").innerHTML = "&#128076;";
        }
    }
}


function speak() {
    var synth = window.speechSynthesis;
    var speak_data = "The Prediction Is "+prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}