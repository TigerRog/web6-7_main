const refs = {
    openModalBtn: document.getElementById('openmodal'),
    closeModalBtn: document.getElementById('closemodal'),
    modal: document.getElementById('modal'),
};

refs.openModalBtn.addEventListener("click", () => refs.modal.classList.toggle("active"));
refs.closeModalBtn.addEventListener("click", () => refs.modal.classList.toggle("active"));


window.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.classList.contains('pop_up_container')) {
        refs.modal.classList.remove("active")
    }
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        refs.modal.classList.remove("active")
    }
})

