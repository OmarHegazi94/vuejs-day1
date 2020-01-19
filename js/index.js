vm = new Vue({
    el: "#main",
    data: {
        courses: [
            {
                courseImg: '../img/angular.jpg',
                courseName: 'Angular',
                category: 'web development',
                price: 50,
                students: 10,
                hasStarted: true,
                inSale:true
            },
            {
                courseImg: '../img/css.jpg',
                courseName: 'CSS',
                category: 'web design',
                price: 20,
                students: 2,
                hasStarted: false,
                inSale:true
            },
            {
                courseImg: '../img/html.png',
                courseName: 'HTML',
                category: 'web design',
                price: 30,
                students: 5,
                hasStarted: true,
                inSale:false
            },
            {
                courseImg: '../img/js.jpg',
                courseName: 'JS',
                category: 'web development',
                price: 100,
                students: 50,
                hasStarted: true,
                inSale:false
            },
            {
                courseImg: '../img/mongodb.jpg',
                courseName: 'Mongodb',
                category: 'Database',
                price: 30,
                students: 5,
                hasStarted: false,
                inSale:false
            },
            {
                courseImg: '../img/node.jpg',
                courseName: 'NodeJS',
                category: 'web development',
                price: 100,
                students: 50,
                hasStarted: false,
                inSale:false
            }
        ],
        studentCourses: []
    }
});