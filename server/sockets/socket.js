const {io}= require('../server'); 

//escuchar on
io.on('connection', (client)=>{

	console.log('Usuario conectado');

	client.emit('enviarMensaje', {
		usuario: 'Administrador',
		mensaje: 'Bienvenido a esta publicación'
	});	

	client.on('disconnect',()=>{
		console.log('Usuario desconectado');
	});

	//escuchar
	client.on('enviarMensaje', (data, callback) => {
		console.log(data);
		client.broadcast.emit('enviarMensaje', data);
		/*if(mensaje.usuario){
			callback({
				resp:'TODO SALIO BIEN!!'
			});

		}else{
			callback({
				resp:'TODO SALIO MAL!!!!!'
			});
		}
		*/
	});

});