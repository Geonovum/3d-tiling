## Standaard OGC 3D Tiles

Dit hoofdstuk geeft een beschrijving van de belangrijkste onderdelen van de OGC
3D Tiles standaard.

## Introductie

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

## Tegelset

In 3D Tiles verwijst een tegelset (tileset) naar een verzameling tegels
georganiseerd binnen een ruimtelijke gegevensstructuur, vertegenwoordigd door
een boom. Elke tegelset wordt beschreven door minstens één JSON-bestand met
metadata en een hiërarchie van tegelobjecten, waarvan elke tegel renderbare
inhoud kan bevatten (figuur 9).

<figure id="Figuur_9">
<a href="media/Figuur tileset.json.png" target="_blank"><img src="media/Figuur tileset.json.png" alt=""></a>
<figcaption>Elke tegelset wordt beschreven door minstens één JSON-bestand</figcaption>
</figure>

~~```mermaid~~
~~ graph LR;~~
~~    data{3D Tiles} --> tileset.json;~~
~~    tileset.json --> 1.0~~
~~    tileset.json --> 1.1~~
~~    1.0 --> b3dm~~
~~    1.0 --> cmpt~~
~~    1.0 --> pnts~~
~~    1.0 --> i3dm~~
~~    1.1 --> shp("glTF 2.0")~~
~~    b3dm --> shp("glTF 2.0")~~
~~    i3dm --> shp("glTF 2.0")~~
~~```~~

## Tegelformaten

Het primaire tegelformaat voor 3D Tiles is glTF 2.0, een open specificatie
ontworpen voor efficiënte transmissie en laden van 3D-inhoud. Dit formaat omvat
geometrie, textuurinformatie en kan worden uitgebreid met metadata,
model-instanciëring en compressie. Het ondersteunt verschillende soorten
3D-inhoud zoals 3D-modellen (figuur 10) en puntenwolken.

<figure id="Figuur 10"> 
<a href="media/huis.png" target="_blank"><img src="media/huis.png" alt=""></a>
<figcaption>3D model van een huis in glTF 2.0 formaat</figcaption>
</figure>

Naast glTF ondersteunt 3D Tiles ook de volgende tegelformaten:

1\. Batched 3D Model (b3dm): Dit formaat wordt gebruikt voor heterogene
3D-modellen.

2\. Instanced 3D Model (i3dm): Gebruikt voor het instanceren van 3D-modellen,
zoals bomen, windmolens, en bouten.

3\. Point Cloud (pnts): Voor het weergeven van grote aantallen punten in een
puntenwolk.

4\. Composite (cmpt): Hiermee kunnen tegels van verschillende formaten worden
samengevoegd tot één tegel.

## Mediatypes en encoding

Het 3D Tiles-bestandsformaat gebruikt verschillende mediatypes en encoding, zie
onderstaande tabel.

| Extensie | Media Type               | Toepassing                                                               |
|----------|--------------------------|--------------------------------------------------------------------------|
| .json    | application/json         | tegelset-, metagegevensschema-, tegelsetstijl- en JSON-subtree-bestanden |
| .subtree | application/octet-stream | binaire subtree-bestanden                                                |
| .bin     | application/octet-stream | binaire bufferbestanden                                                  |

JSON-bestanden gebruiken UTF-8-encoding zonder BOM, met ASCII-tekenreeks-charset
en unieke sleutels; niet-ASCII-tekens worden geëscapet volgens RFC 8259, Sectie
6.

## Geometric error

In een 3D-omgeving worden tegels georganiseerd in een boomstructuur, waarbij
elke tegel verschillende niveaus van detail vertegenwoordigt om te bepalen hoe
gedetailleerd een tegel moet worden weergegeven. Deze tegelsets zijn
verzamelingen van tegels die samen een groter oppervlak vormen, terwijl
kindertegels kleinere tegels binnen een grotere tegel zijn die helpen bij het
opbouwen van gedetailleerde structuren.

De geometrische fout van een tegel vertelt ons hoe nauwkeurig de vorm van die
tegel overeenkomt met het originele object, gemeten in meters.

Bij het bekijken van een 3D-scène op een apparaat, wordt de geometrische fout
van elke tegel geëvalueerd. Als de fout binnen een aanvaardbaar bereik ligt,
wordt de tegel getoond. Als de fout te groot is, wat betekent dat de tegel niet
gedetailleerd genoeg is, wordt de tegel verfijnd door gedetailleerdere
kindertegels te laden en te tonen.

De grootte van de fout (*geometric error*) hangt af van hoe belangrijk het is om
de details van het object nauwkeurig weer te geven (figuur 11). Een hogere fout betekent dat
het programma eerder beslist om de tegel te verfijnen en de details weer te
geven.

<figure id="Figuur_11"> 
<a href="media/geometric_error.png" target="_blank"><img src="media/geometric_error.png" alt=""></a>
<figcaption>Geometric error gedefinieerd in tileset.json, voor panden met verschillend detail niveau</figcaption>
</figure>

## Implicit tiling

Implicit tiling in 3D Tiles is een methode om 3D-gegevens op een gestructureerde
en efficiënte manier te organiseren. Het verdeelt de gegevens in een regelmatig
patroon van tegels, vergelijkbaar met hoe een mozaïek is opgebouwd. Hierdoor
kunnen gebruikers snel en eenvoudig specifieke tegels identificeren en
benaderen, wat vooral handig is bij het werken met grote 3D-omgevingen. Explicit
tiling daarentegen is een techniek waarbij een oppervlak wordt bedekt met vooraf
gedefinieerde tegels, in plaats van tegels die dynamisch worden gegenereerd.

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

## Metadata

De OGC 3D Tiles specificaties beschrijven uitgebreide metadata om 3D-tiles
efficiënt te beheren en weer te geven. Deze metadata omvat diverse aspecten
zoals:

1.  *Geografische locatie:* Informatie over de precieze positie van een tegel in
    een geografisch coördinatensysteem. Dit kan details bevatten zoals de
    noord-, zuid-, oost- en westgrenzen van de tegel.

2.  *Schaal en resolutie:* Details over de schaal en resolutie van de tegel, die
    aangeven hoe gedetailleerd de informatie binnen de tegel is. Dit helpt bij
    het selecteren van de juiste tegels voor verschillende zoomniveaus.

3.  *Niveaus van detail (LOD):* Informatie over de verschillende niveaus van
    detail die binnen een tegel beschikbaar zijn, waardoor systemen kunnen
    kiezen hoe gedetailleerd ze een gebied weergeven op basis van de beschikbare
    resources en de benodigde nauwkeurigheid.

4.  *Relaties tussen tegels:* Metadata die de hiërarchie en relaties tussen
    tegels beschrijft, zoals ouder-kind-relaties tussen grotere tegels en hun
    kleinere kindertegels. Dit helpt bij het efficiënte beheer van tegels en het
    navigeren door de tegelstructuur.

5.  *Tegel identificatie:* Unieke aanduidingen (identificaties) voor elke tegel,
    wat essentieel is voor het beheren en opvragen van specifieke tegels binnen
    een groot 3D-tiling systeem.

6.  *Bounding volumes:* Informatie over de 3D-grenzen van een tegel, zoals
    bounding boxes of bounding spheres, die helpen bij het snel bepalen van
    zichtbaarheid en bij het uitvoeren van ruimtelijke queries.

7.  *Formatinformatie:* Details over het bestandsformaat en de compressie van de
    tegelgegevens, wat belangrijk is voor de juiste interpretatie en weergave
    van de tegels.
