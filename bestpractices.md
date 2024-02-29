# Best practices

Dit hoofdstuk beschrijft een aantal best practices voor het serveren en
gebruiken van 3D tiles.

## Implicit versus explicit tiling

*Wat is implicit en explicit tiling?*

*Hoe hier mee om te gaan bij het genereren/serveren van 3D Tiles?*

*Hoe hier mee om te gaan bij het gebruiken van 3D Tiles?*

## Performance

## Coordinaat Referentie Systeem (CRS)

*Wat is een CRS?*

## Geometric error

*Wat is geometric error?*

De ‘geometric error’ (geometrische fout) van een tegel vertelt ons hoe goed de
tegel de vorm van het originele object weergeeft. Het is een nummer dat aangeeft
hoeveel de vereenvoudigde versie van de tegel afwijkt van de echte vorm, gemeten
in meters.

Voor 3D Tiles wordt de geometrische fout van een tegel gebruikt om te bepalen
hoe gedetailleerd die tegel moet worden weergegeven. Dit wordt gedaan door de
tegels te organiseren in een hiërarchische boomstructuur, waarbij elk niveau van
de boom een verschillend niveau van detail vertegenwoordigt.

Wanneer een gebruiker bijvoorbeeld een 3D scène bekijkt op een computer of
mobiel apparaat, zal de client-implementatie de geometrische fout van elke tegel
evalueren. Als de geometrische fout van een tegel binnen een aanvaardbaar bereik
valt, wordt die tegel getoond aan de gebruiker. Als de fout te groot is, wat
betekent dat de tegel niet gedetailleerd genoeg is, zal de client-implementatie
ervoor kiezen om die tegel te verfijnen door kindertegels van hogere resolutie
te laden en te tonen.

De grootte van deze fout hangt af van hoe belangrijk het is om de details van
het object nauwkeurig weer te geven. Een hogere fout betekent dat het programma
eerder beslist om de tegel te verfijnen en de details weer te geven.

*Hoe hier mee om te gaan bij het genereren/serveren van 3D Tiles?*

*Hoe hier mee om te gaan bij het gebruiken van 3D Tiles?*

## Ontbrekende specificaties voor tijdseries

## Ondergrondinformatie in clients
