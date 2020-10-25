var gutscheinCodes = obj = JSON.parse('[{ "code":"ethemo1101", "link":"https://n26.com/r/ethemo1101" }, { "code":"johanneb7205", "link":"https://n26.com/r/johanneb7205" }, { "code":"pedroc2390", "link":"https://n26.com/r/pedroc2390" }, { "code":"andresv9750", "link":"https://n26.com/r/andresv9750" }, { "code":"jonass7601", "link":"https://n26.com/r/jonass7601" }, { "code":"huseyinb2196", "link":"https://n26.com/r/huseyinb2196" }, { "code":"felipef2220", "link":"https://n26.com/r/felipef2220" }]');
var randomNum = Math.floor(Math.random() * 7);
setCodes();

function setCodes() {
    document.getElementById("promoCode").innerHTML = gutscheinCodes[randomNum].code;
    document.getElementById("promoLink").innerHTML = gutscheinCodes[randomNum].link;
    document.getElementById("promoLink").href = gutscheinCodes[randomNum].link;

    var eventText = 'Selected code: ' + gutscheinCodes[randomNum].code;
    gtag('event', eventText, { 'event_category': 'Code selection', 'event_label': 'Code selected', 'value': 1 })
}

function copyTheCode() {
  gtag('event', 'Copy button click', { 'event_category': 'Button click', 'event_label': 'Copy', 'value': 1 })

  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById("promoCode"));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById("promoCode"));
    window.getSelection().addRange(range);
    document.execCommand("copy");
  }
  showToast()
}

function showToast() {
  $("#copyToast").toast('show');
}
