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
}