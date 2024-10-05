const navBar = document.querySelector('.nav-bar');
const navLeft = document.querySelector('.navLeft');
const remove = document.querySelector('.remove');

navBar.addEventListener('click', function(){
    navLeft.style.visibility = 'visible';
    remove.style.display = 'block';
    navBar.style.display = 'none';
})

remove.addEventListener('click', function(){
    navLeft.style.visibility = 'hidden';
    remove.style.display = 'none';
    navBar.style.display = 'block';
})
