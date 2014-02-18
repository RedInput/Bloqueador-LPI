var arrayUrls = [ "*://*.elpais.es/*", "*://*.marca.com/*", "*://*.elmundo.es/*",
		"*://*.as.com/*", "*://*.lavanguardia.com/*", "*://*.abc.es/*",
		"*://*.elperiodico.com/*", "*://*.larazon.es/*",
		"*://*.elcorreo.com/*", "*://*.lavozdegalicia.es/*",
		"*://*.mundodeportivo.com/*", "*://*.sport.es/*",
		"*://*.diariovasco.com/*", "*://*.lne.es/*", "*://*.farodevigo.es/*",
		"*://*.expansion.com/*", "*://*.cincodias.com/*",
		"*://*.eldiariomontanes.es/*", "*://*.diariovasco.com/*",
		"*://*.levante-emv.com/*", "*://*.laverdad.es/*", "*://*.ideal.es/*",
		"*://*.lasprovincias.es/*", "*://*.laverdad.es/*",
		"*://*.diarioinformacion.com/*", "*://*.elcomercio.es/*",
		"*://*.laprovincia.es/*", "*://*.diariodemallorca.es/*",
		"*://*.hoy.es/*", "*://*.larioja.com/*", "*://*.diariocordoba.com/*",
		"*://*.elperiodicomediterraneo.com/*", "*://*.superdeporte.es/*",
		"*://*.elperiodicodearagon.com/*", "*://*.laopiniondemurcia.es/*",
		"*://*.regio7.cat/*", "*://*.diaridegirona.cat/*",
		"*://*.laopiniondezamora.es/*", "*://*.laopinion.es/*",
		"*://*.diariodeibiza.es/*", "*://*.laopinioncoruna.es/*",
		"*://*.elperiodicoextremadura.com/*", "*://*.laopiniondemalaga.es/*",
		"*://*.aede.es/*", "*://*.lavozdigital.es/*",
		"*://*.diariodenavarra.es/*", "*://*.heraldo.es/*",
		"*://*.intereconomia.com/*", "*://*.diariodecadiz.es/*",
		"*://*.diariodesevilla.es/*", "*://*.deia.com/*",
		"*://*.diariodenoticias.org/*", "*://*.diariodeburgos.es/*",
		"*://*.malagahoy.es/*", "*://*.huelvainformacion.es/*",
		"*://*.noticiasdegipuzkoa.com/*", "*://*.diariodejerez.es/*",
		"*://*.noticiasdealava.com/*", "*://*.granadahoy.com/*",
		"*://*.diariopalentino.es/*", "*://*.latribunadealbacete.es/*",
		"*://*.elalmeria.es/*", "*://*.europasur.es/*",
		"*://*.heraldodesoria.es/*", "*://*.diariodeavila.es/*",
		"*://*.majorcadailybulletin.es/*", "*://*.latribunadeciudadreal.es/*",
		"*://*.latribunadetoledo.es/*", "*://*.eldiadecordoba.es/*",
		"*://*.latribunadetalavera.es/*", "*://*.eleconomista.es/*",
		"*://*.canarias7.es/*", "*://*.elprogreso.es/*",
		"*://*.lagacetadesalamanca.es/*", "*://*.diariodeleon.es/*",
		"*://*.diaridetarragona.com/*", "*://*.diariodeavisos.com/*",
		"*://*.lavozdealmeria.es/*", "*://*.diariodelaltoaragon.es/*",
		"*://*.elcorreoweb.es/*", "*://*.diariojaen.es/*",
		"*://*.diarideterrassa.es/*", "*://*.eladelantado.com/*" ];

chrome.webRequest.onBeforeRequest.addListener(function(info) {
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