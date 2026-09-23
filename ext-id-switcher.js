// Small floating widget to test the Brevo tracker as different contacts.
// Sets/reads a "test_ext_id" value in localStorage; tracker.js picks it up
// on each page load. For testing only — real visitors never see a value here.

document.addEventListener("DOMContentLoaded", function () {
  var current = "";
  try {
    current = localStorage.getItem("test_ext_id") || "";
  } catch (e) {}

  var box = document.createElement("div");
  box.id = "ext-id-switcher";
  box.innerHTML =
    '<span class="ext-id-label">Testing as</span>' +
    '<input type="text" id="ext-id-input" placeholder="email or id" value="' +
    current.replace(/"/g, "&quot;") +
    '">' +
    '<button type="button" id="ext-id-save">Set</button>' +
    '<button type="button" id="ext-id-clear" title="Reset to default">Reset</button>';
  document.body.appendChild(box);

  document.getElementById("ext-id-save").addEventListener("click", function () {
    var val = document.getElementById("ext-id-input").value.trim();
    if (val) {
      try {
        localStorage.setItem("test_ext_id", val);
      } catch (e) {}
      location.reload();
    }
  });

  document.getElementById("ext-id-clear").addEventListener("click", function () {
    try {
      localStorage.removeItem("test_ext_id");
    } catch (e) {}
    location.reload();
  });

  document.getElementById("ext-id-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") document.getElementById("ext-id-save").click();
  });
});
