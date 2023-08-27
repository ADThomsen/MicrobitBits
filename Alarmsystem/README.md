# Alarmsystem

Vi skal bygge et alarmsystem, som vi kan bruge til at overvåge et værelse, et kontor eller hvad vi nu måtte have lyst til at sikre med alarmer.

Vores alarmsystem skal have flere forskellige funktioner og vi skal lave alarmer, der kan reagere på

- Lyd
- Lys
- Åbning af skuffer/skabe
- Bevægelse
- Flytning af ting

Vi starter med at lave simple programmer med `micro:bit`. Derefter bygger vi på indtil vi når vores slutmål, som er at kunne følge vores alarmsystem fra vores telefoner.

## Inden vi starter

Lav en mappe på jeres computer, som I er sikre på I kan finde igen, fx på skrivebordet. Åben `Word`, lav et nyt dokument og gem det i den mappe I lige har lavet. Giv dokumentet navnet `Alarmsystem.docx`.

## Første lektion - eksperiment med lydfølsomhed

Hvis der pludselig er larm i det rum vi overvåger vil vi gerne have at alarmen går. I første lektion skal vi lære at bruge lydcensoren. Lydcensoren måler støjen omkring den i decibel (db), som vi kan aflæse på vores `micro:bit`. Vores eksperiment i dag skal hjælpe os til at finde ud af, hvor følsom lydcensoren i vores alarmsystem skal være.

Vi skal lave et program, der bruger lydcensoren som `input` og `rainbow LED` som `output`. Vores program skal få `rainbow LED` til at lyse i forskellige farver, alt efter hvilket decibel-niveau, der måles af lydcensoren. Programmet skal overholde følgende regler:

|Decibel-niveau|Farve LED|
|-------|-------|
|< 30|Slukket|
|30-50|Grøn|
|51-70|Gul|
|71-90|Blå|
|91-110|Orange|
|>110|Rød|

Når jeres program virker, skal I vurdere hvor lydfølsom jeres alarm skal være. Lav lidt lyd omkring lydcensoren og hold øje med farven på `rainbow LED`. Når I laver så meget larm, som I mener jeres alarm skal reagere på, skal I tjekke farven på lyset. 

Nu ved I hvilken lydfølsomhed jeres alarm skal have. Hvis `rainbow LED` fx lyste blå, da I mente at grænsen var nået, så er jeres grænse `71 db`.

Nu har I to opgaver:

1. Åben jeres `Alarmsystem.docx` og skriv: `Lydcensor: XX db` (i stedet for `XX` skriver I jeres grænse).
2. Tænk over hvordan en lydcensor kan bruges i et alarmsystem. Skriv jeres idéer ned i `Alarmsystem.docx`

## Anden lektion - Eksperiment med kompas
