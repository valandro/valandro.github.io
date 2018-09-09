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