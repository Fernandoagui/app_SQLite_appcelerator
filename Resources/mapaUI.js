exports.ventanaMapa = function(){
	var win2 = Titanium.UI.createWindow({  
	    title:'Mapa',
	    backgroundColor:'#cccccc'
	});
	
	var center = {latitude:19.285887,longitude:-99.192680,latitudeDelta:0.03, longitudeDelta:0.1};
	 
	var mapview = Titanium.Map.createView({
		mapType: Titanium.Map.STANDARD_TYPE,
		region: center,
		animate:true,
		regionFit:true
	});
	
	win2.add(mapview);
	
	var tab2 = Titanium.UI.createTab({  
	    icon:'International Music-48.png',
	    title:'Ubicación',
	    window:win2
	});
	return tab2;
};
