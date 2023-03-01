// url: http://localhost:5001/?a=1&b=2
const currentUrl = window.location.href;

const querystring = '?' + currentUrl.split('?')[1];
const params = new URLSearchParams(querystring);

const a = params.get('a');

document.getElementById('body').innerHTML = a
