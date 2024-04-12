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

## Techniek

Deze paragraaf gaat dieper in op de techniek van OGC 3D Tiles.

In 3D Tiles verwijst een tegelset naar een verzameling tegels georganiseerd
binnen een ruimtelijke gegevensstructuur, vertegenwoordigd door een boom. Elke
tegelset wordt beschreven door minstens één JSON-bestand met metadata en een
hiërarchie van tegelobjecten, waarvan elke tegel renderbare inhoud kan bevatten.

### Tegelformaten

Het primaire tegelformaat voor 3D Tiles is glTF 2.0, een open specificatie
ontworpen voor efficiënte transmissie en laden van 3D-inhoud. Dit formaat omvat
geometrie, textuurinformatie en kan worden uitgebreid met metadata,
model-instanciëring en compressie. Het ondersteunt verschillende soorten
3D-inhoud zoals 3D-modellen en puntenwolken.

Voorbeeld GLTF

Naast glTF ondersteunt 3D Tiles ook de volgende tegelformaten:

1\. Batched 3D Model (b3dm): Dit formaat wordt gebruikt voor heterogene
3D-modellen.

2\. Instanced 3D Model (i3dm): Gebruikt voor het instanceren van 3D-modellen,
zoals bomen, windmolens, en bouten.

3\. Point Cloud (pnts): Voor het weergeven van grote aantallen punten in een
puntenwolk.

4\. Composite (cmpt): Hiermee kunnen tegels van verschillende formaten worden
samengevoegd tot één tegel.

Deze formaten bieden flexibiliteit voor het opslaan en renderen van diverse
soorten 3D-inhoud binnen de 3D Tiles-specificatie.

### Mediatypes en encoding

Het bestandsformaat voor 3D Tiles bestaat uit:

\- Voor tegelsetbestanden: .json-extensie met het Media Type "application/json".

Voorbeeld JSON

\- Voor tegelinhoudsbestanden: de specifieke extensies en Media Type volgens de
specificatie van het tegelformaat.

Voorbeeld van een GLTF en B3DM?

\- Voor metagegevensschema-bestanden: .json-extensie met het Media Type
"application/json".

\- Voor tegelsetstijlbestanden: .json-extensie met het Media Type
"application/json".

\- Voor JSON-subtree-bestanden: .json-extensie met het Media Type
"application/json".

\- Voor binaire subtree-bestanden: .subtree-extensie met het Media Type
"application/octet-stream".

\- Voor binaire bufferbestanden: .bin-extensie met het Media Type
"application/octet-stream".

Wat betreft de encoding:

\- JSON-bestanden gebruiken UTF-8-encoding zonder BOM.

\- Alle tekstuele strings in JSON gebruiken alleen het ASCII-tekenreeks-charset,
zonder JSON-escapen.

\- Niet-ASCII-tekens die als eigenschapswaarden in JSON verschijnen, kunnen
worden geëscapet.

\- Namen (sleutels) binnen JSON-objecten moeten uniek zijn, dus
duplicaat-sleutels zijn niet toegestaan.

\- Sommige eigenschappen zijn gedefinieerd als integers in het schema. Dergelijke
waarden kunnen worden opgeslagen als decimalen met een nul fractiegedeelte of
met exponentnotatie, zoals gedefinieerd in RFC 8259, Sectie 6.

### Requests

## i3DS

…
