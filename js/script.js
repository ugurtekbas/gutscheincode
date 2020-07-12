function copyTheCode() {
  //track the click first
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
