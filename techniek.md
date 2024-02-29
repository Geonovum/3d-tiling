# Techniek

Dit hoofdstuk gaat dieper in op de techniek van OGC 3D Tiles.

## Algemeen

In 3D Tiles verwijst een tegelset naar een verzameling tegels georganiseerd
binnen een ruimtelijke gegevensstructuur, vertegenwoordigd door een boom. Elke
tegelset wordt beschreven door minstens één JSON-bestand met metadata en een
hiërarchie van tegelobjecten, waarvan elke tegel renderbare inhoud kan bevatten.

## Tegelformaten

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

## Mediatypes en encoding

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

## Requests
