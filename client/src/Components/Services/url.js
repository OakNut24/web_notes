
const serverPort = "5000";


function url() {
    if (process.env.NODE_ENV === 'production') {
        return "https://intense-crag-31630.herokuapp.com";
    } else {
        return "http://localhost:"+serverPort;
    }
}

module.exports = url;
