var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function button_start(){
    document.getElementById("text_area").value="";
    recognition.start()
}
recognition.onresult=function (event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("text_area").value=content;
    speak();
}
function speak(){
var synth=window.speechSynthesis;
speak_data=document.getElementById("text_area").value;
var utter_this=new SpeechSynthesisUtterance(speak_data);
synth.speak(utter_this);
}
