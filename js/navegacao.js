const toggleNavbar = () => {
  let lista = document.querySelector("#menu_navegacao div:nth-of-type(2)");
  lista.style.display =
    lista.style.display == "none" || lista.style.display == ""
      ? "flex"
      : "none";
};
