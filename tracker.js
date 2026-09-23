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

// No default ext_id: visitors stay anonymous unless a test value is set
// via the ext-id-switcher widget (localStorage "test_ext_id").
function getExtId() {
  try {
    return localStorage.getItem("test_ext_id") || "";
  } catch (e) {
    return "";
  }
}

var extId = getExtId();
if (extId) {
  Brevo.push([
    "identify",
    {
      identifiers: { ext_id: extId },
    },
  ]);
}
