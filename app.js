/* Button dark mode*/

const btnDarkMode = document.querySelector(".btnDarkMode");
let btnDarkModeStatus = false;
let colorCss = document.querySelector(":root")



btnDarkMode.addEventListener('click', changeDarkMode)

function changeDarkMode(){
    
    if (btnDarkModeStatus== false){
        colorCss.style.setProperty('--main-color', '#fff');
        colorCss.style.setProperty('--second-color', '#3c3c3c');
        colorCss.style.setProperty('--third-color', '#2CDB5E');
        btnDarkModeStatus = true;
        btnDarkMode.firstElementChild.classList.remove("fa-moon");
        btnDarkMode.firstElementChild.classList.add("fa-sun")
    }else{
        colorCss.style.setProperty('--main-color', '#3c3c3c');
        colorCss.style.setProperty('--second-color', '#fff');
        colorCss.style.setProperty('--third-color', '#FF4D4D');
        btnDarkModeStatus = false;
        btnDarkMode.firstElementChild.classList.remove("fa-sun");
        btnDarkMode.firstElementChild.classList.add("fa-moon");
    }
}   