function togglePub(source){
  checkboxes = document.getElementsByName('pub');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
    // console.log(checkboxes[i].onchange);
     checkboxes[i].onchange();
    // showImg(checkboxes[i].id);
    // checkboxes[i].onchange = True;
  }
}

function toggleOff(source){
  checkboxes = document.getElementsByName('off');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
    // console.log(checkboxes[i].onchange);
     checkboxes[i].onchange();
    // showImg(checkboxes[i].id);
    // checkboxes[i].onchange = True;
  }
}

function showImg(id) {
 var el = document.getElementById(id);

 if (el.style.visibility=="visible") {
        el.style.visibility="hidden";
   }
   else {
        el.style.visibility="visible";
   }
}
