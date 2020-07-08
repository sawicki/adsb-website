function openADSB(evt, ADSBName) {
  var i, tabcontent, tablinks , test1; 
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    test1 = tablinks[i].querySelector("i").className;
    tablinks[i].querySelector("i").className = "fa fa-plane colorblue";
  }
  document.getElementById(ADSBName).style.display = "block";
  evt.currentTarget.className += " active";
  // evt.currentTarget.querySelector("i").className = "fa fa-plane colorred";
}

document.getElementById("defaultOpen").click();