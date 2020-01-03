languages = {
  sr: "Srpski",
  en: "English"
};

function changeLanguage() {
  let currentLanguage = localStorage.getItem("language");
  let langScreen = document.createElement("div");
  langScreen.classList.add("langScreen");
  langScreen.onclick = () => document.body.removeChild(langScreen);
  let languageList = document.createElement("ul");
  languageList.innerHTML = `<span>${
    currentLanguage === "sr" ? "Izaberite jezik" : "Choose language"
  }</span>`;
  for (const i in languages) {
    let lang = document.createElement("li");
    lang.innerHTML = `${languages[i]}`;
    lang.onclick = () => {
      localStorage.setItem("language", i);
      window.location.replace("/" + i);
    };
    languageList.appendChild(lang);
  }
  langScreen.appendChild(languageList);
  document.body.appendChild(langScreen);
}
