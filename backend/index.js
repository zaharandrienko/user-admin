const Hapi = require('hapi');

// Create a server with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: 8000,
    routes: {
        "cors": true
    }
});

let userArray = [{
    id: "12434",
    firstname: "vahe",
    lastname: "haruytunyan",
    age: 33
},

{
    id: "738348",
    firstname: "zahar",
    lastname: "andrinko",
    age: 22
}]

// Add the route
server.route({
    method: 'GET',
    path: '/users',
    handler: function (request, h) {

        let f = request.query.firstname;
        let reqAge = request.query.age;
       

        if (f) {
            return  userArray.filter(user => user.firstname.includes(f));
        }
        if (reqAge) {
           return  userArray.filter(e => e.age > reqAge);
        }

        return userArray;

    }
});

server.route({
    method: 'GET',
    path: '/users/{id}',
    handler: function (request, h) {

        let pId = request.params.id;

        let filteredArray = userArray.filter(e => e.id === pId);

        return filteredArray[0];


    }
});

server.route({
    method: 'POST',
    path: '/users',
    handler: function (request, h) {

        return userArray.push(request.payload);
    }
});

server.route({
    method: 'DELETE',
    path: '/users/{id}',
    handler: function (request, h) {

        let pId = request.params.id;
        userArray  = userArray.filter(e => e.id !== pId);

        return "";
    }
});

server.route({
    method: 'PUT',
    path: '/users/{id}',
    handler: function (request, h) {
        let pId = request.params.id;

        //remove element
        userArray = userArray.filter(el => el.id !== pId);

        userArray.push(request.payload);
        return userArray;
        // return userArray.push(request.payload);
    }
});


// Start the    server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();