import React from "react";
import newsLetterImage from "./../assets/news.PNG";
import flexboxImage from "./../assets/proj3.PNG";
import todoImage from "./../assets/todo.PNG";
import keeperImage from "./../assets/keeper.PNG";
import momListImage from "./../assets/momList.PNG";
import portfolioImage from "./../assets/portfolio.PNG";
import rpaImage from "./../assets/rpa.PNG";
import textclass from "./../assets/textclass.png";


const projectsData = [
    {
        projectName: 'The NewsLetter!',
        projectDescription:
            'The Art of Coding Newsletter where subscribed users will get monthly notifications of various courses,events,live sessions etc. Tools: HTML, CSS, NodeJS, Express, Mailchimp API',
        imageUrl: newsLetterImage,
        sourceCode:
            'https://github.com/ribhu0908/Art-of-coding--singup',
        projectUrl: 'https://serene-mesa-26457.herokuapp.com/',
    },
    {
        projectName: 'Scopus Automation Research!',
        projectDescription:
            'Automated the Scopus website using RPA to prevent repetitive tasks of researchers, and served as a great assistant. Published in: International Journal of Disaster Recovery and Business Continuity',
        imageUrl: rpaImage,
        sourceCode:
            'http://sersc.org/journals/index.php/IJDRBC/article/view/32882/18136',
        projectUrl: 'http://sersc.org/journals/index.php/IJDRBC/article/view/32882',
    },
    {
        projectName: 'Custom ToDo!',
        projectDescription:
            'This is a Full Stack Customized ToDoList Web app, where you can manage multiple customized todolists like office, work, workout todolists etc.Tools: EJS, NodeJS, Express, MongoDB ',
        imageUrl: todoImage,
        sourceCode:
            'https://github.com/ribhu0908/Customized-ToDoList',
        projectUrl: 'https://dry-spire-42299.herokuapp.com/',
    },
    {
        projectName: 'Keeper App!',
        projectDescription:
            "Notes keeping App Interface,where you can add all your important note pointers and delete them as and when required.Tools: React JS, Material UI.",
        imageUrl: keeperImage,
        sourceCode:
            'https://github.com/ribhu0908/Notes-Keeping-App',
        projectUrl: 'https://byp8h.codesandbox.io/',
    },

    {
        projectName: 'Moms Grossery List!',
        projectDescription:
            'As a developer/designer, you should definitely make a simple GrosseryList App for your mom with a beutiful UI. Tools: React JS',
        imageUrl: momListImage,
        projectUrl: 'https://m21g9.codesandbox.io/',
        sourceCode: 'https://github.com/ribhu0908/Grossery-List-forMom',
    },

    {
        projectName: 'Text classification Model!',
        projectDescription:
            'Text classification ML Model, has been tested on 20k newspaper data using Multinomial Naive Bayes. It is absolutely coded from scratch using Python, no sklearn library.',
        imageUrl: textclass,
        projectUrl: 'https://github.com/ribhu0908/Text-Classification',
        sourceCode: 'https://github.com/ribhu0908/Text-Classification',
    },

    {
        projectName: 'Flexbox Cheatsheet!',
        projectDescription:
            'A frontend web developer must know the concepts of CSS Flexbox. So here is a CSS Flexbox cheatsheet, built using CSS Flexbox. Tools: HTML, CSS, Flexbox',
        imageUrl: flexboxImage,
        sourceCode:
            'https://github.com/ribhu0908/flexbox-cheatsheet/tree/master',
        projectUrl: 'https://ribhu0908.github.io/flexbox-cheatsheet/',
    },
    
    {
        projectName: 'Portfolio Website!',
        projectDescription:
            'My very own Portfolio website, which you are viewing right now! Tools: React JS(React hooks,routes,portals,CSS)',
        imageUrl: portfolioImage,
        sourceCode: 'https://github.com/ribhu0908/Portfolio/tree/master',
    },
];

export default projectsData;