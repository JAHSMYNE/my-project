/* navbar start */

const hamburger  = document.querySelector(".hamburger");
const navMenu  = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() =>{
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
})

/* navbar end */



/* quote start */
// let btn = document.getElementById('btn');
// let output = document.getElementById('output')
// let quotes = [
// "'When the going gets tough, the tough get going' -Joe Kennedy'",
// " 'Opportunities don’t happen, you create them.' -Chris Grossern",
// "'To accomplish great things, we must not only act, but also dream, not only plan, but also believe.' -Anatole France ",
// " 'Good things come to people who wait, but better things come to those who go out and get them.' -Anonymous "

    
// ]


// btn.addEventListener('click',functiion(){
//     setInterval (functiion(){
//         var xy= quotes[Math.floor(Math.random() * quotes.length)]',';
//         output.innerHtml = xy
//     },2000)
// })
 
/* quote end */