# Standaarden

Dit hoofdstuk gaat in op enkele standaarden en techniek voor 3D Tiling.

Voor het serveren van 3D Tiles zijn er in het algemeen twee standaarden.

### OGC 3D Tiles specification

https://docs.ogc.org/cs/22-025r4/22-025r4.html

3D Tiles is een standaard voor het efficiënt streamen en renderen van grote
driedimensionale georuimtelijke datasets, zoals fotogrammetrie, BIM/CAD-modellen
en puntenwolken. Het definieert een gegevensstructuur en tegelformaten voor
renderbare inhoud zonder strikte visualisatieregels.

3D Tiles wordt beheerd door het Open Geospatial Consortium (OGC). De standaard
komt

Een 3D Tiles-dataset (tileset) bevat diverse tegelformaten georganiseerd in een
ruimtelijke structuur. Het is declaratief, uitbreidbaar en geschikt voor
verschillende soorten 3D-gegevens. De tegelformaten omvatten batched
3D-modellen, geïnstantieerde 3D-modellen, puntenwolken en samengestelde tegels.

De specificatie omvat ook 3D Tile Styles voor declaratieve styling van
tegelsets. Het is een open formaat dat niet gebonden is aan specifieke
leveranciers of technologieën.

### i3S

I3S staat voor Indexed 3D Scene Layer en is een open standaard die is ontwikkeld
door Esri voor het efficiënt opslaan, delen en weergeven van grote en complexe
driedimensionale georuimtelijke gegevens. Het is vergelijkbaar met 3D Tiles van
het Open Geospatial Consortium (OGC) en wordt vaak gebruikt binnen de
GIS-gemeenschap.

I3S is geoptimaliseerd voor het werken met gegevens in de context van
web-gebaseerde toepassingen, waardoor het mogelijk is om grote 3D-scènes in
real-time te streamen en te visualiseren in webbrowsers of andere applicaties.
Het maakt gebruik van een combinatie van ruimtelijke indexering, tiling en
compressie om de prestaties te optimaliseren en de benodigde bandbreedte te
minimaliseren bij het overbrengen van 3D-gegevens over het web.

De I3S-specificatie omvat verschillende componenten, zoals de Scene Layer, de
Scene Layer Package en de Scene Layer Service, die samenwerken om 3D-gegevens
efficiënt te organiseren en weer te geven. Het wordt vaak gebruikt in combinatie
met Esri's ArcGIS-platform, maar is een open standaard die door andere
softwareleveranciers kan worden geïmplementeerd en gebruikt

## OGC 3D Tiles

Deze paragraaf geeft een beschrijving van de belangrijkste onderdelen van de OGC
3D Tiles standaard.

### Introductie

De OGC 3D Tiles-standaard is een set regels voor het organiseren en visualiseren
van 3D-gegevens. Het vertelt ons hoe tegelsets, die informatie over de locatie,
details en uiterlijk van de gegevens bevatten, moeten worden opgebouwd. Deze
tegelsets zijn gestapeld op elkaar en worden slim gebruikt om gegevens op
verschillende gedetailleerde niveaus weer te geven. Bovendien definieert de
standaard de ondersteuning voor verschillende gegevenstypen, waaronder
geometrie, texturen en metadata, en biedt het richtlijnen voor mediatypes en
encoding.

Naast het tegelsetformaat omvat de standaard specificaties voor het beheren van
ruimtelijke queries, zoals het bepalen van de zichtbaarheid van tegels op basis
van hun geometrische fout en het dynamisch laden van tegels op basis van de
kijkafstand van de gebruiker. Ook biedt het richtlijnen voor
implementatiedetails, zoals het gebruik van UTF-8-encoding voor JSON-bestanden
en unieke sleutels voor eigenschappen binnen JSON-objecten.

### Tegelset

In 3D Tiles verwijst een tegelset (tileset) naar een verzameling tegels
georganiseerd binnen een ruimtelijke gegevensstructuur, vertegenwoordigd door
een boom. Elke tegelset wordt beschreven door minstens één JSON-bestand met
metadata en een hiërarchie van tegelobjecten, waarvan elke tegel renderbare
inhoud kan bevatten.

*Voorbeeld*

### Tegelformaten

Het primaire tegelformaat voor 3D Tiles is glTF 2.0, een open specificatie
ontworpen voor efficiënte transmissie en laden van 3D-inhoud. Dit formaat omvat
geometrie, textuurinformatie en kan worden uitgebreid met metadata,
model-instanciëring en compressie. Het ondersteunt verschillende soorten
3D-inhoud zoals 3D-modellen en puntenwolken.

*Voorbeeld GLTF*

Naast glTF ondersteunt 3D Tiles ook de volgende tegelformaten:

1\. Batched 3D Model (b3dm): Dit formaat wordt gebruikt voor heterogene
3D-modellen.

2\. Instanced 3D Model (i3dm): Gebruikt voor het instanceren van 3D-modellen,
zoals bomen, windmolens, en bouten.

3\. Point Cloud (pnts): Voor het weergeven van grote aantallen punten in een
puntenwolk.

4\. Composite (cmpt): Hiermee kunnen tegels van verschillende formaten worden
samengevoegd tot één tegel.

### Mediatypes en encoding

### Het 3D Tiles-bestandsformaat gebruikt verschillende mediatypes en encoding:

### - .json voor tegelset-, metagegevensschema-, tegelsetstijl- en JSON-subtree-bestanden met het Media Type "application/json".

### - .subtree voor binaire subtree-bestanden met het Media Type "application/octet-stream".

### - .bin voor binaire bufferbestanden met het Media Type "application/octet-stream".

### JSON-bestanden gebruiken UTF-8-encoding zonder BOM, met ASCII-tekenreeks-charset en unieke sleutels; niet-ASCII-tekens worden geëscapet volgens RFC 8259, Sectie 6.

### Geometric error

Tegels in een 3D-omgeving worden georganiseerd in een boomstructuur, waarbij
elke tegel verschillende niveaus van detail vertegenwoordigt. Deze niveaus van
detail helpen bij het bepalen hoe gedetailleerd een tegel moet worden
weergegeven. De geometrische fout van een tegel vertelt ons hoe nauwkeurig de
vorm van die tegel overeenkomt met het originele object, gemeten in meters.

Bij het bekijken van een 3D-scène op een apparaat, wordt de geometrische fout
van elke tegel geëvalueerd. Als de fout binnen een aanvaardbaar bereik ligt,
wordt de tegel getoond. Als de fout te groot is, wat betekent dat de tegel niet
gedetailleerd genoeg is, wordt de tegel verfijnd door gedetailleerdere
kindertegels te laden en te tonen.

De grootte van de fout hangt af van hoe belangrijk het is om de details van het
object nauwkeurig weer te geven. Een hogere fout betekent dat het programma
eerder beslist om de tegel te verfijnen en de details weer te geven.

*Voorbeeld geometric error*

### Implicit tiling

Implicit tiling in 3D Tiles is een methode om 3D-gegevens op een gestructureerde
en efficiënte manier te organiseren. Het verdeelt de gegevens in een regelmatig
patroon van tegels, vergelijkbaar met hoe een mozaïek is opgebouwd. Hierdoor
kunnen gebruikers snel en eenvoudig specifieke tegels identificeren en
benaderen, wat vooral handig is bij het werken met grote 3D-omgevingen.

Implicit tiling vereenvoudigt quadtrees en octrees in 3D Tiles, waardoor snelle
toegang mogelijk is via tegelcoördinaten. Dit verbetert ruimtelijke queries,
doorloopalgoritmen en updates van tegels.

Bovendien maakt implicit tiling betere interoperabiliteit mogelijk met bestaande
GIS-gegevensformaten met impliciet gedefinieerde tegelindelingen, zoals TMS,
WMTS, S2 en CDB.

Om grote hoeveelheden gegevens efficiënt te beheren, worden tegels gecreëerd en
georganiseerd op basis van bijbehorende metadata. Bij zeer omvangrijke datasets
wordt deze metadata opgedeeld en verdeeld in subtrees met een vast formaat. Deze
subtrees bevatten informatie over welke tegels aanwezig zijn en welke inhoud ze
bevatten, waardoor het beheer van de dataset geoptimaliseerd wordt.

Een implicitTiling-object kan worden toegevoegd aan tegels in het JSON-bestand
van de tegelset. Hiermee wordt bepaald hoe de tegel wordt verdeeld en waar
inhoud is opgeslagen. Het kan aan meerdere tegels worden toegevoegd voor
complexere indelingen. De implementatie van deze tegels omvat details zoals
verschillende verdeelschema's, strategieën voor verfijning en toegang tot
inhoud.

### Metadata

…

## i3DS

placeholder
