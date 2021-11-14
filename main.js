var Spechrecognition = window.webkitSpeechRecognition;
var recognition = new Spechrecognition();

function start()
    {
        document.getElementById("textbox").innerHTML = "";
        recognition.start();
    }
    recognition.onresult = function (event){
        console.log(event);
        var content = event.results[0][0].transcript;
        document.getElementById("textbox").innerHTML = content;
        console.log(content);
        if(content == "take my selfie")
        {
            console.log("takeing selfie");
            speak();
        }
    }
function speak()
{
    synth = window.speechSynthesis;
    speake_data = "takeing selfie in 5 seconds";

    utter = new SpeechSynthesisUtterance(speake_data);
    console.log(utter);
    synth.speak(utter);
    Webcam.attach(camera);
    setTimeout(function(){
     snapshot();
     save();
    }, 5000);
}
camera = document.getElementById("camera");
Webcam.set({
width : 360,
height : 260,
image_formate : 'jpeg',
jpeg_quality : 90
});
function snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';        
    });
}

function save()
{
  link = document.getElementById("link");
  image= document.getElementById("selfie_image").src;
  link.href = image;
  link.click();
}