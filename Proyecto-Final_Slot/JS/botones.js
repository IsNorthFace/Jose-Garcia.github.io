// para abrir el modal
function openModal() {
    document.getElementById("myModal").style.display = "flex";
    document.getElementById("myModal").classList.add("modal-active");
  }

  // para cerrar el modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("myModal").classList.remove("modal-active");
  }