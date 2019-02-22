var http = require('http')
var url = require('url')
var Request = require("request");


http.createServer(

    function (request, response){
        response.writeHead(200, {'Content-Type':'text/plain'})

        var params = url.parse(request.url,true).query
        var lat = params.lat
        var lon = params.lon        
        var urlparam = lat + "," + lon

        Request.get("https://api.darksky.net/forecast/fd426e7cd961bafdb8c00cb8e06084bd/" + urlparam, (error, res, body) => {
            if(error) {
                response.write(error)
            }
            response.write(body)
            response.end()
        });
    }
).listen(8000);

console.log("Server ready...")