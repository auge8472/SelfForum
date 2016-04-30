/**
 * JS-Anweisungen für den Ausdruck von Postings im SelfHTML-Forum
 *
 * @version 0.1
 * @author M. Apsel
 * @author H. August <post@auge8472.de>
 */


$(document).ready(function(){
	$('.forum-links nav ul').append(' <li><a href="" class="print">Beitrag drucken</a></li>');
	$('.forum-links .print').click(function( event ){
		$(this).parents('.thread-message').toggleClass('print');
		$('body').toggleClass('print-preview');
		if ($(this).parents('.thread-message').hasClass('print')){
			$(this).text('Druckansicht verlassen');
			window.print();
		} else {
			$(this).text('Beitrag drucken');
		}
		event.preventDefault();
	})
})
