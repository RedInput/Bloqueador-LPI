var urls = "elpais.es,1;marca.com,1;elmundo.es,1;as.com,1;lavanguardia.com,1;abc.es,1;elperiodico.com,1;larazon.es,1;elcorreo.com,1;lavozdegalicia.es,1;mundodeportivo.com,1;sport.es,1;diariovasco.com,1;lne.es,1;farodevigo.es,1;expansion.com,1;cincodias.com,1;eldiariomontanes.es,1;diariovasco.com,1;levante-emv.com,1;laverdad.es,1;ideal.es,1;lasprovincias.es,1;laverdad.es,1;diarioinformacion.com,1;elcomercio.es,1;laprovincia.es,1;diariodemallorca.es,1;hoy.es,1;larioja.com,1;diariocordoba.com,1;elperiodicomediterraneo.com,1;superdeporte.es,1;elperiodicodearagon.com,1;laopiniondemurcia.es,1;regio7.cat,1;diaridegirona.cat,1;laopiniondezamora.es,1;laopinion.es,1;diariodeibiza.es,1;laopinioncoruna.es,1;elperiodicoextremadura.com,1;laopiniondemalaga.es,1;aede.es,1;lavozdigital.es,1;diariodenavarra.es,1;heraldo.es,1;intereconomia.com,1;diariodecadiz.es,1;diariodesevilla.es,1;deia.com,1;diariodenoticias.org,1;diariodeburgos.es,1;malagahoy.es,1;huelvainformacion.es,1;noticiasdegipuzkoa.com,1;diariodejerez.es,1;noticiasdealava.com,1;granadahoy.com,1;diariopalentino.es,1;latribunadealbacete.es,1;elalmeria.es,1;europasur.es,1;heraldodesoria.es,1;diariodeavila.es,1;majorcadailybulletin.es,1;latribunadeciudadreal.es,1;latribunadetoledo.es,1;eldiadecordoba.es,1;latribunadetalavera.es,1;eleconomista.es,1;canarias7.es,1;elprogreso.es,1;lagacetadesalamanca.es,1;diariodeleon.es,1;diaridetarragona.com,1;diariodeavisos.com,1;lavozdealmeria.es,1;diariodelaltoaragon.es,1;elcorreoweb.es,1;diariojaen.es,1;diarideterrassa.es,1;eladelantado.com,1";
var arrayUrls = [];

var array22 = [ "*://*.elpais.es/*", "*://*.marca.com/*", "*://*.elmundo.es/*",
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

chrome.storage.local.get('urls', function(result) {
	if (result.urls) {
		arrayUrls = result.urls.split(";");

	} else {
		chrome.storage.local.set({
			'urls' : urls
		});

		arrayUrls = urls.split(";");
	}
});

chrome.webRequest.onBeforeRequest.addListener(function(info) {
	// return {
	// cancel : true
	// };

	return {
		redirectUrl : chrome.extension.getURL("blocked_url.html")
	};
},
// filters
{
	urls : array22
},
// extraInfoSpec
[ "blocking" ]);

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (tab.status === "loading") {
		for ( var int = 0; int < arrayUrls.length; int++) {
			var url = arrayUrls[int].split(",");

			if ((url[0] === getDomainFromURL(tab.url)) && (url[1] == 1)) {
				chrome.pageAction.show(tabId);

				var jsRunner = {
					'code' : 'window.stop()'
				};
				chrome.tabs.executeScript(tabId, jsRunner);

				break;

			} else {
				chrome.pageAction.hide(tabId);
			}
		}
	}
});

function getDomainFromURL(data) {
	var a = document.createElement('a');
	a.href = data;
	return a.hostname.replace("www.", "");
}