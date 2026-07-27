Web Storage API: Komplexere Daten
''''''''''''''''''''''''''''''''''

Objektiv:
localStorage Den Wert eines Eingabefelds abrufen und als Array von Objekten speichern  .

Anweisungen:
Daten speichern:

Aus dem Standardformular wird der Inhalt des Eingabefelds abgerufen, sobald das Formular abgeschickt wurde.
Stellen Sie sicher, dass das Eingabefeld vor dem Speichern nicht leer ist!
Für jede Benutzereingabe soll ein Objekt mit folgenden Eigenschaften erstellt werden:
id:  Beachten Sie Folgendes: Da eine UUID möglicherweise kein gültiger CSS-Selektor ist, entfernen wir die Bindestriche und fügen das Präfix hinzu. task-
Inhalt: die Benutzereingabe
Speichere diesen Wert  localStorage als Teil eines Arrays. Speichere den neuen Wert am Anfang des Arrays!
Formular zurücksetzen
Daten abrufen:

Jedes Mal, wenn Sie auf „Absenden“ klicken, fügen Sie einen neuen Listeneintrag zur leeren Liste hinzu  ul. Achten Sie darauf, dass sich der neue Eintrag ganz oben befindet!
Weisen Sie dem Listenelement die ID des Objekts zu; das wird sich als nützlich erweisen.
Füge innerhalb des Listeneintrags einen roten Button mit der Aufschrift „Löschen“ hinzu. Mach es cool! 😀
Verknüpfen Sie diesen Button beim Klicken mit einem Ereignis; protokollieren Sie vorerst nur die ID des Elements!
Stellen Sie sicher, dass beim Laden des Dokuments der Inhalt Ihres Speicherelements in die Liste eingefügt wird. Sie können versuchen,  load dem Fenster selbst einen Ereignis-Listener hinzuzufügen!
Löschen:

Stellen Sie sicher, dass beim Klicken auf eine Schaltfläche „Löschen“ das Element nicht nur aus dem DOM, sondern auch aus dem Array im localStorage gelöscht wird. Tipp: Verwenden Sie die  .filter Methode
Neu laden:

Einfach weil es möglich ist. Füge dem  reload Button ein Ereignis hinzu, damit  die Vorschau neu geladen wird . Deine gespeicherten Daten sollten dann ebenfalls neu geladen werden!
Bonus:

Wahrscheinlich ist Ihr Code zum Erstellen der Listenelemente beim Laden und beim Neuerstellen sehr ähnlich, wenn nicht sogar identisch. Versuchen Sie, ihn in eine wiederverwendbare Funktion auszulagern  createListItem. Dieser Ansatz wird als  DRY (Do n't Repeat Yourself) bezeichnet.
Tipp:  Überprüfen Sie im Entwicklertool Ihres Browsers den Speicherbereich, um sicherzustellen, dass die Daten vorhanden sind!