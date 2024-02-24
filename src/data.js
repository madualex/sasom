import { SiOpenaigym } from 'react-icons/si'

import aboutImg1 from './images/sasom-consult.png'
import aboutImg2 from './images/sasom-it.png'
import aboutImg3 from './images/sasom-cloud.png'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "Services",
        path: '/'
    },
    {
        name: "Products",
        path: '/'
    },
    {
        name: "About Us",
        path: '/about'
    },
]



export const programs = [
    {
        id: 1,
        icon: aboutImg1,
        title: "IT Consulting",
        info: "Unleash Your Business Potential with Strategic IT Consulting. We align technology with your goals, optimizing infrastructure, enhancing efficiency, and driving innovation",
        isConsult: true,
        isIT: false,
        isCloud: false
    },
    {
        id: 2,
        icon: aboutImg2,
        title: "Expertly Managed IT Solutions",
        info: "We take care of your IT so you can focus on your business. Our managed services offer proactive monitoring, security, maintenance, and support, ensuring smooth operations for your team.",
        isConsult: false,
        isIT: true,
        isCloud: false
    },
    {
        id: 3,
        icon: aboutImg3,
        title: "Cloud Solutions",
        info: "Embrace scalable, flexible cloud computing. Our end-to-end solutions include migration, deployment, and management, empowering reliable, cost-effective infrastructure.",
        isConsult: false,
        isIT: false,
        isCloud: true
    },
]





export const values = [
    {
        id: 1,
        icon: aboutImg1,
        title: "Value One",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 2,
        icon: aboutImg2,
        title: "Value Two",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 3,
        icon: aboutImg3,
        title: "Value Three",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Four",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    }
]





export const faqs = [
    {
        id: 1,
        number: "01",
        question: "Managed IT Services",
        answer: "Optimize Your Business with Hassle-free Managed IT Services: We'll take care of your tech needs, keep you safe from threats, and ensure smooth operations. Our expert team will proactively monitor your systems, provide timely support, and safeguard your valuable data. With our reliable managed services, you can focus on your core business while we handle your IT seamlessly."
    },
    {
        id: 2,
        number: "02",
        question: "Network Infrastructure Design and Implementation",
        answer: "Optimize Your Business with Hassle-free Managed IT Services: We'll take care of your tech needs, keep you safe from threats, and ensure smooth operations. Our expert team will proactively monitor your systems, provide timely support, and safeguard your valuable data. With our reliable managed services, you can focus on your core business while we handle your IT seamlessly."
    },
    {
        id: 3,
        number: "03",
        question: "Cloud Computing Solutions",
        answer: "Optimize Your Business with Hassle-free Managed IT Services: We'll take care of your tech needs, keep you safe from threats, and ensure smooth operations. Our expert team will proactively monitor your systems, provide timely support, and safeguard your valuable data. With our reliable managed services, you can focus on your core business while we handle your IT seamlessly."
    },
    {
        id: 4,
        number: "04",
        question: "Cybersecurity Services",
        answer: "Optimize Your Business with Hassle-free Managed IT Services: We'll take care of your tech needs, keep you safe from threats, and ensure smooth operations. Our expert team will proactively monitor your systems, provide timely support, and safeguard your valuable data. With our reliable managed services, you can focus on your core business while we handle your IT seamlessly."
    },
    {
        id: 5,
        number: "05",
        question: "Web and Mobile Application Development",
        answer: "Optimize Your Business with Hassle-free Managed IT Services: We'll take care of your tech needs, keep you safe from threats, and ensure smooth operations. Our expert team will proactively monitor your systems, provide timely support, and safeguard your valuable data. With our reliable managed services, you can focus on your core business while we handle your IT seamlessly."
    },
    {
        id: 6,
        number: "06",
        question: "IT Consulting and Strategy",
        answer: "Optimize Your Business with Hassle-free Managed IT Services: We'll take care of your tech needs, keep you safe from threats, and ensure smooth operations. Our expert team will proactively monitor your systems, provide timely support, and safeguard your valuable data. With our reliable managed services, you can focus on your core business while we handle your IT seamlessly."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]