var element_unordered_list = document.getElementById("minListe");

function printToOutputBox(selectobj){
 var e_proglangs = document.getElementById("proglangs");
 var e_outputbox = document.getElementById("outputbox");
 e_outputbox.innerHTML = "Du har selektert programmeringsspråket " + e_proglangs.options[selectobj.selectedIndex].text;
 }
  function konstruksjon ()
{
alert("Denne siden er under konstruksjon.");
}