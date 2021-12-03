
const clientPort = "3000";
const serverPort = "5000";


function urlClient() {
    if (process.env.NODE_ENV === 'production') {
        return "https://intense-crag-31630.herokuapp.com";
    } else {
        return "http://localhost:"+clientPort;
    }
}

function urlServer(){
    if (process.env.NODE_ENV === 'production') {
        return "https://intense-crag-31630.herokuapp.com";
    } else {
        return "http://localhost:"+serverPort;
    }
}

exports.urlClient= urlClient;
exports.urlServer= urlServer;
