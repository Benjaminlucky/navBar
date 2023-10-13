// classlist - show/gets all classes
// contains - checks classlist for specific class
// add - add class
// remove - remove class
// toggle - toggle class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    const classlist = links.classList;
    if(classlist.contains('show-links')){
        classlist.remove('show-links');
    }else{
        classlist.add('show-links');
    }
});