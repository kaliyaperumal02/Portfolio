let home=document.getElementById("home")
let about=document.getElementById("about")
let skills=document.getElementById("skills")
let projects=document.getElementById("projects")
let contact=document.getElementById("contact")
home.style.color="#00eaff"

home.addEventListener("click",() =>{
    home.style.color="#00eaff"
    about.style.color="#fff"
    skills.style.color="#fff"
    projects.style.color="#fff"
    contact.style.color="#fff"
})
about.addEventListener("click",() =>{
    home.style.color="#fff"
    about.style.color="#00eaff"
    skills.style.color="#fff"
    projects.style.color="#fff"
    contact.style.color="#fff"
})
skills.addEventListener("click",() =>{
    home.style.color="#fff"
    about.style.color="#fff"
    skills.style.color="#00eaff"
    projects.style.color="#fff"
    contact.style.color="#fff"
})
projects.addEventListener("click",() =>{
    home.style.color="#fff"
    about.style.color="#fff"
    skills.style.color="#fff"
    projects.style.color="#00eaff"
    contact.style.color="#fff"
})
contact.addEventListener("click",() =>{
    home.style.color="#fff"
    about.style.color="#fff"
    skills.style.color="#fff"
    projects.style.color="#fff"
    contact.style.color="#00eaff"
})