var firstItem=document.getElementById('one');
var showTextContent=firstItem.textContent;
var showInnerText=firstItem.innerText;
var msg='<p>textcontent:'+showTextContent+'</p>';
 msg+='<p>innertext:'+showInnerText+'</p>';
 var el=document.getElementById('scriptResults');
 el.innerHTML=msg;
 firstItem.textContent='sourdough bread';
 
