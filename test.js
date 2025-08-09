window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

$(document).ready(function(){
  var head = document.getElementsByClassName("nav_area")[0];
  var activeTab = head.getElementsByTagName("a");
  for (var i = 0; i < activeTab.length; i++){
    $(activeTab[i]).click(function(){
      var tab = document.getElementsByClassName("active");
      tab[0].className = tab[0].className.replace("active", "");
      this.className += "active";
    });
  }
});




  




  