/* Aplica o link definido em config.js */
(function () {
  var cfg = window.LINK_BIO || {};

  document.querySelectorAll("[data-link]").forEach(function (el) {
    var url = cfg[el.getAttribute("data-link")];
    if (!url) return;
    el.href = url;
    if (cfg.abrirEmNovaAba) {
      el.target = "_blank";
      el.rel = "noopener";
    }
  });
})();
