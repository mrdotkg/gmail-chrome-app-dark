document.head.innerHTML = document.head.innerHTML + '<meta name="theme-color" content="rgba(33, 33, 33, 0.98)">'
var link = document.createElement('meta');
link.setAttribute('name', 'theme-color');
link.content = "rgba(33, 33, 33, 0.98)";
// link.content = "rgba(0, 0, 0, 0)";
document.getElementsByTagName('head')[0].appendChild(link);
