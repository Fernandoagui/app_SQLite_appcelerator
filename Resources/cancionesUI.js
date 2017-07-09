exports.ventanaCancion = function(){
	var win1 = Titanium.UI.createWindow({  
		title:'Canciones',
		backgroundColor:'black',		
		layout:'vertical'
	});
	
	var tab1 = Titanium.UI.createTab({  
	    icon:'Playlist-48.png',
	    title:'Canciones',
	    window:win1
	});
	
	var tableData = tablaCanciones();
	
	var listSection = Titanium.UI.createListSection({
	    items: tableData
	});
	
	var listView = Titanium.UI.createListView({
		sections: [listSection],
	});

	var scrollView1 = Ti.UI.createScrollView({
		showVerticalScrollIndicator: true,
		showHorizontalScrollIndicator: true,
		height: '100%',
		width: '100%',
		borderColor : 'white'
	});
	scrollView1.add(listView);
	var view1 = Titanium.UI.createView({
		borderRadius:10,
		width:'100%',
 		height:'50%'
	});
//------------------------------------------- View 2: Agregar canciones -------------------------------------------------------
	var scrollView2 = Ti.UI.createScrollView({
		showVerticalScrollIndicator: true,
		showHorizontalScrollIndicator: true,
		height: '100%',
		width: '100%',
		showVerticalScrollIndicator : true,
		layout:'vertical',
		borderColor : 'white'
	});	
	var label2 = Ti.UI.createLabel({
	  text: 'nombre de la canción:',
	  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	  width: Ti.UI.SIZE, height: Ti.UI.SIZE
	});
	scrollView2.add(label2);
	var cancionTextField = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color: '#336699',
		//top: 10, left: 10,
		width: 250, height: 60
	});
	scrollView2.add(cancionTextField);
	
	var label3 = Ti.UI.createLabel({
	  text: 'nombre del grupo:',
	  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	  width: Ti.UI.SIZE, height: Ti.UI.SIZE
	});
	scrollView2.add(label3);
	var grupoTextField = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color: '#336699',
		//top: 80, left: 10,
		width: 250, height: 60
	});
	scrollView2.add(grupoTextField);
	
	var label4 = Ti.UI.createLabel({
	  text: 'nombre del album:',
	  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	  width: Ti.UI.SIZE, height: Ti.UI.SIZE
	});
	scrollView2.add(label4);
	var albumTextField = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color: '#336699',
		//top: 130, left: 10,
		width: 250, height: 60
	});
	scrollView2.add(albumTextField);
	
	var label5 = Ti.UI.createLabel({
	  text: 'nombre del género:',
	  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	  width: Ti.UI.SIZE, height: Ti.UI.SIZE
	});
	scrollView2.add(label5);
	var generoTextField = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color: '#336699',
		//top: 200, left: 10,
		width: 250, height: 60
	});
	scrollView2.add(generoTextField);
	
	var label6 = Ti.UI.createLabel({
	  text: 'año de la canción:',
	  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	  width: Ti.UI.SIZE, height: Ti.UI.SIZE
	});
	scrollView2.add(label6);
	var añoTextField = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color: '#336699',
		//top: 270, left: 10,
		width: 250, height: 60
	});
	scrollView2.add(añoTextField);
	
	var button = Titanium.UI.createButton({
	   title: 'Agregar cancion',
	   //top: 10,
	   width: 200,
	   height: 50
	});
	scrollView2.add(button);
	
	var view2 = Titanium.UI.createView({
		borderRadius:10,
		width:'100%',
 		height:'50%'
	});
	
	button.addEventListener('click',function(e){
	   	agregaCancionView(cancionTextField, grupoTextField, albumTextField, generoTextField, añoTextField);
	   	cancionTextField.setValue('');grupoTextField.setValue('');albumTextField.setValue('');generoTextField.setValue('');añoTextField.setValue('');
	   	tableData = tablaCanciones();
		listSection.items= tableData;
	});
	var labelBiblioteca = Ti.UI.createLabel({
	  text: 'Biblioteca',
	  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	  width: Ti.UI.SIZE, height: Ti.UI.SIZE
	});
	var labelAgregarCancion = Ti.UI.createLabel({
	  text: 'Agregar una cancion',
	  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	  width: Ti.UI.SIZE, height: Ti.UI.SIZE
	});
	
	view1.add(scrollView1);
	view2.add(scrollView2);
	win1.add(labelBiblioteca);
	win1.add(view1);
	win1.add(labelAgregarCancion);
	win1.add(view2);
	return tab1;
};

function agregaCancionView(cancionTextField, grupoTextField, albumTextField, generoTextField, añoTextField){
	if(cancionTextField.hasText() && grupoTextField.hasText() && albumTextField.hasText() && generoTextField.hasText() && añoTextField.hasText() ){
		var añoEntero = parseInt(añoTextField.getValue());
		if (!isNaN(añoEntero)){
			database.DBInsertaCancion(cancionTextField.getValue(),grupoTextField.getValue(),albumTextField.getValue(),generoTextField.getValue(),añoTextField.getValue());
			var dialog = Ti.UI.createAlertDialog({
    			message: 'Canción agregada.',
   				ok: 'Aceptar',
    			title: 'Nueva Canción.'
  			});
  			dialog.show();
		}
	}else{
		var dialog = Ti.UI.createAlertDialog({
			message: 'Ha ingresado mal los datos.',
			ok: 'Aceptar',
			title: 'Canción no agregada'
		});
		dialog.show();
	}
};

function tablaCanciones(){
	var results = database.DBMuestraCanciones();
	var tableData = [];
	for (var i=0; i < results.length; i++) {
	  tableData.push({
	  	properties: { title: results[i].grupo +' - '+  results[i].nombrecancion, image: 'music-player.png',color: 'white'}
	  });
	};
	return tableData;
}
