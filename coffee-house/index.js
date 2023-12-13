const slider = document.querySelector(".slider-ul");
const rightBtn = document.querySelector(".button-right");
const leftBtn = document.querySelector(".button-left");
const slides = Array.from(slider.children);
const track = document.querySelector(".controls");
const controls = Array.from(track.children);
const menuBtn = document.querySelector(".menu-btn");
const menuLink = document.querySelector(".mn-link");
const backToHome = document.querySelector(".back-to-home");
const coffee = document.querySelector(".coffee-btn");
const tea = document.querySelector(".tea-btn");
const dessert = document.querySelector(".dessert-btn");

console.log(controls);

// Move right

document.addEventListener("DOMContentLoaded", () => {
    rightBtn.addEventListener("click", () => {
        const current = document.querySelector('.current');
        const next = current.nextElementSibling;
        const move = next.style.left;

        slider.style.transform = `translateX(-${move})`;
        console.log(move);
        current.classList.remove('current');
        next.classList.add("current");

        
        controls[slides.indexOf(current)].classList.remove('current-btn');
        controls[slides.indexOf(next)].classList.add('current-btn');
    })
})

// Move left

document.addEventListener("DOMContentLoaded", () => {
    leftBtn.addEventListener("click", () => {
        const current = document.querySelector('.current');
        const prev = current.previousElementSibling;
        const move = prev.style.left;

        console.log(move);
        if (current === slides[2]) {
            slider.style.transform = `translateX(-${move})`;
        } else if (current === slides[1]) {
            slider.style.transform = `translateX(0rem)`;
        }

        current.classList.remove('current');
        prev.classList.add("current");


        controls[slides.indexOf(current)].classList.remove('current-btn');
        controls[slides.indexOf(prev)].classList.add('current-btn');
    })

    // Menu page
    function hide() {
        document.querySelector('main').classList.add('hide');
        document.querySelector('.about').classList.add('hide');
        document.querySelector('.mobile').classList.add('hide');
        document.querySelector('.hero').classList.add('hide');

        l = ['main', '.about', '.mobile', '.hero'];

        l.forEach(element => {
            document.querySelector(`${element}`).addEventListener('transitionend', () => {
                document.querySelector(`${element}`).style.display = 'none';
            });
        });
        document.querySelector('.show').style.display ='block';
        void document.querySelector('.show').offsetWidth;
        document.querySelector('.show').style.opacity = '1';

        document.querySelector("title").innerHTML = "Menu";
    }


    menuLink.addEventListener('click', hide);
    menuBtn.addEventListener('click', hide);
    
    btns = [coffee, dessert, tea];
    btns.forEach(element => {
        element.addEventListener('click', () => {
            document.querySelector('.pressed').classList.remove('pressed');
            element.classList.add('pressed');
        })
    })
    
})
