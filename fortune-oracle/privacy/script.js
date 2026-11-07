(function () {
  var titles = {
    en: "Privacy Policy — Fortune Oracle",
    ru: "Политика конфиденциальности — Fortune Oracle",
  };

  var headings = {
    en: "Privacy Policy",
    ru: "Политика конфиденциальности",
  };

  var updated = {
    en: "Last updated: November 2026",
    ru: "Последнее обновление: ноябрь 2026",
  };

  var policyEn = document.getElementById("policy-en");
  var policyRu = document.getElementById("policy-ru");
  var titleEl = document.querySelector('[data-i18n="title"]');
  var updatedEl = document.querySelector('[data-i18n="updated"]');
  var buttons = Array.prototype.slice.call(
    document.querySelectorAll(".lang-btn[data-lang]")
  );

  function detectInitialLang() {
    var languages = [];
    if (navigator.languages && navigator.languages.length) {
      languages = navigator.languages;
    } else if (navigator.language) {
      languages = [navigator.language];
    }

    for (var i = 0; i < languages.length; i += 1) {
      var code = String(languages[i] || "").toLowerCase();
      if (code === "ru" || code.indexOf("ru-") === 0) {
        return "ru";
      }
    }
    return "en";
  }

  function setLanguage(lang) {
    var next = lang === "ru" ? "ru" : "en";
    var showRu = next === "ru";

    document.documentElement.lang = next;
    document.title = titles[next];

    if (titleEl) titleEl.textContent = headings[next];
    if (updatedEl) updatedEl.textContent = updated[next];

    if (policyEn) {
      policyEn.hidden = showRu;
      policyEn.classList.toggle("is-visible", !showRu);
    }
    if (policyRu) {
      policyRu.hidden = !showRu;
      policyRu.classList.toggle("is-visible", showRu);
    }

    buttons.forEach(function (button) {
      var active = button.getAttribute("data-lang") === next;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.getAttribute("data-lang"));
    });
  });

  setLanguage(detectInitialLang());
})();
