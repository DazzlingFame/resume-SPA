import {TextWithTranslation} from "./utils/localisation";

import allure from './assets/images/allure.jpg'
import aboutMePhoto from './assets/images/about-me-photo.jpg'
import workPhoto from './assets/images/work-photo.jpg'
import contactsPhoto from './assets/images/contacts-photo.jpg'
import shivaPhoto from './assets/images/shiva-min.jpg'
import warhammerPhoto from './assets/images/warhammer-min.jpg'
import bicyclePhoto from './assets/images/bicycle-min.jpg'
import vkLogo from './assets/images/vk-64x64.png'
import phoneLogo from './assets/images/phone-64x64.png'
import telegramLogo from './assets/images/telegram-64x64.png'
import instagramLogo from './assets/images/instagram.png'
import githubLogo from './assets/images/github.png'
import ordersMapPhoto from './assets/images/map-photo.png'
import dlims from './assets/images/dlims-photo.png'
import e2eStep from './assets/images/e2e-step-def.png'

export type ImageSource = {
    source: string;
    desc: string;
}

export const Images: Record<string, ImageSource> = {
    ALLURE_IMG: {
        source: allure, desc: 'allure'
    },
    E2E_STEP_IMG: {
        source: e2eStep, desc: 'e2eStep'
    },
    ORDERS_MAP_IMG: {
        source: ordersMapPhoto, desc: 'ordersMap'
    },
    DLIMS_IMG: {
        source: dlims, desc: 'subscriptions'
    },
    ABOUT_ME_IMG: {
        source: aboutMePhoto, desc: 'aboutMePhoto'
    },
    WORK_ME_IMG: {
        source: workPhoto, desc: 'workMePhoto'
    },
    CONTACTS_ME: {
        source: contactsPhoto, desc: 'contactsMePhoto'
    },
    SHIVA_IMG: {
        source: shivaPhoto, desc: 'shiva'
    },
    WARHAMMER_IMG: {
        source: warhammerPhoto, desc: 'warhammer'
    },
    BICYCLE_IMG: {
        source:bicyclePhoto , desc: 'bicycle'
    },
    VK_LOGO: {
        source: vkLogo, desc: 'vk_logo'
    },
    TELEGRAM_LOGO: {
        source: telegramLogo, desc: 'telegram_logo'
    },
    PHONE_LOGO: {
        source: phoneLogo, desc: 'phone_logo'
    },
    INSTAGRAM_LOGO: {
        source: instagramLogo, desc: 'instagram_logo'
    },
    GITHUB_LOGO: {
        source: githubLogo, desc: 'github_logo'
    }
};

export type HeaderLinksText = {
    work: string,
    about: string,
    contacts: string,
}

export type AboutTexts = {
    sectionName: string,
    header: string,
    text: string,
}

export type WorkTexts = {
    header: string;
    testing: WorkBlockTexts;
    development: WorkBlockTexts;
}

export type WorkBlockTexts = {
    header: string,
    mainData: string;
    skills: string;
}

export type MainTexts = {
    header: string;
    headerLinks: HeaderLinksText;
    welcome: string;
}

export type ContactsTexts = {
    header: string;
    name: string;
}

type MultiLanguageTexts = {
    mainTexts: TextWithTranslation<MainTexts>;
    aboutTexts: TextWithTranslation<AboutTexts>,
    workTexts: TextWithTranslation<WorkTexts>,
    contactsTexts: TextWithTranslation<ContactsTexts>,
}

export const multiLanguageTexts: MultiLanguageTexts = {
    mainTexts: {
        en: {
            header: 'Slava. K',
            headerLinks: {
                work: 'Work',
                about: 'About',
                contacts: 'Contacts',
            },
            welcome: 'Welcome to my resume',
        },
        ru: {
            header: 'Вячеслав. К',
            headerLinks: {
                work: 'Работа',
                about: 'Обо мне',
                contacts: 'Контакты',
            },
            welcome: 'Привет в моём резюме'
        }
    },
    aboutTexts: {
        en: {
            sectionName: 'About me',
            header: 'Hi, I’m Viacheslav Kolesnikov.',
            text: 'Currently I am a FrontEnd developer in the PROFI.RU customer service team. In my career, I went from a junior tester to Senior QA, and then,' +
                ' changing the track, became a React-Native and React developer. \n' +
                'I graduated from the "Research University of Moscow Institute of Electronic Technology"' +
                ' with a degree in Software Engineering. It was very interesting to study, we had courses on DBMS, software testing, algorithms, OOP and design patterns that' +
                ' really came in handy in my work. I love sports, cycling in the summer and snowboarding in the winter, it helps to keep fit and unload my head during hard work' +
                ' days. I also enjoy board games, participating in tournaments and decorating miniatures in the Warhammer 40k universe. "',        },
        ru: {
            sectionName: 'Обо мне',
            header: 'Привет, я Вячеслав Колесников.',
            text: 'В текущий момент я FrontEnd разработчик в команде клиентского сервиса PROFI.RU. В своей карьере я прошел путь от младшего специалиста ' +
                'по тестированию до Senior QA, а затем, сменив рельс, стал React-Native и React разработчиком. \n' +
                'Я закончил "Научно исследовательский университет Московский Институт Электронной ' +
                'Техники" по специальности "Программная инженерия. Учиться было очень интересно, у нас были курсы по СУБД, тестированию ПО, алгоритмам, ООП и паттернам проектирования, которые ' +
                'реально пригодились мне в работе.\n' +
                'В свободное время я люблю заниматься спортом, велосипедом летом и сноубордом зимой, это помогает поддерживать себя в форме и разгрузить голову в тяжелые рабочие дни. Так же я ' +
                'увлекаюсь настольными играми, участием в турнирах и художественным оформлением миниатюр в вселенной Warhammer 40k"',
        },
    },
    workTexts: {
        en: {
            header: 'Work',
            testing: {
                header: 'Testing',
                mainData: "In 2017 I graduated from the university and got a job at PROFI.RU as a junior " +
                    "testing specialist, in the future, leaving this position as a Senior QA. I joined the mobile development team and immediately got into work. The mentor quickly taught " +
                    "me how to use Jira as a task and bug tracker, I began to closely engage in functional testing, regression testing, writing test cases and checklists. \n" +
                    "The company had a positive attitude towards employee initiatives, and due to the specialty of the sprints, I started to have free time, and my team lead and I decided to " +
                    "try to automate some of the regressions. From university, I had Java programming skills and the first version of automation was implemented on the BDD framework JBehave, " +
                    "and then, after reflecting on the results, we decided to switch to JS and WebdriverIO. As a result, we have reduced the time for regression testing of both platforms of " +
                    "the mobile application in a team from 1-2 days to 4-6 hours.",
                skills: 'Skills: Agile, Scrum, Jira, BDD, Manual testing, Regression testing, Mobile testing, Automated testing, WDIO, WebdriverIO'
            },
            development: {
                header: 'Development',
                mainData: "I have been developing mobile and web applications since 2019. I originally started as a React-Native developer. My team and I worked on a new application for executors, " +
                    "which replaced old Kotlin and Swift applications. I have solved many tasks of transferring functionality to a new platform and improving it: creating the client side of " +
                    "filters for finding the necessary orders, a Cross-Sell system, in-app notifications, and many others. Over time, the company began to update the site for executors with " +
                    "the subsequent transition to React, in which I also take an active part. \n Now I am a developer at PROFI.RU, who is not afraid of new challenges and is always ready to learn.",
                skills: 'Skills: TypeScript, JavaScript, CSS, React, React-Native, Flow, Jira, Agile, Scrum'
            },
        },
        ru: {
            header: 'Работа',
            testing: {
                header: 'Тестирование',
                mainData: 'В 2017 году я закончил университет и устроился в PROFI.RU в качестве младшего специалиста по тестированию, ' +
                    'в будущем, покинув эту должность в качестве Senior QA. Я попал в команду мобильной разработки и сразу включился в работу. Ментор быстро научила меня пользоваться Jira в качестве таск и ' +
                    'баг трекера, я начал плотно заниматься функциональным тестированием задач, регрессионным тестированием, составлением тест кейсов и чеклистов. \n' +
                    'Компания положительно относилась к инициативам работников, а из-за особенностей спринтов у меня начало появляться свободное время, и мы с моим тимлидом приняли решение предпринять попытку ' +
                    'автоматизации части регрессов. С университета у меня были навыки программирования на Java и первая версия автоматизации была реализована на BDD фреймворке JBehave, а затем, порефлексировав ' +
                    'над результатами мы решили перейти на JS и WebdriverIO. В итоге мы сократили время регрессионного тестирования обеих платформ мобильного приложения в команде с 1-2 дней до 4-6 часов.',
                skills: 'Навыки: Agile, Scrum, Jira, BDD, Manual testing, Regression testing, Mobile testing, Automated testing, WDIO, WebdriverIO'
            },
            development: {
                header: 'Разработка',
                mainData: "Я занимаюсь разработкой мобильных и Web приложений с 2019 года. Изначально я начал как React-Native разработчик. Мы с командой трудились над новым приложением для " +
                    "специалистов, которое пришло на замену старых приложений на Kotlin и Swift. Я решил много задач по переносу функционала на новую платформу и его усовершенствованию: " +
                    "создание клиентской части фильтров для поиска нужных заказов, системы Cross-Sell, in-app уведомлений и многие другие. Со временем компания начала обновлять сайт для " +
                    "специалистов с последующим переходом на React, в чем я так же принимаю активное участие. \n" +
                    "Сейчас я developer в PROFI.RU, который не боится новых вызовов и всегда готов учиться.",
                skills: 'Навыки: TypeScript, JavaScript, CSS, React, React-Native, Flow, Jira, Agile, Scrum'
            },
        },
    },
    contactsTexts: {
        en: {
            header: 'Contacts',
            name: 'Viacheslav Kolesnikov',
        },
        ru: {
            header: 'Контакты',
            name: 'Вячеслав Колесников',
        }
    }
};
