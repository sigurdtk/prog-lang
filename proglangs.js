var element_unordered_list = document.getElementById("minListe");alert(element_unordered_list);element_unordered_list.style.color = "red";

function printToOutputBox(selectobj){
 var e_proglangs = document.getElementById("proglangs");
 var e_outputbox = document.getElementById("outputbox");
 e_outputbox.innerHTML = "Du har selektert programmeringsspråket " + e_proglangs.options[selectobj.selectedIndex].text;
}
