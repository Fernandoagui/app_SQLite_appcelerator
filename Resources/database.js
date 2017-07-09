exports.DBInstalaCanciones = function(){	
	Ti.Database.install('mydata/Musica.sqlite','Musica');
};

exports.DBMuestraCanciones = function(){
	var results = [];
	var db = Ti.Database.open('Musica');
	var resulSet = db.execute('SELECT * FROM Cancion');
	while(resulSet.isValidRow()){  
	  results.push({
	   nombrecancion:resulSet.fieldByName('nombreCancion'),
	   genero:resulSet.fieldByName('genero'),
	   album:resulSet.fieldByName('album'),
	   año:resulSet.fieldByName('año'),
	   grupo:resulSet.fieldByName('grupo')
	  });
	  resulSet.next();
	}
	resulSet.close();
	db.close();
	return results;
};

exports.DBInsertaCancion = function(cancion, grupo, album, genero, año){
	var db = Ti.Database.open('Musica');
	db.execute('INSERT INTO Cancion (nombreCancion, genero, album, año, grupo) VALUES (?,?,?,?,?)', cancion, genero, album, año, grupo);
	db.close();
};