var socket = io();
			//escuchar on
		socket.on('connect', function(){
			console.log('conectado al servidor ');
		});

		socket.on('disconnect', function(){
			console.log('perdimos conexión con el servidor');
		});

		//emitir emit
		//emitir mensaje
		socket.emit('enviarMensaje', {
			usuario: 'Marlene',
			mensaje: 'Hola mundo'

		}, function(res){
			console.log('respuesta server:',res)
		});

		// escuchar informacion
		socket.on('enviarMensaje', function(mensaje){
			console.log('servidor:', mensaje);
		});