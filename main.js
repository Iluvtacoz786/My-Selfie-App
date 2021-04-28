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
    if (content=="take my selfie"){
        speak();
        Webcam.attach( '#camera' );
        setTimeout(function(){
            take_selfie()
            save()
        },5000);
    
    }
}
function speak(){
var synth=window.speechSynthesis;
speak_data="taking your selfie in five seconds"
var utter_this=new SpeechSynthesisUtterance(speak_data);
synth.speak(utter_this);

}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
  });
  function take_selfie(){
      Webcam.snap(function(data_URI){
          document.getElementById("result").innerHTML="<img src='"+data_URI+"' id='result_img'>"
      })
  }
  function save(){
      link=document.getElementById("link");
      img=document.getElementById("result_img").src;
      link.href=img;
      link.click()
  }
  
