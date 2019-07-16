function toggleSection(name) {
//first get dom element specified by name
var elt = document.getElementById(name)
//if the element is hidden show it
if (elt.style.visibility === 'hidden'){
  elt.style.visibility = 'visible';
} else{
    elt.style.visibility= "hidden";
}
//if the element is shown hide it
}
