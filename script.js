const moreBar = document.querySelector("#more-bars");
const searchBtn = document.querySelector('#search-bar');



moreBar.addEventListener('click', openMore);
searchBtn.addEventListener('click', openMoreForSearch);
window.addEventListener('onscroll', removeDev);

   

const navBar = document.querySelector('#nav-bar');
function openMore(e){
    e.preventDefault();
    
    //get particular value to interact
    navBar.classList.toggle('work');
    searchBar.classList.remove('work');
}
    

const searchBar = document.querySelector('#searchBar');
function openMoreForSearch(e){
    e.preventDefault();

    searchBar.classList.toggle('work');
    navBar.classList.remove('work');

}

function removeDev(){
    
    searchBar.classList.remove('work');
    navBar.classList.remove('work');
    console.log('JFJFJJFJFJF')
}


