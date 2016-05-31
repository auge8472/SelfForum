# ReadMe

## Meine gesammelten Dateien für das SelfHTML-Forum

### Wozu dient das?

Die Software des Forums des Projekts [SelfHTML](https://selfhtml.org/) namens [cforum](https://github.com/ckruse/cforum) ermöglicht es registrierten Benutzern, seine Benutzerschnittstelle (UI) erheblich anzupassen. Der Benutzer kann eingene CSS-Regeln und JavaScript-Funktionen einfügen. Damit lässt sich nicht nur das Aussehen, sondern auch das Verhalten der Oberfläche beeinflussen.

### Was ist hier zu finden?

Das Repository ist ein Platz zum sammeln von Code. Die Code-Stücke sind nicht unbedingt sofort einsatzbereit, sondern eher zum zusammenkopieren mit anderem Code in eigene Dateien gedacht.

- `print.css`: Ein rudimentäres CSS-Regelset zum Ausdruck von Forenbeiträgen.
	- **Achtung:** Die Funktion ist obsolet, da sie mittlerweile in das cforum, mit dem das SelfForum betrieben wird, überführt wurde. ***Bitte nicht mehr im User-CSS einsetzen.***
- `selfforum-print.js`: Eine JavaScript-Funktion, die …
	- … die untere der Button-Leisten unterhalb eines Postings um einen Druck-Button ergänzt,
	- … die Seitenelemente, die nicht zum Ausdruck gehören werden, abblendet,
	- … den systemeigenen Druckdialog aufruft,
	- … den Text des Druckbuttons je nach Status umschaltet.
	- **Achtung:** Die Funktion ist obsolet, da sie mittlerweile in das cforum, mit dem das SelfForum betrieben wird, überführt wurde. ***Bitte nicht mehr im User-JS einsetzen.***
- `selfforum-settingsmenu.css`: Formatierung der mit `selfforum-settingsmenu.js` generierten Linkliste. Die allgemeinen Formatierungsregeln des SelfForums für `nav ul` werden mitbenutzt und durch die hiesigen Regeln erweitert.
- `selfforum-settingsmenu.js`: Generiert für die Seite „Einstellungen“ ein Menü mit Links zu den Abschnitten des Formulars, die durch die Fieldsets definiert werden.
- `selfforum.js`: Javascript-Funktionen zum Anzeigen des nächsten Reloads der Forumsübersichten. Der Reload selbst kann in den Benutzereinstellungen konfiguriert werden.
- `selfhtml.xml`: OpenSearch-Suchplugin für die Suche im SelfHTML-Forum.

## My collected files for the SelfHTML-Forum

### What is it for?

The software of the project named [SelfHTML](https://selfhtml.org/), called [cforum](https://github.com/ckruse/cforum), makes it possible for registered users to apply changes to the user interface (UI) in many ways. The user can apply CSS-rules and JavaScript-functions. With that, the layout and the behaviour of the UI is changeable.

### What is to be found here?

The repository is a place to collect code. The code-fragments may not be ready for use. Copy the required fragments from my fragments and include them into your code files.

- `print.css`: A rudimentary set of CSS-rules for printing forum entries.
- `selfforum-print.js`: A JavaScript function, that …
	- … adds a printing button to the lowermost button bar below the posting,
	- … dims out the elements, that will not part of the print out,
	- … calls the operating systems print dialogue,
	- … toggles the label of the printing button dependent on the status.
- `selfforum.js`: Javascript-functions to display the time of the next reload of the overview page of the individual forums. The configuration of the reload itself is done in the user settings.
- `selfhtml.xml`: OpenSearch plugin for the search in the SelfHTML-forum.
