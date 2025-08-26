const EN = 0;
const PT = 1;
const menu = [
    {
        "about": "ABOUT",
        "courses": "COURSES",
        "courses-title": "COURSES AND SPECIALIZATIONS"
    },
    {
        "about": "SOBRE",
        "courses": "CURSOS",
        "courses-title": "CURSOS E ESPECIALIZAÇÕES"
    }
];
const text = [
    {
        "age": "I'm 29 years old.",
        "student": "Student of ",
        "course": "Computer Engineering at UFRGS",
        "working": "Currently working as a ",
        "job": "Software Engineer",
        "using": " using ",
        "tech": "Java",
        "activity": " to build microservices",
        "ide": "Co-founder of Empresa Júnior IDE.",
        "info": "For more information:" 
    },
    {
        "age": "Eu tenho 29 anos de idade.",
        "student": "Estudante de ",
        "course": "Engenharia da Computação na UFRGS",
        "working": "Atualmente trabalhando como ",
        "job": "engenheiro de Software",
        "using": " utilizando ",
        "tech": "Java",
        "activity": " para construção de microsserviços",
        "ide": "Co-fundador da Empresa Júnior IDE.",
        "info": "Para mais informações:" 
    }
];

function showMenu() {
    const button = document.getElementById('dropdown-menu');
    const links  = document.getElementById('links');

    if(links.classList.contains('hidden')){
        links.classList.remove('hidden');
    } else {
        links.classList.add('hidden');
    }
}

document.getElementById('dropdown-menu').addEventListener('click',showMenu);

function changeLanguage() {
    const en = document.getElementById('en');
    const pt = document.getElementById('pt');
    const en_m = document.getElementById('en-m');
    const pt_m = document.getElementById('pt-m');

    if(en.classList.contains('language-selected')){
        en.classList.remove('language-selected');
        en_m.classList.remove('language-selected');        
        changeTexts(menu[PT],text[PT]);        
        pt.classList.add('language-selected');
        pt_m.classList.add('language-selected');
    } else {
        pt.classList.remove('language-selected');
        pt_m.classList.remove('language-selected');        
        changeTexts(menu[EN],text[EN]);
        en.classList.add('language-selected');
        en_m.classList.add('language-selected');
    }
}

function changeTexts(menu, texts) {
    for(var i in menu) {
        var elements = Array.from(document.getElementsByClassName(i));
        elements.forEach((el) => {
            el.innerHTML = menu[i];
        });
    }
    for(var i in texts) {
        document.getElementById(i).innerHTML = texts[i];
    }
}

document.getElementById('en').addEventListener('click',changeLanguage);
document.getElementById('en-m').addEventListener('click',changeLanguage);
document.getElementById('pt').addEventListener('click',changeLanguage);
document.getElementById('pt-m').addEventListener('click',changeLanguage);

function changeMenuAbout() {
    const aboutSection = document.getElementById('about');
    const coursesSection = document.getElementById('courses');
    const aboutButton = document.getElementById('about-button');
    const aboutButtonM = document.getElementById('about-button-m');
    const courseButton = document.getElementById('courses-button');
    const courseButtonM = document.getElementById('courses-button-m');
    if (aboutSection.classList.contains('hidden')) {
        coursesSection.classList.add('hidden');
        aboutSection.classList.remove('hidden');
        courseButton.classList.remove('menu-selected');
        courseButtonM.classList.remove('menu-selected');
        aboutButton.classList.add('menu-selected');
        aboutButtonM.classList.add('menu-selected');        
    }
}

function changeMenuCourse() {
    const aboutSection = document.getElementById('about');
    const coursesSection = document.getElementById('courses');
    const aboutButton = document.getElementById('about-button');
    const aboutButtonM = document.getElementById('about-button-m');
    const courseButton = document.getElementById('courses-button');
    const courseButtonM = document.getElementById('courses-button-m');
    if (coursesSection.classList.contains('hidden')) {
        aboutSection.classList.add('hidden');
        coursesSection.classList.remove('hidden');
        courseButton.classList.add('menu-selected');
        courseButtonM.classList.add('menu-selected');
        aboutButton.classList.remove('menu-selected');
        aboutButtonM.classList.remove('menu-selected');        
    }
}

document.getElementById('about-button').addEventListener('click', changeMenuAbout);
document.getElementById('about-button-m').addEventListener('click', changeMenuAbout);
document.getElementById('courses-button').addEventListener('click', changeMenuCourse);
document.getElementById('courses-button-m').addEventListener('click', changeMenuCourse);
