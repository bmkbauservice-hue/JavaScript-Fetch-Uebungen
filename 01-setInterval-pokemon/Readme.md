Plane eine Abrufanfrage
_____________________________


Objektiv: 

Diese Funktion dient  setInterval dazu, eine Anfrage an die Pokémon-API zu planen und einen Zähler zu erhöhen. Für jede Anfrage wird ein Objekt mit dem Namen des Pokémon und seiner ID ausgegeben.

Anweisungen:

Erstelle eine Variable  counter und setze sie auf 1.
Dient  setInterval dazu, jede Sekunde eine Abfrage an die Pokémon-API zu senden.
Der URL der Abrufanfrage sollte  https://pokeapi.co/api/v2/pokemon/ der aktuelle Wert von  counter.
Rufe die Daten ab und extrahiere den Namen und die ID des Pokémon.
Gib ein Objekt mit dem Namen und der ID des Pokémon in der Konsole aus.
Der Zähler wird nach jeder Abrufanfrage erhöht.
Stoppt das Intervall nach 150 Anfragen. Wir wollen nur die Original-Pokémon! 😀