/**
 * JS-Anweisungen für ein Menü für die Formularabschnitte in den Benutzereinstellungen
 *
 * @version 0.1
 * @author H. August <post@auge8472.de>
 */


$(document).ready(function(){
	var targetlist = '<nav><ul class="tabswitcher"></ul></nav>', targets = '';
	$('.cf-tab-content').prepend(targetlist);
	$('.cf-tab-pane').each(function(){
		targets += '<li><a href="#' + this.id + '">' + $(this).children('legend').text() + '</a></li>';
	})
	$('.tabswitcher').append(targets);
	$('.tabswitcher li a').on('click', function(){
		if ($('#user-data').hasClass('active')) {
			$('#user-data').removeClass('active');
		}
	});
})
