//var mapaUI = Ti.include('mapaUI');
var mapaUI = require('mapaUI');
var cancionesUI = require('cancionesUI');
var database = require('database');
database.DBInstalaCanciones();
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('white');

// create tab group
var tabGroup = Titanium.UI.createTabGroup({tabsBackgroundColor : 'black'});

//------------------------------------------ Ventana para las canciones -----------------------------------------------
var tab1 = cancionesUI.ventanaCancion();
//------------------------------------------- Ventana para el mapa ----------------------------------------------------
var tab2 = mapaUI.ventanaMapa();
//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
