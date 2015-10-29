function waitSeconds(iMilliSeconds)
{
    var counter= 0
        , start = new Date().getTime()
        , end = 0;
    while (counter < iMilliSeconds) {
        end = new Date().getTime();
        counter = end - start;
    }
}

function iframe()
{
  hideAll();
  T("#tommyBody").css("background", "white");
  T("#iframe").show();

  var xmlhttp;

  if (window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }

  xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("iframe").innerHTML=xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET","iframe.html",true);
  xmlhttp.send();
}

function writeString(str)
{
  var div = T("#tommyDiv");

  for (var i = 0, len = str.length; i < len; i++) {
    (function(i){
        setTimeout(function(){
            div[0].innerHTML += str[i];
        }, 100 * i);
    }(i));
  }
}

function setBackground(backgroundcolor, textcolor, time)
{
  (function(){
      setTimeout(function(){
          T("#tommyBody").css("background", backgroundcolor);
          T("#tommyDiv").css("color", textcolor);
      }, time);
  }());
}

function buttons(id, time)
{
  (function(){
      setTimeout(function(){
          T(id).show();
      }, time);
  }());
}

function hideAll()
{
  T("#tommyBody")[0].classList.remove("tomtom");
  T(".candle").hide();
  T("#tommyDiv").hide();
  T("#canvas").hide();
  T("#iframe").hide();
}

function startSnow()
{
  hideAll();
  var classname = T(".tomtom");

  T("#tommyBody").css("background","");
  if(classname[0] == null)
  {
    T("#tommyBody")[0].classList.add("tomtom")
  }
}

function startCandle()
{
    hideAll();
    T("#tommyBody").css("background","black");
    T(".candle").show();
}

function startParty()
{
    hideAll();
    T("#tommyBody").css("background","white");
    T("#canvas").show();

    party_start();
}
