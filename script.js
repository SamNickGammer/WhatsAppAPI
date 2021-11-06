function submitForm() {
  var inputPrimaryNumber = document.getElementById('inputPrimayNumber').value;
  var inputPrimaryTxt = document.getElementById('inputPrimayTxt').value;
  var mainURL = `https://wa.me/+91${inputPrimaryNumber}?text=${inputPrimaryTxt}`;
  window.open(mainURL, '_blank');
}
