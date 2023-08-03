import { FaReact, FaAws, FaNodeJs, FaDocker, FaGit, FaGitAlt, FaGitSquare, FaGithub} from "react-icons/fa"
import {BiLogoMongodb} from "react-icons/bi"
import {AiFillApi} from "react-icons/ai"
import {DiMysql} from "react-icons/di"
import {SiExpress} from "react-icons/si"
import { SkillLevelList } from "./utils/constants";
import * as twColors from "tailwindcss/colors";

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

    profession: ["Swimmer","Jr. Full-Stack Developer", "Jr. Cloud Engineer", "Jr. Software Architect","Entrepreneur","Blogger"],
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
    skills: [{
        skillName: "React",
        skillMeterNumber: SkillLevelList.Intermediate,
        description: "React, açık kaynaklı bir JavaScript kütüphanesidir. Kullanıcı arayüzleri oluşturmak için kullanılır ve etkileşimli, dinamik web uygulamalarının geliştirilmesini sağlar.",
        Icon: FaReact,
        iconColor: twColors.cyan[300],
    },{
        skillName: "AWS",
        skillMeterNumber: SkillLevelList.Begineer,
        description: "Amazon Web Services, bulut tabanlı hizmetler sağlayan ve sunan bir platformdur. Birçok farklı hizmeti içerir, örneğin sunucu barındırma, veritabanı yönetimi, depolama ve yapay zeka gibi çeşitli hizmetler sunar.",
        Icon: FaAws,
        iconColor: twColors.indigo[900]
    },{
        skillName: "MongoDB",
        skillMeterNumber: SkillLevelList.Begineer,
        description: "NoSQL veritabanıdır. JSON benzeri dokümanları kullanarak verileri depolar ve veri tabanı işlemleri için kullanılan popüler bir teknolojidir.",
        Icon: BiLogoMongodb,
        iconColor: twColors.green[300]
    },{
        skillName: "Node JS",
        skillMeterNumber: SkillLevelList.Intermediate,
        description: "JavaScript tabanlı bir platformdur ve sunucu tarafında uygulama geliştirmek için kullanılır. ",
        Icon: FaNodeJs,
        iconColor: twColors.green[600]
    },{
        skillName: "Express JS",
        skillMeterNumber: SkillLevelList.Intermediate,
        description: "Node.js tabanlı, minimalist ve hızlı bir web uygulama çerçevesidir. Web sunucularını ve RESTful API'leri oluşturmak için kullanılır ve Node.js ile birlikte sıkça kullanılır.",
        Icon: SiExpress,
        iconColor: twColors.red[600]
    },{
        skillName: "Docker",
        skillMeterNumber: SkillLevelList.Intermediate,
        description: "Yazılımları konteynerlar halinde çalıştırmak için kullanılan bir platformdur. Uygulamaları bağımsız ve taşınabilir hale getirir, böylece farklı ortamlarda kolayca dağıtılabilirler.",
        Icon: FaDocker,
        iconColor: twColors.blue[300]
    },{
        skillName: "REST API",
        skillMeterNumber: SkillLevelList.Intermediate,
        description: "Representational State Transfer, web servislerini temsil eden ve uygulama programlama arayüzleri (API'ler) olarak kullanılan bir mimaridir. HTTP protokolüne dayalı olarak çalışır ve web uygulamaları arasında veri alışverişini sağlar.",
        Icon: AiFillApi,
        iconColor: twColors.amber[300]
    },{
        skillName: "MySQL",
        skillMeterNumber: SkillLevelList.Intermediate,
        description: "İlişkisel veritabanı yönetim sistemi (RDBMS) olan MySQL, verileri tablolar ve ilişkiler aracılığıyla depolar. Web siteleri ve uygulamalarda veri depolama ve yönetiminde sıkça kullanılır.",
        Icon:DiMysql ,
        iconColor: twColors.blue[300]
    },{
        skillName: "Github/Git",
        skillMeterNumber: SkillLevelList.Intermediate,
        description: "Git dağıtık bir sürüm kontrol sistemi olarak kullanılan yazılım aracıdır. Programcılar, yazılım projelerini takip etmek, değişiklikleri yönetmek, işbirliği yapmak ve geri almak gibi işlemleri kolayca yapabilmek için Git'i kullanır. Proje dosyalarının tüm geçmişini ve değişikliklerini takip ederek, ekibiyle birlikte koordineli bir şekilde çalışmayı sağlar ve hataları düzeltmek veya eski sürümlere dönmek için büyük kolaylık sağlar. GitHub, yazılım geliştiricilerin Git tabanlı projelerini barındırıp yönetebileceği bir platformdur.",
        Icon:FaGithub ,
        iconColor: twColors.black
    }]
}