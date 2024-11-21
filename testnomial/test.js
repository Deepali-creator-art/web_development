const language=[
    {
        lang_img:"c1.jpeg",
        lang_info:"C++ is a cross-platform language that can be used \
        to create high-performance applications.\
        C++ was developed by Bjarne Stroustrup, as an extension to the C language.\
        C++ gives programmers a high level of control over system resources and memory.\
        The language was updated 5 major times in 2011, 2014, 2017, 2020, and 2023 to C++11, C++14, C++17, C++20, and C++23.",
        lang_name:'C++'
    },
    {
        lang_img:"j1.png",
        lang_info:"Java is a popular, high-level, object-oriented programming language that's used to code a variety of applications, including: web applications, mobile apps, enterprise software, big data applications, and server-side technologies.",
        lang_name:"JAVA"
    },
    {
        lang_img:"p1.jpeg",
        lang_info:"Python is a general-purpose, high-level programming language that is used for a variety of purposes, including data science, machine learning, web applications, and software development.",
        lang_name:"PYTHON"
    }
];

const img1=document.querySelector("img");
const para1=document.querySelector("p");
const header1=document.querySelector("h3");
let count=0;
function updateinfo(){
    const {lang_img,lang_info,lang_name}=language[count];
    img1.src=lang_img;
    para1.textContent=lang_info;
    header1.textContent=lang_name;
    count++;
    if(count==language.length){
        count=0
    }
    setTimeout(updateinfo,2000);
}
updateinfo();