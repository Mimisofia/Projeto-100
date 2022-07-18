var SpeechRecognition = window.webkitSpeechRecognition;
/* API web Speech usado para reconhecer o que estamos falando e converter para o texto que foi dito
Armazenamos este API em uma variável*/
  
// criamos um novo API para usar e armazenamos em uma variável tb
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox"); 

function start()
{
    Textbox.innerHTML = ""; //document.getElementById("textbox").innerHTML = ""; Deixar o campo vazio após o botão ser pressionado
    recognition.start(); //start é uma função predefinida do API Web Speech e irá iniciar a conversão de fala para texto.
} 
 
recognition.onresult = function(event) { //A função onresult é utilizada para converter a fala em texto

 console.log(event); 

var Content = event.results[0][0].transcript; //content = conteúdo = guarda o texto convertido em fala 
/*t clicamos em results, dentro de results clicamos em 0, e dentro de 0 clicamos em 0
novamente. No código, será escrito como - event.results[0][0].*/

    Textbox.innerHTML = Content; //document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
      if(Content =="tire minha selfie")
      {
        console.log("tirando selfie em 5 segundos");
        speak(); //Função para falar: tirando selfie...
      }
}


function speak(){
    var synth = window.speechSynthesis;

    //speak_data = document.getElementById("textbox").value; / atualizando speakData que está dentro da função speak().
    speak_data = "Tirando sua selfie em 5 segundos"; //A variável speak_data é utilizada para conter o texto obtido da área de texto.
    //E, quando passamos a variável speakData para a função speak(), a qual converte o texto em fala, acionamos o sistema para que ele leia em voz alta
    //speakData sempre terá o texto como “Tirando sua selfie em 5 segundos”.

    var utterThis = new SpeechSynthesisUtterance(speak_data);
    /*"utterThis" - é uma variável na qual armazenaremos o texto convertido em fala.
"SpeechSynthesisUtterance" - é a função que irá converter texto em fala.*/

    synth.speak(utterThis);
    /*Agora nós convertemos texto em fala e o armazenamos dentro da variável "utterThis", 
    então vamos passar essa variável para a função speak() da API "speechSynthesis" armazenada na variável chamada "synth".
    
    ● synth - pois, aqui, armazenamos a API no ponto 2
    ● speak()- speak() é uma função predefinida da API.
    ● utterThis - possui o valor convertido do texto em fala que queremos que sistema diga*/

    Webcam.attach(camera);

/*como adicionar a função set Timeout e atrasar a função take_snapshot()  
O primeiro passo é definir a função setTimeout() dentro da função speak()
O segundo passo é definir uma função vazia dentro da função set Timeout. Em seguida, chame a função take_snapshot() que é uma função
 para tirar uma selfie, dentro de uma função setTimeout() porque queremos que o processo de tirar uma selfie seja atrasado em 5 segundos.*/

    setTimeout(function()
    { 
        take_selfie(); 
        save();
    }, 5000);
}

 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90  //significa a qualidade da visualização da webcam/
});

function take_selfie()
{
    Webcam.snap(function(data_uri) { /*Webcam.snap() é uma função predefinida de webcam.js utilizada para tirar uma selfie. 
    Essa função contém data_uri que pode ser utilizada para mostrar a pré-visualização da imagem gerada após a captura*/
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


function save()
{
  link = document.getElementById("link");
  /*● A src contém o link da imagem na tag img. Portanto, src é a parte importante da tag img.
● Do mesmo modo, href contém o link na tag anchor. Portanto, link é a parte importante da tag
anchor.
● Por isso, pegamos o link da imagem em src, da tag img, e atualizaremos a href da tag anchor com
esse link da imagem. E, clicamos a tag anchor.*/

  image = document.getElementById("selfie_image").src ; //essa é a variável em que armazenaremos a imagem.

  link.href = image;
  link.click();
}
 if(imgId == "selfie1"){
    document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
 }
setTimeout(function()
{
    imgId = "selfie1";
    takeSelfie();
    speak_data = "Tirando sua selfie em 10 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 5000);

setTimeout(function()
{
    imgId = "selfie2";
    takeSelfie();
    speak_data = "Tirando sua selfie em 10 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 5000);

function takeSelfie()
{
    console.log(imgId);

    Webcam.snap(function(data_uri) {
        if(imgId == "selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(imgId == "selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(imgId == "selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }       
    });
}