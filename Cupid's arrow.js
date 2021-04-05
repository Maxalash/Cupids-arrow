var loginsign = true;

window.onload = function(){
   function searchRedir(){
      var searchKey = document.getElementById('searchingbox').value;
      window.location = "/<Cupid's arrow.html>?search=" + escape(searchKey);
      return false;
   }
   document.getElementById('searchingbox').onchange =
   document.getElementById('searchingboxbtn').onclick = searchRedir;

}

$(document).ready(function()
  {
   var vol=document.getElementById("audio");
  vol.volume=0.1;
  	$("#audio")[0].play();


    var readerView = false;
    var redister=false;
    $(".signin_btn1").click(function()
    {
      if(readerView == false)
      {
        $( "#maining, #footer" ).toggle();
        $("#loginn").show();
        readerView = true;
      }
      else
      {
        $( ".body" ).toggle();
        $("#loginn").hide();
        readerView = false;
      }
    });

    $(".signin_btn").click(function()
    {
      if(redister == false)
      {
        $( "#maining, #footer" ).toggle();
        $("#registering").show();
        redister = true;
      }
      else
      {
        $( "#maining, #footer" ).toggle();
        $("#registering").hide();
        redister = false;
      }
    });

  });

function checkdata()
{
    var name1=document.getElementById("name1");
    var name2=document.getElementById("name2");
    if(name1.value==""){
        alert("Please enter your name");
        name1.focus();
        return false;
    }
    if(name2.value==""){
        alert("Please enter the name of your beloved one");
        name2.focus();
        return false;
    }
	$(".signin_btn1,.signin_btn").hide();
	$(".login").hide();
	$( "#maining, #footer" ).toggle();
	$("#cudidsid").show();
	loginsign=false;
    return false;
} 
function checkdata1()
{
    var name1=document.getElementById("name3");
    var name2=document.getElementById("name4");
    var name3=document.getElementById("name5");
    var name4=document.getElementById("name6");
    if(name1.value==""){
        alert("Please enter your e-mail");
        name1.focus();
        return false;
    }
    if(name2.value==""){
        alert("Please enter your password");
        name2.focus();
        return false;
    }
    if(name3.value==""){
        alert("Please create your username");
        name3.focus();
        return false;
    }
    if(name4.value==""){
        alert("Please create your password");
        name4.focus();
        return false;
    }
    $(".signin_btn1,.signin_btn").hide();
    $("#registering").hide();
	$( "#maining" ).toggle();
	$("#cudidsid").show();
    return false;
} 

function checkdata2(){
	var name1=document.getElementById("name7");
    var name2=document.getElementById("name8");
    if(name1.value==""){
        alert("Please enter your name");
        name1.focus();
        return false;
    }
    if(name2.value==""){
        alert("Please enter the name of your beloved one");
        name2.focus();
        return false;
    }
    $("#rating").show();
    var number = Math.floor(Math.random() * 100);
    $('#numberrate').text(number);
	$("#okbutton").show();
}
function restart(){
	$("#name7").val("");
	$("#name8").val("");
	$("#rating").hide();
	$("#name7").focus();
	$("#okbutton").hide();
}
function signedin(){
	if(loginsign==true){
		$(".signin_btn1,.signin_btn").hide();
	    $("#registering").hide();
		$("#cudidsid").show();
	}
}


// ********************My Friends***************************************************************


function createFriendElement(){
    var main=document.createElement("div").className += "friendline";
    var head=document.createElement("div").classname +="headernamepart";
    var chat=document.createElement("div").className +="chatdata";
    head.innerHTML=document.createElement("div").className +="friendname";
    chat.innerHTML=document.createElement("div").className +="chatdatascroller";
    main.innerHTML+=head;
    main.innerHTML+=chat;
    return main;

}
function sendmessage(){
	var text = document.getElementById("chatting1").value;
  if(text!=""){
 var divka = document.createElement("div");
 divka.innerHTML=text;
 divka.setAttribute("class","sendedmessage")
 document.getElementById("chatdatascroller").appendChild(divka);
	$(".chatting").val("");
  $("#chatting1").focus();
}
}

//******************************************Search***********************************
function search(a){
  //alert('hello');
var text;
var find=window.document.getElementById(a);
if(find){
  text=find.value;
}
if(text==""){
  alert("Please type a text!");
  return;
}

document.body.innerHTML=document.body.innerHTML.replace(eval("/"+text+"/g"),"<b style ='background:blue; color:white;'>"+text+"</b>");
}