const changeCSS = (property, value) =>
  document.documentElement.style.setProperty(property, value);

let darkTheme = localStorage.getItem("theme") === "dark" ? true : false;
if (darkTheme == null) {
  darkTheme = true;
}

changeTheme(darkTheme);

function changeTheme(theme = !darkTheme) {
  darkTheme = theme;
  localStorage.setItem("theme", theme ? "dark" : "light");
  if (theme) {
    changeCSS("--color-bg", "#000000");
    changeCSS("--color-alt-bg", "#111111");
    changeCSS("--color-alt-bg-hover", "#222222");
    changeCSS("--color-fg", "#ffffff");
    changeCSS("--color-fg-focus", "#ffffff");
  } else {
    changeCSS("--color-bg", "#eeeeee");
    changeCSS("--color-alt-bg", "#ffffff");
    changeCSS("--color-alt-bg-hover", "#ffffff");
    changeCSS("--color-fg", "#333333");
    changeCSS("--color-fg-focus", "#111111");
  }
}
