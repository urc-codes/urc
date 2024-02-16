import { benedicta, fatima, gabby, john, malik, obed } from "@/public/images";

const teamsprofiles = [
    {
        id:'1',
        name:'Software Team',
        description:"We translate a projects goals into a functional user experience, to analysing, evaluating and enhancing them over time.",
        svg_icon:"M43.0188 20.5H63.9812V40H43.0188V20.5ZM43.0188 59.5H63.9812V79H43.0188V59.5ZM63.9812 1H84.9438V20.5H63.9812V1ZM84.9438 20.5H105.906V40H84.9438V20.5ZM22.0563 1H43.0188V20.5H22.0563V1ZM63.9812 40H84.9438V59.5H63.9812V40ZM22.0563 40H43.0188V59.5H22.0563V40ZM1.09375 20.5H22.0563V40H1.09375V20.5Z"
    },
    {
        id:'2',
        name:'Hardware & Prototyping Team',
        description:'We oversee the design and  installation of hardware components to develop a product',
        svg_icon:"M13.0776 75.2172C12.5608 76.1231 11.0895 76.266 9.79138 75.5212L1.66546 70.8958C0.373457 70.1586 -0.257343 68.8256 0.260977 67.9212L34.8212 13.1358C39.7916 5.10112 22.418 5.80944 18.1529 8.17456C21.3783 2.39096 31.6581 0.48184 38.3248 0L40.2643 0.12616C44.0324 2.00336 49.436 4.81992 52.9974 7.182C55.6133 11.2906 58.3721 13.4535 62.2785 13.4429C67.3766 17.3493 59.4133 28.006 54.4034 23.0706C54.4307 20.6325 47.3567 14.3245 42.4015 19.5214L13.0776 75.2172Z"
    },
    {
        id:'3',
        name:'3D Modelling Team',
        description:'We design 3D models using CAD software during project development to 3D print certain parts.',
        svg_icon:"M23.6796 16.5539L1.61791 8.28068L23.8661 0.386108L45.8582 8.43216L23.6794 16.5539H23.6796ZM25.1171 35.7633C29.8315 34.2696 34.6024 34.4549 39.0123 35.9703L47.5397 19.4774V10.8908L25.1171 19.102V35.7633ZM63.8009 0.640366L63.8408 66.9752L92 55.0578L63.8009 0.640546V0.640366ZM41.6724 37.1115C47.3581 40.264 51.6152 44.8629 52.2587 51.7758C51.8136 57.0281 49.6475 61.8608 46.0444 65.5521C42.1878 69.5031 36.9802 71.7693 31.7574 71.7693C26.4967 71.7693 21.2615 69.847 17.3939 66.4955C13.4148 63.0473 11.2091 58.4252 11.1706 53.4681C11.3485 46.4136 14.5177 40.6699 22.23 36.9162V19.0934L0 10.7573V40.2273L12.0671 45.7383C9.73116 49.3678 8.37523 53.6881 8.37523 58.3253C8.37523 71.1873 18.802 81.614 31.664 81.614C42.5482 81.614 51.6875 74.1471 54.2412 64.0568L60.5689 66.9756L60.5288 0.640726L41.6724 37.1119V37.1115Z"
    },
    {
        id:'4',
        name:'Research & Pitching Team',
        description:'We collect information to assist in the development and design of projects.',
        svg_icon:"M0.333252 3.50004C0.333252 2.66019 0.666882 1.85473 1.26075 1.26087C1.85461 0.667004 2.66007 0.333374 3.49992 0.333374H60.4999C61.3398 0.333374 62.1452 0.667004 62.7391 1.26087C63.333 1.85473 63.6666 2.66019 63.6666 3.50004C63.6666 4.33989 63.333 5.14535 62.7391 5.73921C62.1452 6.33308 61.3398 6.66671 60.4999 6.66671V41.5C60.4999 42.3399 60.1663 43.1453 59.5724 43.7392C58.9786 44.3331 58.1731 44.6667 57.3333 44.6667H42.7254L47.6718 59.4994C47.9371 60.2964 47.8751 61.1662 47.4991 61.9174C47.1232 62.6687 46.4643 63.2398 45.6673 63.5052C44.8702 63.7706 44.0004 63.7085 43.2492 63.3326C42.498 62.9567 41.9268 62.2977 41.6614 61.5007L36.0533 44.6667H27.9529L22.3416 61.5007C22.0762 62.2977 21.5051 62.9567 20.7538 63.3326C20.0026 63.7085 19.1328 63.7706 18.3358 63.5052C17.5387 63.2398 16.8798 62.6687 16.5039 61.9174C16.1279 61.1662 16.0659 60.2964 16.3313 59.4994L21.2744 44.6667H6.66659C5.82673 44.6667 5.02128 44.3331 4.42741 43.7392C3.83355 43.1453 3.49992 42.3399 3.49992 41.5V6.66671C2.66007 6.66671 1.85461 6.33308 1.26075 5.73921C0.666882 5.14535 0.333252 4.33989 0.333252 3.50004ZM30.5908 13.532C30.1139 13.2139 29.5595 13.0311 28.9869 13.0033C28.4143 12.9755 27.8448 13.1036 27.3393 13.3741C26.8338 13.6446 26.4112 14.0472 26.1166 14.539C25.8221 15.0308 25.6665 15.5934 25.6666 16.1667V28.8334C25.6665 29.4067 25.8221 29.9692 26.1166 30.4611C26.4112 30.9529 26.8338 31.3555 27.3393 31.626C27.8448 31.8964 28.4143 32.0246 28.9869 31.9968C29.5595 31.969 30.1139 31.7862 30.5908 31.468L40.0908 25.1347C40.5245 24.8455 40.8801 24.4537 41.126 23.9941C41.3719 23.5345 41.5006 23.0213 41.5006 22.5C41.5006 21.9788 41.3719 21.4656 41.126 21.006C40.8801 20.5463 40.5245 20.1546 40.0908 19.8654L30.5908 13.532ZM32.6238 22.5L31.9999 22.9149V22.0884L32.6238 22.5032V22.5Z"
    }
];

const numbersofclubs = [
    {
        id:'1',
        name:'Members',
        totalNumbers:'23',
    },
    {
        id:'2',
        name:'Projects',
        totalNumbers:'25',
    },
    {
        id:'3',
        name:'Awards',
        totalNumbers:'50'
    }
]
const executivesprofiles =[
    {
        id:'1',
        fullname:'Gabriel Kofi Kuwuamenu',
        level:"400",
        portfolio:'President',
        program:'Computer Engineering',
        image:gabby,
    },
    {
        id:'2',
        fullname:'Abdul Malik Kamatey Yussif',
        level:'400',
        portfolio:'Vice President',
        program:'Computer Engineering',
        image:malik,
    },
    {
        id:'3',
        fullname:'Benedicta Abla Atchu',
        level:'400',
        portfolio:'General Secretary',
        program:'Electrical & Electronic Engineering',
        image:benedicta,
    },
    {
        id:'4',
        fullname:'Fatima Zakaria',
        level:'300',
        portfolio:'Financial Secretary',
        program:'Electrical & Electronic Engineering',
        image:fatima,
    },
    {
        id:'5',
        fullname:'Philemon Obed Obeng',
        level:'300',
        portfolio:'Project Manager',
        program:'Electrical & Electronic Engineering',
        image:obed,
    },
    {
        id:'6',
        fullname:'John Condatere',
        level:'300',
        portfolio:'Organizer',
        program:'Electrical & Electronic Engineering',
        image:john,
    },
    
]

export {teamsprofiles, numbersofclubs, executivesprofiles}