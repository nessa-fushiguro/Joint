document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("faq-modal");
    const openBtn = document.getElementById("open-faq");
    const closeBtn = document.querySelector(".close-modal");
    const faqItems = document.querySelectorAll(".faq-item");

    // Abrir Modal
    openBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("show");
        document.body.style.overflow = "hidden"; // Evita el scroll de fondo
    });

    // Cerrar Modal
    const closeModal = () => {
        modal.classList.remove("show");
        document.body.style.overflow = "auto";
    };

    closeBtn.addEventListener("click", closeModal);
    
    // Cerrar al hacer clic fuera del cuadro blanco
    window.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    // Lógica del Acordeón FAQ
    faqItems.forEach(item => {
        const header = item.querySelector(".faq-header");
        header.addEventListener("click", () => {
            const isActive = item.classList.contains("active");
            
            // Cerrar todos los demás
            faqItems.forEach(el => el.classList.remove("active"));
            
            // Si no estaba activo, abrirlo
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });
});