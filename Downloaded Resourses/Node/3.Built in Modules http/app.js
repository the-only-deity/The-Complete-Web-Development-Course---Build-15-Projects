const http = require('http');
const url = require('url');

//connection settings
//a port is an end point of communication
const port = 3000;
//hostname: IP which is associated with any device connected to a computer network
const hostname = '127.0.0.1'; //localhost

const cars = [
    {
        make: 'Audi',
        model: 'A3',
        year: '2015',
        price: 10000,
        transmission: 'Automatic',
        url: `https://images.pexels.com/photos/2394/lights-clouds-dark-car.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    },
    {
        make: 'Mercedes',
        model: 'B Class',
        year: '2018',
        price: 20000,
        transmission: 'Manual',
        url: `https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    },
    {
        make: 'Ford',
        model: 'Focus',
        year: '2018',
        price: 13000,
        transmission: 'Manual',
        url: `https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    }
];

//callback function to be executed when a user makes a request to our server
const respond = (request, response) => {
    if(request.url !== '/favicon.ico'){
        console.log(request.url);
        const query = url.parse(request.url, true).query;
        console.log(query);
        const pathname = url.parse(request.url, true).pathname;  
        console.log(pathname);

        //response.setHeader(header name, value)
        response.setHeader('Content-Type', 'text/plain');
        //writeHead(status code, {headers})
        response.writeHead(200, {'Content-Type': 'text/html'});
        //response.write sends the body of the response
        response.write(`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title>Node</title>
</head>
<body>`);
        response.write('<p>Node is fun!</p>');
//        console.log(car.make.toLowerCase());
        const check = car => (query.make === undefined || query.make.toLowerCase() === car.make.toLowerCase()) &&
                (query.model === undefined || query.model.toLowerCase() === car.model.toLowerCase()) &&
                (query.year === undefined || query.year === car.year) &&
                (query.transmission === undefined || query.transmission.toLowerCase() === car.transmission.toLowerCase()) &&
                (query.minprice === undefined || parseInt(query.minprice) <= car.price) &&
                (query.maxprice === undefined || parseInt(query.maxprice) >= car.price);
        if(pathname === '/cars'){
            cars.filter(check).forEach(car => {
                response.write(`
<hr>
<img src = '${car.url}' height='200' alt='car'>
<p>Make: ${car.make}</p>
<p>Model: ${car.model}</p>
<p>Year: ${car.year}</p>
<p>Transmission: ${car.transmission}</p>
<p>Price: $${car.price}</p>
`);
            });
            //make, model, year, transmission, minprice, maxprice
        }
        response.end(`</body>
</html>`);
    }

};

//create a server
const server = http.createServer(respond);


//listen to user request
server.listen(port, hostname, () => {console.log(`listening on port: ${port}, hostname: ${hostname}`)});