// DARK MODE
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// MULTILINGUE
const langToggle = document.getElementById("langToggle");

let currentLang = "FR";

const translations = {
    EN: {
        hero_title: "Hello, I am <span>Leoded Eliscar</span>",
        hero_subtitle: "Web Developer & Digital Creator",

        about_title: "About me",
        about_text: "Passionate about technology and creation, I build modern projects.",

        skills_title: "Skills",

        projects_title: "Recent Projects",
        p1_title: "Portfolio Website",
        p1_text: "Modern animated site.",
        p2_title: "Mobile App",
        p2_text: "Fast and simple application.",
        p3_title: "Branding & Design",
        p3_text: "Full graphic identity.",

        contact_title: "Contact me",
        contact_text: "Send me a message:",

        footer_text: "© 2026 - Leoded Eliscar Portfolio"
    },

    FR: {
        hero_title: "Bonjour, je suis <span>Leoded Eliscar</span>",
        hero_subtitle: "Développeur Web & Créateur Digital",

        about_title: "À propos de moi",
        about_text: "Passionné de technologie et de création, je développe des projets modernes.",

        skills_title: "Compétences",

        projects_title: "Projets récents",
        p1_title: "Projet Portfolio",
        p1_text: "Site web moderne et animé.",
        p2_title: "Application Mobile",
        p2_text: "Application simple et rapide.",
        p3_title: "Branding & Design",
        p3_text: "Création graphique complète.",

        contact_title: "Me contacter",
        contact_text: "Envoyez-moi un message :",


        footer_text: "© 2026 - Portfolio de Leoded Eliscar"
    }
};

langToggle.addEventListener("click", () => {
    currentLang = currentLang === "FR" ? "EN" : "FR";
    applyLang();
});

function applyLang() {
    for (const id in translations[currentLang]) {
        document.getElementById(id).innerHTML = translations[currentLang][id];
    }
}