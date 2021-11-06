function submitForm() {
  var inputPrimaryNumber = document.getElementById('inputPrimayNumber').value;
  var inputPrimaryTxt = document.getElementById('inputPrimayTxt').value;
  var linkID = document.getElementById('linkID');
  var mainURL = `https://wa.me/+91${inputPrimaryNumber}?text=${inputPrimaryTxt}`;
   window.open(mainURL, '_blank');
//   console.log(mainURL);
//   var aEle = document.createElement('a');
//   var insideTxt = document.createTextNode('Click Me');
//   aEle.href = mainURL;
//   aEle.target = '_Blank';
//   aEle.appendChild(insideTxt);
//   linkID.appendChild(aEle);
//   aEle.onclick = () => {
//     window.open(mainURL, '_blank');
//     document.location.reload();
//   };
}
