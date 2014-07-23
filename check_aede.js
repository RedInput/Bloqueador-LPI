var arrayUrls = [ "*://*.elpais.es/*", "*://*.marca.com/*",
				"*://*.elmundo.es/*", "*://*.as.com/*", 
				"*://*.lavanguardia.com/*", "*://*.abc.es/*",
				"*://*.elperiodico.com/*", "*://*.larazon.es/*", 
				"*://*.elcorreo.com/*", "*://*.lavozdegalicia.es/*", 
				"*://*.mundodeportivo.com/*", "*://*.sport.es/*", 
				"*://*.diariovasco.com/*", "*://*.lne.es/*", 
				"*://*.farodevigo.es/*", "*://*.expansion.com/*", 
				"*://*.cincodias.com/*", "*://*.eldiariomontanes.es/*", 
				"*://*.levante-emv.com/*", "*://*.diariovasco.com/*", 
				"*://*.ideal.es/*", "*://*.lasprovincias.es/*", 
				"*://*.laverdad.es/*", "*://*.diariosur.es/*", 
				"*://*.elcomercio.es/*", "*://*.diarioinformacion.com/*", 
				"*://*.laprovincia.es/*", "*://*.diariodemallorca.es/*", 
				"*://*.hoy.es/*", "*://*.larioja.com/*", 
				"*://*.diariocordoba.com/*", "*://*.elperiodicomediterraneo.com/*", 
				"*://*.laopiniondemurcia.es/*", "*://*.superdeporte.es/*", 
				"*://*.regio7.cat/*", "*://*.elperiodicodearagon.com/*", 
				"*://*.diaridegirona.cat/*", "*://*.laopiniondezamora.es/*", 
				"*://*.laopinioncoruna.es/*", "*://*.diariodeibiza.es/*", 
				"*://*.laopinion.es/*", "*://*.elperiodicoextremadura.com/*", 
				"*://*.laopiniondemalaga.es/*", "*://*.lavozdigital.es/*", 
				"*://*.aede.es/*", "*://*.heraldo.es/*", 
				"*://*.diariodenavarra.es/*", "*://*.ultimahora.es/*", 
				"*://*.diariodecadiz.es/*", "*://*.diariodesevilla.es/*", 
				"*://*.deia.com/*", "*://*.diariodenoticias.org/*", 
				"*://*.diariodeburgos.es/*", "*://*.malagahoy.es/*", 
				"*://*.huelvainformacion.es/*", "*://*.noticiasdegipuzkoa.com/*", 
				"*://*.diariodejerez.es/*", "*://*.latribunadealbacete.es/*", 
				"*://*.noticiasdealava.com/*", "*://*.diariopalentino.es/*", 
				"*://*.granadahoy.com/*", "*://*.diariodeavila.es/*", 
				"*://*.europasur.es/*", "*://*.heraldodesoria.es/*", 
				"*://*.majorcadailybulletin.es/*", "*://*.latribunadeciudadreal.es/*", 
				"*://*.elalmeria.es/*", "*://*.latribunadetoledo.es/*", 
				"*://*.eldiadecordoba.es/*", "*://*.latribunadetalavera.es/*", 
				"*://*.eleconomista.es/*", "*://*.canarias7.es/*", 
				"*://*.elprogreso.es/*", "*://*.lagacetadesalamanca.es/*", 
				"*://*.diariodeleon.es/*", "*://*.diaridetarragona.com/*", 
				"*://*.lavozdealmeria.es/*", "*://*.diariodelaltoaragon.es/*", 
				"*://*.elcorreoweb.es/*", "*://*.diariojaen.es/*", 
				"*://*.diarideterrassa.es/*", "*://*.elperiodico.cat/*", 
				"*://*.eladelantado.com/*" ];

chrome.webRequest.onBeforeRequest.addListener(function(details) {
	return {
		redirectUrl : chrome.extension.getURL("blocked_url.html")
	};
},
// filters
{
	urls : arrayUrls
},
// extraInfoSpec
[ "blocking" ]);