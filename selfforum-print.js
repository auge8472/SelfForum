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
			var i = 0;
			$('.print .posting-content').append('<ul class="printfootnoteurls"></ul>');
			$('.print .posting-content a').each(function(){
				i++;
				$(this).after('<sup class="printfootnote">[L'+i+']</sup>');
				$('.printfootnoteurls').append('<li>[L'+i+'] URL: '+this.href+'</li>');
			});
			$(this).text('Druckansicht verlassen');
			window.print();
		} else {
			$('.printfootnoteurls, .printfootnote').remove();
			$(this).text('Beitrag drucken');
		}
		event.preventDefault();
	})
})
