

export default {
    personal: {
        name: "Kürşat",
        surname: "Korkmaz",
        get fullname() {
            return this.name + " " + this.surname
        },
        birthDay: 2001,
        get age(){
            const currentYear = new Date().getFullYear();
            return currentYear - this.birthDay;
        },
    },

    profession: ["Swimmer","Full-Stack Developer", "Cloud Engineer","Entrepreneur","Blogger"],
    biography: "My name is Kürşat Korkmaz who developed a keen interest in computer science. I am passionate about my profession, constantly improving my skills and taking pleasure in crafting solutions to various challenges.",
    university: {
        name: " Ankara Yildirim Beyazit University",
        degree: "Bachelor",
        study: "Computer Engineering",
    },
    contact: {
        mail: "kursat.korkmaz123@hotmail.com",
        phone: "0551 033 6163"
    },
    cv: "/cv",

    
    
}