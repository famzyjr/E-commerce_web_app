const homes = document.querySelectorAll('.Home');


homes.forEach(items =>{
items.addEventListener('click',function() {
homes.forEach(links => links.classList.remove('active'));
items.classList.add('active');
});

})



// navItems.forEach(item => {
//             item.addEventListener('click',
//                 function () {
//                     navItems.forEach(navItem => navItem
//                         .classList.remove('active'));
//                     this.classList.add('active');
//                 });
//         });
    