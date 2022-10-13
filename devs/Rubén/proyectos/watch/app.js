const watchArea = document.getElementById("watch");
let date = new Date();

watchArea.innerHTML = `${date.getHours()}: ${date.getMinutes()} :${date.getSeconds()}`;