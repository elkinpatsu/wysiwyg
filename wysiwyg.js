function init () {
  document.querySelector(".element.bold").onclick = function () {
    document.execCommand("bold", true);
    document.querySelector(".paper").focus();
  }
  document.querySelector(".element.italic").onclick = function () {
    document.execCommand("italic", true);
    document.querySelector(".paper").focus();
  }
  document.querySelector(".element.underline").onclick = function () {
    document.execCommand("underline", true);
    document.querySelector(".paper").focus();
  }
  document.querySelector(".element.strikethrough").onclick = function () {
    document.execCommand("strikeThrough", true);
    document.querySelector(".paper").focus();
  }
  document.querySelector(".font-select").oninput = function () {
    document.execCommand("fontName", true, this.value);
    document.querySelector(".paper").focus();
  }
  document.querySelector(".color-select").oninput = function () {
    document.execCommand("foreColor", true, this.value);
    document.querySelector(".paper").focus();
  }
  document.querySelector(".right").onclick = function () {
    document.execCommand("justifyRight", true);
    document.querySelector(".paper").focus();
  }
  document.querySelector(".center").onclick = function () {
    document.execCommand("justifyCenter", true);
    document.querySelector(".paper").focus();
  }
  document.querySelector(".left").onclick = function () {
    document.execCommand("justifyLeft", true);
    document.querySelector(".paper").focus();
  }
  document.querySelector(".justify").onclick = function () {
    document.execCommand("justifyFull", true);
    document.querySelector(".paper").focus();
  }
}
init();
