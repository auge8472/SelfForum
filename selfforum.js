/**
 * Persönliches JS für das SelfHTML-Forum
 *
 * @version 0.1
 * @author H. August <post@auge8472.de>
 */

document.addEventListener('DOMContentLoaded', getReloadInterval, false);
document.addEventListener('DOMContentLoaded', addReloadTime, false);

/**
 * Fügt den Forenübersichten den Zeitpunkt des nächsten Reoads hinzu
 */
function addReloadTime() {
	// Prüfe, ob wir uns in einer Forumsübersichtsseite (hat ID "threads-index") befinden.
	var targetPage = document.getElementById('threads-index');
	if (targetPage !== null) {
		// Es gibt ein Element mit der ID "threads-index", Übersichtsseite == TRUE
		// erzeuge Date-Objekt
		var objDate = new Date();
		// Zeit in Millisekunden, addiere die Zeitspanne bis zum Reload
		objDate.setTime(objDate.getTime() + getReloadInterval());
		// erzeuge den Text der Meldung
		var reloadDate = ('0' + objDate.getDate()).slice(-2) + '.' + ('0' + (objDate.getMonth() + 1)).slice(-2) + '.' + objDate.getFullYear();
		var reloadTime = ('0' + objDate.getHours()).slice(-2) + ':' + ('0' + objDate.getMinutes()).slice(-2) + ':' + ('0' + objDate.getSeconds()).slice(-2);
		var output = document.createTextNode('Nächstes laden der Übersicht am ' + reloadDate + ' um ' + reloadTime + ' Uhr.');
		// generiere ein Element, das über den Zeitpunkt des nächsten Reloads informiert
		var paragraph = document.createElement('p');
		var attribute = document.createAttribute('class');
		attribute.value = 'reload-time';
		paragraph.setAttributeNode(attribute);
		paragraph.appendChild(output);
		// hänge das Element in das Dokument (jeweilige Forumsübersicht) ein.
		document.getElementById('kopf').appendChild(paragraph);
	} else {
		// Es gibt ein Element mit der ID "threads-index", Übersichtsseite == FALSE
		return false;
	}
}


function getReloadInterval() {
	//<meta http-equiv="refresh" content="1200; URL=http://forum.selfhtml.org/self">
	var metas = document.getElementsByTagName('meta');
	var contContent = '';
	if (metas !== false) {
		for (var i = 0; i < metas.length; i++) {
			if (metas[i].hasAttribute('http-equiv') && 'refresh' == metas[i].getAttribute('http-equiv')) {
				contContent = metas[i].getAttribute('content');
				break;
			}
		}
		if (contContent.length > 0) {
			// Auslesen und splitten des Attributwerts
			var attContent = contContent.split('; ');
			if (myIsNumeric(attContent[0]) === true) {
				return parseInt(attContent[0], 10) * 1000;
			}
		}
	}
return 1200000;
}


function myIsNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n)
}