(function () {
  var titles = {
    en: "Support — Sphere: Mystic Oracle",
    ru: "Поддержка — Сфера. Мистический оракул",
  };

  var headings = {
    en: "Support",
    ru: "Поддержка",
  };

  var eyebrows = {
    en: "Sphere · Mystic Oracle",
    ru: "Сфера · Мистический оракул",
  };

  var intros = {
    en: "A quiet place for help with your conversations with the Sphere.",
    ru: "Спокойное пространство, где можно найти помощь по работе со Сферой.",
  };

  var english = document.getElementById("support-en");
  var russian = document.getElementById("support-ru");
  var title = document.querySelector('[data-i18n="title"]');
  var eyebrow = document.querySelector('[data-i18n="eyebrow"]');
  var intro = document.querySelector('[data-i18n="intro"]');
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".lang-btn"));

  function initialLanguage() {
    var languages = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || "en"];

    for (var index = 0; index < languages.length; index += 1) {
      if (String(languages[index]).toLowerCase().indexOf("ru") === 0) return "ru";
    }

    return "en";
  }

  function setLanguage(language) {
    var next = language === "ru" ? "ru" : "en";
    var showRussian = next === "ru";

    document.documentElement.lang = next;
    document.title = titles[next];
    title.textContent = headings[next];
    eyebrow.textContent = eyebrows[next];
    intro.textContent = intros[next];

    english.hidden = showRussian;
    russian.hidden = !showRussian;
    english.classList.toggle("is-visible", !showRussian);
    russian.classList.toggle("is-visible", showRussian);

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

  document.getElementById("year").textContent = String(new Date().getFullYear());
  setLanguage(initialLanguage());
})();
