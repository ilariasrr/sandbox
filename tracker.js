// Brevo tracker — Version: 2.0
// Edit this file to update the tracker on all pages at once.

(function () {
  var s = document.createElement("script");
  s.src = "https://cdn.brevo.com/js/sdk-loader.js";
  s.async = true;
  document.head.appendChild(s);
})();

window.Brevo = window.Brevo || [];
Brevo.push([
  "init",
  {
    client_key: "yfhr94n6pag3njhe0jkexuvm",
    // Optional: Add other initialization options, see documentation
  },
]);

Brevo.push([
  "identify",
  {
    identifiers: { ext_id: "ilaria.serra@brevo.com" },
  },
]);
