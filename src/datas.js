let xAxisData = [
    { "name": "jan", "sale": 100 },
    { "name": "Feb", "sale": 200 },
    { "name": "Mar", "sale": 300 },
    { "name": "Apr", "sale": 400 },
    { "name": "May", "sale": 200 },
    { "name": "Jun", "sale": 200 },
    { "name": "Jul", "sale": 200 },
    { "name": "Agu", "sale": 200 },
    { "name": "Sep", "sale": 200 },
    { "name": "Oct", "sale": 200 },
    { "name": "Nov", "sale": 200 },
    { "name": "Dev", "sale": 300 },
]
let newMembers = [
    {
        id: 1, username: "amir",
        title: 'hacker',
        img: '/images/account.jpg'
    },
    {
        id: 2, username: "reza",
        title: 'WebDeveloper',
        img: '/images/account.jpg'
    },
    {
        id: 3, username: "ali",
        title: 'seo',
        img: '/images/account.jpg'
    },
    {
        id: 4, username: "hossein",
        title: 'back end',
        img: '/images/account.jpg'
    },
]
const transactions = [
    {
        id: 1,
        customer: 'amirkhoshnam',
        data: ' 14 jun 2022',
        amount: 120,
        status: 'Decline',
        img: '/images/account.jpg'
    },
    {
        id: 2,
        customer: 'iman Fatahi',
        data: ' 22 jun 2022',
        amount: 200,
        status: 'Approved',
        img: '/images/account.jpg'
    },
    {
        id: 3,
        customer: 'reza alidoust',
        data: ' 23 jun 2022',
        amount: 180,
        status: 'Pending',
        img: '/images/account.jpg'
    },
    {
        id: 4,
        customer: 'ati khoshnam',
        data: ' 18 jun 2022',
        amount: 150,
        status: 'Approved',
        img: '/images/account.jpg'
    },
]
let userRows = [
    {
        id: 1,
        username: 'seyed khoshnam',
        avatar: '/images/account.jpg',
        status: 'active',
        transaction: '$222.36',
        email: 'seyed@gmail.com'
    },
    {
        id: 2,
        username: 'amir khoshnam',
        avatar: '/images/account.jpg',
        status: 'active',
        transaction: '$122.36',
        email: 'amir@gmail.com'
    },
    {
        id: 3,
        username: 'reza khoshnam',
        avatar: '/images/account.jpg',
        status: 'non-active',
        transaction: '$182.36',
        email: 'reza@gmail.com'
    },
    {
        id: 4,
        username: 'iman khoshnam',
        avatar: '/images/account.jpg',
        status: 'active',
        transaction: '$922.36',
        email: 'iman@gmail.com'
    },
]
let productss = [
    {
        id: '1',
        title: "asus",
        avatar: "/images/account.jpg",
        price: 12.200
    },
    {
        id: '5',
        title: "dell",
        avatar: "/images/account.jpg",
        price: 52.200
    },
    {
        id: '3',
        title: "canon",
        avatar: "/images/account.jpg",
        price: 100.200
    },
    {
        id: '4',
        title: "iphon",
        avatar: "/images/account.jpg",
        price: 19.200
    },
]
const produtData = [
    {
        name: 'jun',
        sales: 400
    },
    {
        name: 'feb',
        sales: 300
    },
    {
        name: 'mar',
        sales: 500
    },
]
export { xAxisData, newMembers, transactions, userRows, productss,produtData }