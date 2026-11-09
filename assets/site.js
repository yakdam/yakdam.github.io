// Fills in the email address at runtime so it is not present as plain text
// in the HTML, which keeps it away from simple spam harvesters.
(function () {
  var email = atob('aGVsbG9AZmFpemFuYWtyYW0ubWU=');
  document.querySelectorAll('.js-email').forEach(function (el) {
    var a = document.createElement('a');
    a.href = 'mailto:' + email;
    a.textContent = email;
    el.replaceChildren(a);
  });
})();
