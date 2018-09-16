// Constants 
const EN = 0;
const PT = 1;
const menu = [
    {
        "about": "ABOUT"
    },
    {
        "about": "SOBRE"
    }
];
const text = [
    {
        "age": "I'm 22 years old.",
        "student": "Student of ",
        "course": "Computer Engineering at UFRGS",
        "working": "Currently working as a ",
        "job": "Back-End developer",
        "using": " using ",
        "tech": "Java 10",
        "activity": " to build microservices",
        "ide": "Co-founder of Empresa Júnior IDE.",
        "info": "For more information:" 
    },
    {
        "age": "Eu tenho 22 anos de idade.",
        "student": "Estudante de ",
        "course": "Engenharia da Computação na UFRGS",
        "working": "Atualmente trabalhando como ",
        "job": "desenvolverdor Back-End",
        "using": " utilizando ",
        "tech": "Java 10",
        "activity": " para construção de micro serviços",
        "ide": "Co fundador da Empresa Júnior IDE.",
        "info": "Para mais informações:" 
    }
];
// Functions
function showMenu(){
    const button = document.getElementById('dropdown-menu');
    const links  = document.getElementById('links');

    if(links.classList.contains('hidden')){
        links.classList.remove('hidden');
    } else {
        links.classList.add('hidden');
    }
}
document.getElementById('dropdown-menu').addEventListener('click',showMenu);

function changeLanguage(){
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
document.getElementById('en').addEventListener('click',changeLanguage);
document.getElementById('en-m').addEventListener('click',changeLanguage);
document.getElementById('pt').addEventListener('click',changeLanguage);
document.getElementById('pt-m').addEventListener('click',changeLanguage);

// Function for change HTML tags content
function changeTexts(menu,texts){
    for(var i in menu){
        var elements = Array.from(document.getElementsByClassName(i));
        elements.forEach((el) => {
            el.innerHTML = menu[i];
        });
    }
    for(var i in texts){
        document.getElementById(i).innerHTML = texts[i];
    }
}