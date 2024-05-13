# Best practices

Dit hoofdstuk beschrijft een aantal best practices voor het serveren en
gebruiken van 3D tiles.

## Genereren van 3D Tiles

### Explicit en implicit tiling

>   Pas implicit tiling toe voor grotere datasets.

Bij het kiezen tussen implicit en explicit tiling is het belangrijk om te
beseffen dat de keuze sterk afhankelijk is van de specifieke
implementatiedetails aan zowel de generatie- als de gebruikerskant (de
webviewer).

In het algemeen kan gesteld worden dat:

1.  Implicit tiling interessant is, vooral voor grote datasets.

2.  Het aan te raden is om zowel implicit als explicit tiling te testen voor de
    beoogde toepassing. Dit komt omdat de ondersteuning voor implicit tiling nog
    steeds evolueert en zelfs populaire platforms zoals Cesium nog enkele
    uitdagingen hebben, vooral bij zeer grote datasets.

Door beide tiling-methoden te testen, kan de beste keuze worden gemaakt op basis
van de specifieke behoeften en omstandigheden van uw project.

>   Voor terreinen, zoals landschappen en terreinmodellen, is explicit tiling
>   vaak geschikt omdat ze vaak grote, uitgestrekte gebieden beslaan met een
>   relatief uniforme geometrie. Hierdoor kunnen terreinen efficiënt worden
>   opgedeeld in regelmatige tegels, waardoor snelle toegang en weergave op
>   verschillende detailniveaus mogelijk is. Deze regelmatige structuur maakt
>   het ook gemakkelijker om te navigeren en details te renderen op basis van de
>   afstand tot de kijker.

>   Aan de andere kant zijn gebouwen vaak complexe structuren met verschillende
>   vormen, maten en details. Voor gebouwen kan implicit tiling gunstig zijn
>   omdat het meer flexibiliteit biedt in het opdelen van de gegevens op basis
>   van de geometrische complexiteit. Dit maakt het mogelijk om gebouwen op te
>   delen in tegels die zich aanpassen aan de vorm van het gebouw en de
>   detailniveaus, wat efficiënter kan zijn voor de opslag en rendering van
>   complexe(re) gebouwen.

Daarnaast is er ook een alternatief voor implicit tiling: explicit tiling met
externe tilesets. Dit kan ook een goede optie zijn voor grote datasets. Net als
bij implicit tiling wordt hiermee de grootte van het tileset.json-bestand
significant kleiner. Dit bestand moet namelijk volledig worden ingelezen voordat
er iets in de viewer kan worden getoond. De grootte van dit tileset.json-bestand
is cruciaal voor een goede prestatie bij het laden van de 3D-tiles dataset. Als
dit bestand te groot is, kan het enkele seconden duren voordat het geladen is,
wat de gebruikerservaring niet ten goede komt.

Nog enkele aandachtspunten en technische details:

-   Implicit tiling is minder flexibel wat betreft de tegelmethode, omdat het
    alleen quadtree of octree kan zijn. Dit betekent onder andere dat je niet
    per tegel de hoogte precies kunt instellen op het hoogste gebouw in de
    tegel, wat weer implicaties kan hebben voor de prestaties in de viewer.

-   Er is minder controle over de geometrische fout bij implicit tiling. Deze
    wordt namelijk altijd door 2 gedeeld voor een volgend tegelniveau.

-   Wat betreft prestaties hangt veel af van hoe de subtrees in implicit tiling
    worden gegenereerd en hoe ze worden geconsumeerd in de viewer.

Let op: standaard 1.0 ondersteunt geen implicit tiling, vanaf 1.1 wel. Veel
clients zitten nog op 1.0, dus implicit tiling is niet in elke client
beschikbaar.

### Geometric error

>   Kies een drempelwaarde voor geometric error op basis van het gewenste zoom-
>   en detailniveau.

De geometrische fout (*geometric error*) van een tegel wordt gebruikt in 3D
Tiles om te bepalen hoe gedetailleerd een tegel moet worden weergegeven. De
grootte van de fout hangt af van hoe belangrijk het is om de details van het
object nauwkeurig weer te geven, waarbij een hogere fout betekent dat het
programma eerder beslist om de tegel te verfijnen en de details weer te geven.

Voor verschillende toepassingen zijn verschillende drempelwaarden voor de
geometric error van LOD-modellen van belang. Voor gebouwen op LOD2 zou een
drempelwaarde tussen 1 en 10 meter geschikt zijn. Bij terreinmodellen op LOD1,
bekeken op een schaal van 1:10.000, zou een drempelwaarde tussen 10 en 50 meter
passend zijn. Voor een schaal van 1:50.000 zou een waarde tussen 50 en 100 meter
geschikt zijn. Deze drempelwaarden zijn afhankelijk van verschillende factoren
zoals het beoogde gebruiksscenario, beschikbare rekenkracht en gewenste visuele
kwaliteit. Zo biedt een lagere geometric error meer detail, maar vereist het
meer rekenkracht. Het is cruciaal om de optimale drempelwaarde te bepalen op
basis van specifieke tests en evaluaties, rekening houdend met de vereisten van
het project en de doelsystemen.

Bij implicit tiling wordt de geometrische fout deels vastgesteld. Je stelt een
waarde in voor de root tegel, en deze waarde wordt vervolgens eenvoudigweg door
2 gedeeld voor elk volgend niveau onder de root tegel. Bij explicit tiling
daarentegen kun je de geometrische fout afzonderlijk instellen voor iedere
tegel.

### Offset Z-coördinaat

>   Stem de offset van de Z-coördinaat van 3D Tiles af op het specifieke
>   coördinatensysteem of op die van andere 3D Tiles datasets.

*Kunnen we met elkaar een meer specifieke best practice maken, waarin we een
waarde voor de offset opnemen?*

*N.B. binnen ZoN DF wordt offset Z-coördinaat ook opgepakt. Cesium kan geen 3D
aan. Bij genereren moet je een bewuste keuze maken, Metadata*

Het is belangrijk om ervoor te zorgen dat de offset van de Z-coördinaat correct
wordt toegepast om eventuele verticale verschuivingen tussen het
coördinatensysteem van het model en het gewenste referentiesysteem te
corrigeren. Dit kan bijvoorbeeld nodig zijn om het model op de juiste hoogte
boven het maaiveldoppervlak te plaatsen of om ervoor te zorgen dat het model
correct uitgelijnd is met andere lagen, zoals .

Het bepalen van de juiste offsetwaarde vereist meestal enige kennis van het
coördinatensysteem van het model en het gewenste referentiesysteem, evenals
eventuele verschillen in hoogteniveaus tussen die systemen. Het is aan te raden
om de offset zorgvuldig te kalibreren en te testen om ervoor te zorgen dat het
model nauwkeurig wordt gepositioneerd in de gewenste context.

### Optimale set aan parameters

>   Experimenteer met de optimale parameters voor o.m. LODs, zoomlevels en
>   generalisatie voor 3D Tiles generatie.

Bij het genereren van 3D tilesets kunnen een aantal parameters toegepast worden
die invloed hebben op de wijze waarop deze tilesets getoond worden in een
viewer. Deze parameters zijn:

-   Levels

-   CityGML Level of Detail (0, 1, 2, 3, 4)

-   Refinement (Add, Replace)

-   Object size filter

-   Geometry generalization

-   Textures (CityGML Appearance, Single color, Specify colors based on CityGML
    classes)

Er is geen aanbeveling mogelijk voor één set aan instellingen, omdat dit
afhankelijk is van de input-data, de visuele presentatie en ook de persoonlijke
smaak. Daarnaast zijn verschillende parameters onderling afhankelijk van elkaar.

#### Levels

Bij deze optie wordt gekozen op welk zoomlevel een tileset wordt aangemaakt. Het
is mogelijk meerdere levels in te stellen, die gezamenlijk een tileset vormen.
Voor elk level moeten dan de hieronder beschreven parameters ingesteld worden.
Levels die vaak gebruikt worden zijn 14, 15 en 16. Het level met het laagste
getal is degene die als eerste wordt geladen in een viewer. De objecten in dit
level liggen verder weg van het viewpoint dan de die in de hogere levels. Bij
het aanmaken van de levels wordt op de achtergrond een Geometric Error toegekend
aan elk level. Het laagste level heeft de hoogste Geometric Error.

#### CityGML Level of Detail

Bij deze optie wordt gekozen welk Level of Detail gebruikt wordt die in de
CityGML-data aanwezig is. Voor gebouwen geldt dat LoD1 een eenvoudig
blokkenmodel is en LoD2 dakvormen heeft. LoD1 bevat minder detail, dus is ook
sneller in te laden. Omdat van veraf minder detail te zien is, kan ervoor worden
gekozen om op een lager zoomlevel LoD1 te gebruiken en in dezelfde tileset op
een hoger zoomlevel LoD2 te gebruiken. Dit kan het laadproces gunstig
beïnvloeden.

Het is ook raadzaam om een fallback LOD in te stellen, zoals LOD1, voor het
geval er geen LOD2 beschikbaar is in de brondataset. In formaten zoals CityGML
of CityJSON kunnen meerdere LODs voor een object worden opgenomen. Als het
voorkeurs LOD niet beschikbaar is, zal het systeem automatisch teruggrijpen naar
het fallback LOD om het object op te nemen in de 3D Tile.

#### Object size filter

Deze optie is alleen te gebruiken bij de Add refinement. Voor elk zoomlevel kan
een object size gekozen worden, die gebaseerd is op de diagonaal van het object.
Bijvoorbeeld op level 14 alle gebouwen groter dan 100m, op level 15 alle
gebouwen tussen 50m en 100m en op level 16 alle gebouwen kleiner dan 50m.

#### Geometry generalization

Deze optie is alleen te gebruiken bij de Replace refinement. Voor elk zoomlevel
kan een generalisatie toegepast worden, waarbij een marge wordt opgegeven
waarbinnen vertices van een object samengevoegd worden. Bijvoorbeeld op level 14
een generalisatie van 5m, op level 15 van 2m en op level 16 geen generalisatie.

#### Textures

Bij het gebruik van CityGML Appearance kunnen bijvoorbeeld getextureerde
gebouwen aangemaakt worden. Het is niet aan te raden om hierbij LoD1 en 2 te
gebruiken, omdat LoD1 geen textures bevat. Het is wel mogelijk dit met object
size filter óf generalisatie te combineren. Het is verder mogelijk voor
verschillende zoomlevels de kwaliteit van de texture aan te passen, omdat van
veraf minder detail te zien is dan dichtbij.

Als voor Single color wordt gekozen is het wel goed mogelijk LoD1 en LoD2 te
combineren in de verschillende zoomlevels. Er wordt maar één kleur toegepast
voor alle objecten, eventueel met transparantie. Hierbij is het onderscheidt
tussen LoD1 en LoD2 op grote afstand niet te zien.

Bij het gebruik van Specify color based on CityGML classes krijgt elk vlak van
een gebouw zijn eigen kleur, mits ze gespecificeerd zijn in CityGML. Daken
worden bijvoorbeeld rood en muren grijs. Deze kleuren zijn aan te passen. Dit
geldt dan alleen voor LoD2 en hoger en daarom is het niet aan te raden om LoD1
en LoD2 te combineren in verschillende zoomlevels.

### Shader

>   Kies voor Physically Based Rendering (PBR) als shader voor 3D Tiles.

Het gebruik van PBR-shaders voor 3D Tiles biedt een toekomstbestendige oplossing
voor het creëren van hoogwaardige en realistische 3D-modellen. PBR-shaders zijn
gebaseerd op fysische principes van lichtinteractie, wat resulteert in visueel
consistente weergaven van materialen onder verschillende
belichtingsomstandigheden. Deze benadering zorgt ervoor dat je 3D-modellen er
realistisch uitzien in zowel huidige als toekomstige renderomgevingen en
softwareplatforms.

Niet alle shaders zijn echter even toekomstbestendig. Traditionele shaders die
gebaseerd zijn op ad-hoc benaderingen van materiaalweergave kunnen snel
verouderd raken en moeilijk te onderhouden zijn naarmate nieuwe
renderingtechnologieën evolueren. Het kiezen van PBR als shader voor 3D Tiles
garandeert niet alleen een hoog niveau van visuele kwaliteit, maar biedt ook een
flexibele basis voor aanpassingen en updates in de toekomst.

### Attribuutgegevens

>   Neem alleen de attributen op die nodig zijn voor visualisatie of voor het
>   opvragen van extra informatie via een andere server.

Het zorgvuldig kiezen van welke attributen worden opgenomen in 3D Tiles-datasets
is van cruciaal belang voor efficiënt gegevensbeheer. Door enkel de essentiële
attributen toe te voegen, wordt onnodige gegevensuitwisseling voorkomen, wat de
prestaties verbetert en de netwerkbelasting vermindert. Daarnaast kan het
selectief opnemen van attributen waarop veelvuldig gefilterd wordt helpen bij
het optimaliseren van de dataset voor specifieke gebruiksscenario's.

Het opvragen van extra informatie via een andere server op basis van een unieke
identificatie biedt real-time toegang tot actuele gegevens. Dit is vooral
gunstig bij dynamische datasets, waarbij voorkomen wordt dat 3D Tiles
herhaaldelijk gegenereerd moeten worden, of in situaties waar een hoge mate van
actualiteit vereist is, zoals bij bepaalde publieke taken, zoals het verstrekken
van toeslagen of vergunningen.

Bovendien maakt deze aanpak gecontroleerde toegang mogelijk op basis van
autorisatie, waardoor bijvoorbeeld de privacy en beveiliging van
persoonsgegevens worden gewaarborgd.

### Formaat

>   Kies GLB als het juiste formaat voor 3D-tiles

GLB, wat staat voor GL Transmission Format Binary, is de gecomprimeerde variant
van GLTF (GL Transmission Format). glTF 2.0 is het primaire tegelformaat voor 3D
Tiles vanaf versie 1.1.

In vergelijking met B3DM heeft GLB verschillende voordelen. Ten eerste wordt
B3DM uitgefaseerd, wat betekent dat het mogelijk niet langer wordt ondersteund
in toekomstige software-updates en ontwikkelingen. Dit kan leiden tot
compatibiliteitsproblemen en beperkte interoperabiliteit met nieuwe platforms en
tools. Dit maakt GLB een toekomstbestendige keuze.

Daarnaast is GLB over het algemeen compacter en efficiënter gecomprimeerd dan
B3DM, wat resulteert in kleinere bestandsgroottes en snellere overdrachtstijden.
Dit maakt het bijzonder geschikt voor webgebaseerde toepassingen en mobiele
platforms waar bandbreedte en laadtijden van cruciaal belang zijn.

Door te kiezen voor GLB vermijdt men potentiële complicaties en
compatibiliteitsproblemen die kunnen ontstaan bij het gebruik van verouderde
formaten zoals 3BM. Dit maakt GLB een verstandige keuze voor het
toekomstbestendig opslaan en uitwisselen van 3D-gegevens.

## Gebruiken van 3D Tiles

### Minimal zoom

>   Stel een minimale zoom in op de client-side voor het laden van 3D
>   Tiles-gegevens.

Het instellen van een minimale zoom op de client-side bij het laden van 3D
Tiles-gegevens is essentieel om de prestaties te optimaliseren en onnodige
belasting van het systeem te voorkomen. Door een minimale zoom in te stellen,
bijvoorbeeld vanaf zoomniveau 14 of hoger, kan worden voorkomen dat er onnodig
veel tegels worden opgehaald en geladen vanaf lagere zoomniveaus zoals 10 of 12.

Dit biedt verschillende voordelen. Ten eerste verkort het de algehele laadtijd
en verbetert het de efficiëntie van de gegevensweergave door alleen tegels vanaf
het gespecificeerde zoomniveau te laden. Vooral bij grote kaart bounding boxes
kan het laden van tegels vanaf lagere zoomniveaus aanzienlijk meer gegevens
vereisen dan nodig is, wat de prestaties nadelig kan beïnvloeden.

Bovendien zijn veel 3D Tiles-sets geoptimaliseerd om vanaf een bepaald
zoomniveau in te laden, zoals bijvoorbeeld geschikt voor zoomniveaus 14, 15 en
16\. Door een minimale zoom in te stellen die overeenkomt met het optimale
zoomniveau van de gegevensset, kan worden gegarandeerd dat alleen de meest
geschikte en gedetailleerde tegels worden geladen voor een optimale
gebruikerservaring.

Kortom, het instellen van een minimale zoom op de client-side is een effectieve
manier om onnodige belasting van het systeem te verminderen, de laadtijd te
verkorten en de efficiëntie van de gegevensweergave te verbeteren, vooral bij
het werken met grote (landsdekkende) en gedetailleerde 3D Tiles-gegevenssets.

### Refinement

Bij Refinement kan tussen de opties Add en Replace gekozen worden, die aan de
hand van onderstaande scenario’s worden toegelicht.

Als je in de verte kijkt, zie je in principe alleen maar grote gebouwen staan.
De kleine zijn niet zichtbaar doordat ze überhaupt te klein zijn of achter een
groter gebouw staan. Je kunt er dan voor kiezen om in de verte alleen grote
gebouwen te tonen. Iets dichterbij wil je alleen de grote en de middelgrote
gebouwen zien. En heel dichtbij ook de kleine gebouwen. Door de Add refinement
te gebruiken, wordt er een tileset aangemaakt met bijvoorbeeld op zoomniveau 14
de grote gebouwen, op zoomniveau 15 de middelgrote gebouwen en op zoomniveau 16
de kleine gebouwen. Elk gebouw komt maar 1x voor in de gehele tileset. Door het
inzoomen worden steeds meer gebouwen toegevoegd aan je view. Een nadeel is dat
het vaak wel opvalt dat er in de verte gebouwen ontbreken.

![Afbeelding met kaart, Luchtfotografie, tekst Automatisch gegenereerde
beschrijving](media/3dc9e29dcf8a1ff351e9706542625e85.jpeg)

Als je in de verte kijkt, zie je weinig detail van gebouwen. Je kunt ervoor
kiezen om de geometrie wat te generaliseren, zodat de tileset minder zwaar
wordt. Bijvoorbeeld op zoomniveau 14 een generalisatie van 5m, op niveau 15 van
2m en op niveau 16 geen generalisatie. Hoe meer je inzoomt, hoe gedetailleerder
een gebouw moet zijn. Wat hier gebeurd is dat elk gebouw op elk zoomniveau
gegenereerd wordt. Elk gebouw komt dus 3x voor. Voordeel is dat je in de verte
altijd alle gebouwen ziet, maar het is vaak lastig in te stellen op welk
zoomniveau, welke generalisatie je toe moet passen. Daardoor blijft de
generalisatie vaak zichtbaar.

![Afbeelding met tekst, tekening, kaart Automatisch gegenereerde
beschrijving](media/b82619b6346f6790901a243e1d9294d0.jpeg)

### 

### Kleur en belichting

>   Neem een lamp achter de viewer op voor voldoende contrast.

Het opnemen van een lamp achter de kijker in een 3D-scene kan aanzienlijk
bijdragen aan het creëren van voldoende contrast en visuele helderheid. Dit is
met name belangrijk in scenario's waarbij de gebruiker interactie heeft met
driedimensionale gegevens, zoals kaarten of modellen. Door een lamp achter de
kijker te plaatsen, wordt de scène gelijkmatig verlicht, waardoor details
duidelijker zichtbaar worden en de visuele ervaring wordt verbeterd.

Voor veel use cases is tijdafhankelijke belichting niet noodzakelijk is. In veel
gevallen gaat het om het presenteren van statische informatie, zoals
kaartbeelden, die consistent moeten blijven, ongeacht het tijdstip van de dag.
Het toevoegen van dynamische verlichtingseffecten, zoals zonlicht dat op
verschillende tijdstippen van de dag verandert, kan overbodig zijn en de
visualisatie voor een toepassing nadelig beïnvloeden.

Daarom is het vaak voldoende om een statische lichtbron achter de kijker op te
nemen, die zorgt voor een gelijkmatige verlichting van de scène zonder rekening
te houden met het tijdstip van de dag. Dit zorgt voor consistente kleuren en
contrasten, wat essentieel is voor een duidelijke en nauwkeurige visualisatie
van de gegevens.

Door te kiezen voor een eenvoudige, statische belichtingsopstelling kunnen
ontwikkelaars de prestaties van hun applicaties verbeteren en tegelijkertijd een
consistente visuele ervaring bieden aan gebruikers, ongeacht het moment waarop
ze de gegevens bekijken.

Let op: Kleur en belichting is ook gerelateerd aan de shader. De shader bepaalt
namelijk de relatie tussen het materiaal op de 3D-objecten en de belichting.

### WCAG

>   Minimaliseer visuele barrières in 3D Tile visualisaties door zo dicht
>   mogelijk bij de Web Content Accessibility Guidelines (WCAG) te blijven.

Hoewel de visualisatie van 3D Tiles zelf (waarschijnlijk) niet volledig aan de
WCAG-richtlijnen hoeft te voldoen, is het toch aan te raden om zo dicht mogelijk
bij deze richtlijnen te blijven. WCAG staat voor de "Web Content Accessibility
Guidelines" en is een reeks richtlijnen voor het verbeteren van de
toegankelijkheid van webinhoud voor mensen met verschillende handicaps,
inclusief visuele, auditieve, motorische, spraak- en cognitieve beperkingen.

Hoewel de visualisatie van 3D Tiles zelf niet altijd gemakkelijk toegankelijk is
voor alle gebruikers, is het van cruciaal belang dat de interactieve elementen
in de browser, zoals knoppen en eventuele testen in pop-ups, voldoen aan de
WCAG-richtlijnen. Deze richtlijnen helpen ervoor te zorgen dat webinhoud voor
iedereen begrijpelijk en bruikbaar is, ongeacht eventuele beperkingen. Het
naleven van deze richtlijnen verbetert niet alleen de gebruikerservaring voor
mensen met handicaps, maar kan ook bijdragen aan een bredere acceptatie en
bruikbaarheid van de applicatie.

### Coördinaten van scherm/terrein en camera/doelobject

>   Houd rekening met coördinaten van scherm/terrein en camera/doelobject

Bij het ontwikkelen van een clienttoepassing met 3D Tiles moet de ontwikkelaar
rekening houden met het verschil tussen schermcoördinaten en terreincoördinaten
bij kaartinteracties zoals klikken op objecten, evenals met de viewpoints
(camerapositie) en focuspoints (doelobject) bij het wisselen tussen 2D en 3D.

Het is essentieel om het verschil tussen schermcoördinaten (x, y) en
terreincoördinaten (geografische coördinaten) te begrijpen bij het implementeren
van klikfunctionaliteit in een kaartvenster met 3D Tiles. Doordat de
schermcoördinaten moeten worden vertaald naar terreincoördinaten, kan het
voorkomen dat een gebruiker op een locatie klikt die overeenkomt met een ander
object dan verwacht, wat tot verwarring kan leiden. Daarom is het nodig om
zorgvuldig om te gaan met de coördinatentransformaties om ervoor te zorgen dat
de juiste objecten worden geselecteerd of aangeklikt.

Bovendien vereist het wisselen tussen 2D- en 3D-weergaven in een
clienttoepassing extra aandacht. Bijvoorbeeld, in een platform zoals Cesium
wordt de 2D-weergave opgebouwd op basis van de camerapositie, niet op basis van
de positie van het object waar naar gekeken werd in de 3D-scene. Dit kan leiden
tot verwarring bij gebruikers, omdat de weergave kan veranderen wanneer er wordt
geschakeld tussen 2D en 3D. Het implementeren van intelligentie en logica om
naadloze overgangen mogelijk te maken tussen 2D- en 3D-weergaven is dus
noodzakelijk om de gebruikerservaring te verbeteren en verwarring te voorkomen.

## Serveren van 3D Tiles

### Valideren van 3D tiles

>   Valideer uw 3D Tilesets

Het is sterk aan te raden om uw 3D Tilesets te valideren voordat ze worden
geserveerd. Het gebruik van een tool zoals de 3D Tiles Validator
(https://github.com/CesiumGS/3d-tiles-validator) kan helpen bij het
identificeren van mogelijke fouten in tilesets voordat ze worden geïntegreerd in
een applicatie. Door uw Tilesets te valideren, kunnen potentiële problemen met
de gegevenskwaliteit, structuur of prestaties opsporen en corrigeren, wat
resulteert in een betere gebruikerservaring en soepele werking van een 3D
Tiles-viewer.

### Compressie

>   Gebruik geometriecompressie in GLB-bestanden

Om de prestaties van uw 3D Tiles-viewer te verbeteren, raden we aan om
geometriecompressie te gebruiken voor GLB-bestanden. Draco en meshopt zijn beide
populaire tools voor geometriecompressie die kunnen helpen om de bestandsgrootte
van uw GLB-bestanden aanzienlijk te verkleinen, terwijl de visuele kwaliteit
behouden blijft. Door geometriecompressie toe te passen, kan de laadtijd van uw
3D-modellen verkorten en de algehele prestaties van 3D Tiles-viewer verbeteren.

Om de laadtijd van uw 3D Tiles verder te verbeteren, raden we aan om
gzip-compressie toe te passen bij het serveren van de 3D Tiles, met name voor
het tileset.json-bestand. Gzip-compressie kan de bestandsgrootte aanzienlijk
verminderen, waardoor de downloadtijd wordt verkort zonder afbreuk te doen aan
de kwaliteit van de gegevens. Dit helpt bij het optimaliseren van de prestaties
van uw 3D Tiles-viewer, vooral bij het laden van grote en complexe datasets.

### OGC API GeoVolumes

>   Serveer 3D Tiles met behulp van OGC API GeoVolumes

Om 3D Tiles efficiënt te serveren met de OGC API GeoVolumes, implementeert u
eerst de OGC API GeoVolumes op de server. Zorg ervoor dat de 3D Tiles-datasets
correct zijn gegenereerd en georganiseerd volgens de specificaties van de OGC
API GeoVolumes. Publiceer vervolgens de 3D Tiles-datasets op uw server volgens
de OGC API GeoVolumes-specificaties, waarbij de endpoints correct geconfigureerd
moeten zijn voor gemakkelijke toegang tot de gegevens door gebruikers.

### Metadata

Publiceer metadata van een 3D Tileset

Het publiceren van metadata van een 3D Tileset, bijvoorbeeld in het Nationaal
Georegister, is essentieel voor het bevorderen van het gebruik en de
vindbaarheid van uw gegevens.

Het is belangrijk om relevante informatie op te nemen, zoals:

\- Coördinatenreferentiesysteem: Beschrijf het coördinatenreferentiesysteem dat
wordt gebruikt voor de 3D Tileset, inclusief de gebruikte eenheden en de
verticale en horizontale datums.

\- Geometrische fout (Geometric Error): Geef de geometrische fout aan die is
toegepast bij het genereren van de 3D Tileset. Dit is belangrijk voor het
beoordelen van de nauwkeurigheid van de gegevens.

\- Brondata voor het genereren van de 3D Tiles: Geef informatie over de brondata
die is gebruikt bij het genereren van de 3D Tileset, zoals de bron van de
terreingegevens, luchtfoto's, satellietbeelden of andere gegevensbronnen.

Door deze informatie op te nemen in de metadata van een 3D Tileset, worden de
gegevens gemakkelijker vindbaar en bruikbaar voor anderen, wat de uitwisseling
en het hergebruik van de 3D informatie bevordert.

*depthTestAgainstTerrain = true;*
