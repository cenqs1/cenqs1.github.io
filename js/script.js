
const translations = {
  en: {
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navTraining: "Training",
    navContact: "Contact",

    heroEyebrow: "SOFTWARE DEVELOPMENT · RESEARCH",
    heroRole: "Computer Programmer & Aspiring Researcher",
    heroDescription: "Building practical software solutions, exploring artificial intelligence and pursuing knowledge through technology.",
    heroButton1: "Explore Projects",
    heroButton2: "Get in Touch",

    aboutLabel: "01 / ABOUT",
    aboutTitle: "A little about me.",
    aboutText: "I am a Computer Programming graduate interested in software development, backend technologies and artificial intelligence. I enjoy learning by building projects and exploring how technology can solve real-world problems. My long-term goal is to combine software development with academic research.",

    detail1Title: "Software Development",
    detail1Text: "Building practical digital solutions.",
    detail2Title: "Artificial Intelligence",
    detail2Text: "Exploring intelligent technologies.",
    detail3Title: "Academic Research",
    detail3Text: "Learning, investigating and improving.",

    skillsLabel: "02 / TECHNOLOGIES",
    skillsTitle: "Technical interests.",
    skill1Title: "Programming",
    skill1Text: "Programming languages and fundamentals.",
    skill2Title: "Web Development",
    skill2Text: "Web interfaces and application development.",
    skill3Title: "Databases & Tools",
    skill3Text: "Database concepts and development tools.",

    projectsLabel: "03 / SELECTED WORK",
    projectsTitle: "Projects & experiments.",
    project1Text: "A service-oriented platform concept connecting customers and service providers.",
    project2Text: "A personal software initiative focused on practical digital solutions.",
    project3Text: "An emergency assistance application concept for disaster-related support.",
    viewProject: "VIEW PROJECT ↗",
    viewGithub: "VIEW GITHUB ↗",

    trainingLabel: "04 / KNOWLEDGE SHARING",
    trainingTitle: "Online Learning & Training.",
    trainingText: "Beginner-friendly online coding lessons focused on clear explanations, practical examples and learning by doing.",
    training1: "Introduction to web development, page structure and styling.",
    training2: "Variables, conditions, switch-case and object-oriented concepts.",
    training3Title: "Programming Basics",
    training3: "Algorithms and problem-solving step by step.",
    beginner: "BEGINNER",
    priceLabel: "LESSON RATE",
    perHour: "/ hour",
    priceDescription: "Online individual lessons · By appointment",
    lessonButton: "Lesson Information",

    contactLabel: "05 / CONTACT",
    contactTitle: "Let's connect.",
    contactText: "For projects, collaboration, online lessons or professional opportunities, feel free to contact me.",
    linkedinButton: "LINKEDIN ↗",
    footerText: "Built with curiosity and code."
  },

  tr: {
    navAbout: "Hakkımda",
    navSkills: "Yetenekler",
    navProjects: "Projeler",
    navTraining: "Eğitim",
    navContact: "İletişim",

    heroEyebrow: "YAZILIM GELİŞTİRME · ARAŞTIRMA",
    heroRole: "Bilgisayar Programcısı ve Araştırmacı Adayı",
    heroDescription: "Pratik yazılım çözümleri geliştiriyor, yapay zekâyı keşfediyor ve teknoloji aracılığıyla kendimi geliştiriyorum.",
    heroButton1: "Projeleri İncele",
    heroButton2: "İletişime Geç",

    aboutLabel: "01 / HAKKIMDA",
    aboutTitle: "Kısaca ben.",
    aboutText: "Bilgisayar Programcılığı mezunuyum. Yazılım geliştirme, backend teknolojileri ve yapay zekâ ile ilgileniyorum. Projeler geliştirerek öğrenmeyi ve teknolojinin gerçek problemlere nasıl çözüm üretebileceğini keşfetmeyi seviyorum. Uzun vadeli hedefim yazılım geliştirmeyi akademik araştırmalarla birleştirmek.",

    detail1Title: "Yazılım Geliştirme",
    detail1Text: "Pratik dijital çözümler geliştirmek.",
    detail2Title: "Yapay Zekâ",
    detail2Text: "Akıllı teknolojileri keşfetmek.",
    detail3Title: "Akademik Araştırma",
    detail3Text: "Öğrenmek, araştırmak ve gelişmek.",

    skillsLabel: "02 / TEKNOLOJİLER",
    skillsTitle: "Teknik ilgi alanlarım.",
    skill1Title: "Programlama",
    skill1Text: "Programlama dilleri ve temel kavramlar.",
    skill2Title: "Web Geliştirme",
    skill2Text: "Web arayüzleri ve uygulama geliştirme.",
    skill3Title: "Veritabanı ve Araçlar",
    skill3Text: "Veritabanı kavramları ve geliştirme araçları.",

    projectsLabel: "03 / SEÇİLMİŞ ÇALIŞMALAR",
    projectsTitle: "Projeler ve denemeler.",
    project1Text: "Müşterilerle hizmet verenleri buluşturmayı amaçlayan platform fikri.",
    project2Text: "Pratik dijital çözümlere odaklanan kişisel yazılım girişimi.",
    project3Text: "Afet durumlarında destek sağlamayı amaçlayan acil yardım uygulaması fikri.",
    viewProject: "PROJEYİ İNCELE ↗",
    viewGithub: "GITHUB PROFİLİ ↗",

    trainingLabel: "04 / BİLGİ PAYLAŞIMI",
    trainingTitle: "Online Eğitim ve Öğrenme.",
    trainingText: "Açık anlatım, pratik örnekler ve uygulayarak öğrenme üzerine odaklanan başlangıç seviyesi çevrim içi kodlama dersleri.",
    training1: "Web geliştirmeye giriş, sayfa yapısı ve biçimlendirme.",
    training2: "Değişkenler, koşullar, switch-case ve nesne yönelimli programlama kavramları.",
    training3Title: "Programlamaya Giriş",
    training3: "Algoritmaları ve problem çözmeyi adım adım öğrenme.",
    beginner: "BAŞLANGIÇ",
    priceLabel: "DERS ÜCRETİ",
    perHour: "/ saat",
    priceDescription: "Birebir çevrim içi ders · Randevu ile",
    lessonButton: "Ders Bilgisi Al",

    contactLabel: "05 / İLETİŞİM",
    contactTitle: "İletişime geçelim.",
    contactText: "Projeler, iş birlikleri, online dersler veya profesyonel fırsatlar için benimle iletişime geçebilirsiniz.",
    linkedinButton: "LINKEDIN ↗",
    footerText: "Merak ve kod ile geliştirildi."
  }
};

const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "en";

function changeLanguage(language) {
  currentLanguage = language;

  document.documentElement.lang = language;
  languageBtn.textContent = language === "en" ? "TR" : "EN";

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    const translatedText = translations[language][key];

    if (translatedText) {
      element.textContent = translatedText;
    }
  });
}

languageBtn.addEventListener("click", () => {
  const nextLanguage = currentLanguage === "en" ? "tr" : "en";
  changeLanguage(nextLanguage);
});

document.getElementById("year").textContent = new Date().getFullYear();

changeLanguage("en");
