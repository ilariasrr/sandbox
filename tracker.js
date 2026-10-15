// Brevo tracker — Version: 2.1 (ext_id en dur pour les tests)

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
  },
]);

// ext_id en dur : tous les visiteurs sont identifiés avec cette valeur.
// Pour repasser en anonyme, mets "" ici.
var HARDCODED_EXT_ID = "test1";

// On garde getExtId() car product.html peut l'appeler.
function getExtId() {
  return HARDCODED_EXT_ID;
}

var extId = getExtId();
if (extId) {
  Brevo.push([
    "identify",
    {
      identifiers: { ext_id: String(extId) },
    },
  ]);
}
