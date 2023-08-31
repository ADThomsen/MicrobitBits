# Eksperiment med lydfølsomhed

[Startkode.ts](Startkode.ts)

[Lydcensor.ts](Lydcensor.ts)

Hvis der pludselig er larm i det rum vi overvåger vil vi gerne have at alarmen går. I første lektion skal vi lære at bruge lydcensoren. Lydcensoren måler støjen omkring den i decibel (db), som vi kan aflæse på vores `micro:bit`. Vores eksperiment i dag skal hjælpe os til at finde ud af, hvor følsom lydcensoren i vores alarmsystem skal være.

Vi skal lave et program, der bruger lydcensoren som `input` og `rainbow LED` som `output`. Vores program skal få `rainbow LED` til at lyse i forskellige farver, alt efter hvilket decibel-niveau, der måles af lydcensoren. Programmet skal overholde følgende regler:

|Decibel-niveau|Farve LED|
|-------|-------|
|< 40|Slukket|
|40-50|Grøn|
|51-60|Gul|
|61-70|Blå|
|71-80|Orange|
|>80|Rød|

Når jeres program virker, skal I vurdere hvor lydfølsom jeres alarm skal være. Lav lidt lyd omkring lydcensoren og hold øje med farven på `rainbow LED`. Når I laver så meget larm, som I mener jeres alarm skal reagere på, skal I tjekke farven på lyset. 

Nu ved I hvilken lydfølsomhed jeres alarm skal have. Hvis `rainbow LED` fx lyste blå, da I mente at grænsen var nået, så er jeres grænse `71 db`.

Nu har I to opgaver:

1. Åben jeres `Alarmsystem.docx` og skriv: `Lydcensor: XX db` (i stedet for `XX` skriver I jeres grænse).
2. Tænk over hvordan en lydcensor kan bruges i et alarmsystem. Skriv jeres idéer ned i `Alarmsystem.docx`
