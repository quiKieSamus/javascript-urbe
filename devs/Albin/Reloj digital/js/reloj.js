let html = document.getElementById("tiempo"); //Obtener el elemento tiempo

setInterval(function(){
	tiempo = new Date(); //inicializar tiempo con la función date

	horas = tiempo.getHours(); //obtener la hora
	minutos = tiempo.getMinutes(); //obtener los minutos
	segundos = tiempo.getSeconds(); //obtener los segundos

	//evitar los 0 o numeros individuales
	if(horas<10)
		horas = "0"+horas;
	if(minutos<10)
		minutos = "0"+minutos;
	if(segundos<10)
		segundos = "0"+segundos;

	html.innerHTML = horas+" : "+minutos+" : "+segundos;
},1000);