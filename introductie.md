# Inleiding

## Aanleiding

De handreiking 3D Tiles heeft tot doel bij te dragen aan het breder gebruik van
3D data in Nederland met de adoptie van 3D Tiles in het bijzonder. Door best
practises (praktische richtlijnen) te bieden voor de implementatie van 3D Tiles,
kunnen verschillende systemen en softwareoplossingen (tools) beter met elkaar
samenwerken, wat cruciaal is voor de uitwisseling van de visualisaties van 3D
data in GIS applicaties en digital twins. Via de best practises biedt de
handreiking mogelijkheden voor bredere acceptatie en verspreiding van 3D Tiles
binnen de Nederlandse gebruiksgemeenschap en vele verschillende belanghebbende
organisaties.

Deze handreiking is tot stand gekomen door de inbreng van expertise en
ervaringen van diverse experts en ‘early adopters’ van 3D Tiles in Nederland. De
kennis en ervaringen zijn vanuit diverse publieke en private organisaties is
bijeengebracht in diverse best practises voor 3D Tiles. Door het stimuleren van
best practices en het delen van deze kennis kan de handreiking innovatie
bevorderen en nieuwe toepassingen en gebruiksscenario’s inspireren. De
handreiking 3D Tiles draagt daarmee bij aan het bevorderen van een beter begrip,
bredere adoptie en effectievere toepassing van 3D Tiles en de bijhorende
technologieën en tools. En met enkele voorbeeldtoepassingen wordt in dit
hoofdstuk de waarde van 3D data en 3D Tiles geïllustreerd.

## Wat is 3D Tiling?

Simpel gezegd: 3D Tiling is een techniek waarbij tegels met drie-dimensionale
data worden geserveerd van een server naar een client.

In computer graphics en 3D visualisatie is 3D Tiling een techniek die wordt
gebruikt om grote volumes ruimtelijke data efficiënt aan te bieden via het web.
Net als bij 2D Vector Tiles, waarbij een tweedimensionaal oppervlak wordt
verdeeld in kleinere tegels voor eenvoudigere verwerking, breidt 3D Tiling dit
concept uit naar drie dimensies, waardoor het streamen van complexe 3D-datasets
mogelijk wordt.

## Waar is 3D Tiling voor te gebruiken?

De toepassingen van 3D tiling bestrijken tal van domeinen, waaronder 3D
visualisaties voor stadsplanning, architectuur, gaming, virtual reality en
simulatie. Bijvoorbeeld, in georuimtelijke mapping maakt 3D tiling de
visualisatie mogelijk van gedetailleerde terreinmodellen, gebouwen en
infrastructuur in realtime of bijna-realtime omgevingen. In gaming en virtual
reality vergemakkelijkt het het renderen van meeslepende 3D-omgevingen met een
hoog niveau van detail en interactiviteit.

## Wat zijn de voor- en nadelen van 3D Tiling?

3D tiling biedt aanzienlijke voordelen voor het beheren en visualiseren van
grote en complexe datasets. Door gegevens op te delen in kleinere, beheersbare
tegels, kunnen deze efficiënter gestreamd en gerenderd worden. Dit zorgt voor
betere prestaties en een responsievere weergave van de data. Standaarden zoals
3D Tiles en de OGC 3D Tiles API bevorderen de interoperabiliteit tussen
verschillende softwareplatforms, wat naadloze integratie en uitwisseling van
3D-gegevens mogelijk maakt. Bovendien zijn 3D tiling technieken flexibel
aanpasbaar aan verschillende toepassingen en omgevingen, wat ontwikkelaars en
gebruikers veel ruimte geeft voor maatwerk.

Er zijn echter ook enkele nadelen verbonden aan 3D tiling. Het implementeren van
deze oplossingen vraagt om specialistische kennis op het gebied van ruimtelijk
gegevensbeheer, rendering-algoritmen en optimalisatietechnieken, wat de
complexiteit van ontwikkelingsprojecten kan verhogen. Daarnaast kan het opslaan
van getilede datasets meer opslagruimte vereisen dan ruwe gegevensformaten,
vooral als er verschillende niveaus van detail worden gebruikt. Het tiling
proces zelf kan ook extra verwerkingskracht vereisen, wat vooral merkbaar is bij
dynamische of streamende datasets. Ten slotte kan het waarborgen van
compatibiliteit en naleving van 3D tiling standaarden over verschillende
softwareplatforms en ecosystemen uitdagingen met zich meebrengen.

Samengevat biedt 3D tiling grote voordelen voor het efficiënt beheren en
visualiseren van 3D gegevens, maar het brengt ook uitdagingen met zich mee op
het gebied van complexiteit, opslag, verwerking en standaardisatie. Door deze
uitdagingen aan te pakken en gebruik te maken van gestandaardiseerde
specificaties zoals 3D Tiles en de OGC 3D Tiles API, kunnen ontwikkelaars de
voordelen van 3D tiling benutten om de efficiëntie en effectiviteit van hun
toepassingen en workflows te verbeteren.

## Welke standaarden zijn er voor 3D tiling?

Voor het serveren van 3D Tiles zijn er in het algemeen twee standaarden.

### OGC 3D Tiles specification

[OGC 3D Tiles](https://docs.ogc.org/cs/22-025r4/22-025r4.html) is een OGC community standaard
voor het efficiënt streamen en renderen van grote driedimensionale
ruimtelijke datasets, waaronder 3D objecten, fotogrammetrie, BIM/CAD-modellen en puntenwolken.
Het definieert een gegevensstructuur en tegelformaten voor renderbare inhoud
zonder strikte visualisatieregels.

3D Tiles is ontwikkeld door Cesium en wordt beheerd door het Open Geospatial Consortium (OGC).  

Een 3D Tiles-dataset (tileset) bevat diverse tegelformaten georganiseerd in een
ruimtelijke structuur. Het is declaratief, uitbreidbaar en geschikt voor
verschillende soorten 3D-gegevens. De tegelformaten omvatten batched
3D-modellen, geïnstantieerde 3D-modellen, puntenwolken en samengestelde tegels.

De specificatie omvat ook 3D Tile Styles voor declaratieve styling van
tegelsets. Het is een open formaat dat niet gebonden is aan specifieke
leveranciers of technologieën.

### i3S

[I3S](https://www.ogc.org/standard/i3s/) staat voor Indexed 3D Scene Layer en is
een open standaard die is ontwikkeld door Esri voor het efficiënt opslaan, delen
en weergeven van grote en complexe driedimensionale georuimtelijke gegevens. Het
is tevens net als 3D Tiles een community standaard van het Open Geospatial Consortium (OGC) en wordt
vaak gebruikt binnen de GIS-gemeenschap.

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
softwareleveranciers kan worden geïmplementeerd en gebruikt.

<aside class='note' title="Scope afbakening OGC 3D Tiles">
    In deze handreiking richten we ons voornamelijk op de standaard OGC 3D Tiles. De keuze voor OGC 3D Tiles is gemaakt vanwege de brede ondersteuning en interoperabiliteit die deze standaard biedt binnen verschillende softwareplatforms en ecosystemen. Hoewel andere formaten zoals i3S ook waardevolle toepassingen hebben, biedt OGC 3D Tiles momenteel een meer universele benadering voor het beheren en visualiseren van 3D-ruimtelijke gegevens.
</aside>


## Praktijkvoorbeelden

De toepassing van 3D Tiles vinden we al terug in verschillende applicaties en 3D
digital twins. Ter illustratie zijn hieronder zijn voorbeelden opgenomen van
enkele Nederlandse toepassingen die 3D Tiles voor de 3D visualisatie gebruiken.

### BRO circulaire grondstromen

3D Tiles worden gebruikt in de toepassing Circulaire Grondstromen (BRO
praktijkvoorbeeld) om complexe en gedetailleerde 3D informatie over grond- en
bouwmaterialen efficiënt te visualiseren en te beheren. Dit helpt bij het
monitoren, plannen en optimaliseren van het hergebruik van materialen binnen een
circulaire economie. Door 3D Tiles in te zetten, kunnen verschillende
stakeholders eenvoudig toegang krijgen tot actuele en nauwkeurige data, wat
bijdraagt aan een beter begrip van materiaalstromen en bevordert de samenwerking
tussen partijen (zie figuur 1). 

<figure id="Figuur_x">
<a href="media/geodan image2.png" target="_blank"><img src="media/geodan image2.png" alt=""></a>
<figcaption>3D Tiles weergave bij BRO praktijkvoorbeeld Circulaire Grondstromen (bron: Geodan)</figcaption>
</figure>

In de toepassing Circulaire Grondstromen gemaakt met CesiumJS
zorgt 3D Tiles ervoor dat de prestaties van de webviewer worden gemaximaliseerd.
Het proces van het converteren van data naar 3D-tegels binnen de toepassing
Circulaire Grondstromen varieert afhankelijk van de databron (zie figuur 2); de
3D tegels worden toegepast voor diverse typen data, zoals het DTB, puntenwolken,
basisregistraties en BRO modellen en orthofoto’s.

<figure id="Figuur_x">
<a href="media/geodan image1.png" target="_blank"><img src="media/geodan image1.png" alt=""></a>
<figcaption>3D Tiles gebruik bij BRO praktijkvoorbeeld Circulaire Grondstromen (bron: Geodan)</figcaption>
</figure>

Bronnen: [BRO praktijkvoorbeeld circulaire
grondstromen](https://basisregistratieondergrond.nl/doe-mee/begin-dag-bro-tje/bro-tjes-2024/11-januari-2024/datagedreven-duurzamer-her-gebruik-grond/),
[Storymap over circulaire
grondstromen](https://grondstromen.beta.geodan.nl/?story=circulaire%20grondstromen).

### 3D Rotterdam

De gemeente Rotterdam stelt het 3D-stadsmodel van Rotterdam vrij ter beschikking aan iedereen die daarmee aan de slag wil gaan. De gemeente wil hiermee het gebruik en toepassingen van deze unieke dataset stimuleren bij scholen en universiteiten, overheids- en Rotterdamse diensten, gamers, het bedrijfsleven uit binnen- en buitenland maar ook bewoners. Zij kunnen met de juiste tools Rotterdam op een manier in beeld brengen die op een platte kaart onmogelijk is. Rotterdam 3D is een driedimensionale (3D) weergave van de gemeente gebaseerd op tweedimensionale (2D) kaarten, hoogtemetingen, luchtfoto’s en beheergegevens. Rotterdam 3D (zie figuur ?) maakt gebruik van 3D Tiles en bestaat niet alleen uit gebouwen. Ook bomen, lantaarnpalen en kabels en leidingen zijn inmiddels in 3D en via 3D Tiles beschikbaar. Tilesets van Rotterdam 3D zijn ook te downloaden via [link](https://3dtilesnederland.nl). Het toegankelijk maken van Rotterdam 3D biedt Rotterdammers de mogelijkheid mee te bouwen aan de stad. De gegevens zijn daarom compleet, actueel en gratis voor hergebruik.

In de onderstaande figuren zijn enkele voorbeelden opgenomen van het 3D Tiles in Rotterdam 3D. In figuur 3 zijn de getextureerde gebouwen tezamen met de getextureerde bomen op een luchtfoto afgebeeld. Hierdoor creëer je al snel een ‘realistisch’ digitaal beeld van de stad.

<figure id="Figuur_x"> 
<a href="media/rotterdam image1.png" target="_blank"><img src="media/rotterdam image1.png" alt=""></a>
<figcaption>3D Tiles visualisatie van getextureerde gebouwen en bomen in Rotterdam 3D</figcaption>
</figure>

Benieuwd of er nog een plaatsje vrij is onder de straat voor een ondergrondse vuilcontainer? 3D Rotterdam biedt de mogelijkheden voor een kijkje in de ondergrond (figuur 4).

<figure id="Figuur_3"> 
<a href="media/rotterdam image2.png" target="_blank"><img src="media/rotterdam image2.png" alt=""></a>
<figcaption>Een 3D Tiles kijkje in de Rotterdamse ondergrond</figcaption>
</figure>

Met behulp van een 3D viewer, die alleen beschikbaar is voor de medewerkers van de gemeente Rotterdam, zorgt 3D Tiles ervoor dat de medewerkers snel en intuïtief gegevens kunnen ophalen van assets in de stad. Dit behelst niet alleen gebouwen maar ook straatmeubilair, groenvoorziening, etc.. Vanuit het gemeentelijk datafundament, waarin onder andere de BAG, de BGT, de WOZ, de TIR en de BOR zijn opgenomen, kunnen data analyses in samenhang worden uitgevoerd en vragen worden beantwoord, zoals hoeveel hoekwoningen een wijk heeft (figuur 5) of welke panden bevatten specifieke materialen in het dak? Ook het vergelijken van panden en hun attributen uit verschillende registraties WOZ en BAG: Welke object pas niet in het rijtje? (figuur 5). 

<figure id="Figuur_x"> 
<a href="media/rotterdam image3.png" target="_blank"><img src="media/rotterdam image3.png" alt=""></a>
<figcaption>Alle hoekwoningen in de wijk Ommoord</figcaption>
</figure>

De 3D tilesets bevatten ook panden als geheel en kunnen de verblijfsobjecten in de toekomst ook identificeren en informatie over de verblijfsobjecten opvraagbaar maken (zie figuur 6).

<figure id="Figuur_x"> 
<a href="media/rotterdam image4.png" target="_blank"><img src="media/rotterdam image4.png" alt=""></a>
<figcaption>3D Tiles ingezet voor het vergelijken van pandattributen uit WOZ en BAG</figcaption>
</figure>

Bronnen: [www.3drotterdam.nl](http://www.3drotterdam.nl)


### Wateroverlast door extreme buien

De hydrodynamische modelleringssoftware 3Di wordt, onder andere, gebruikt voor het voorspellen van wateroverlast. De software kan de effecten van hevige neerslag, en of een dijkdoorbraak in kaart brengen. . De rekenmodellen zijn opgebouwd uit gedetailleerde 2D informatie, zoals de hoogte van het maaiveld. Maar kunnen ook uitgebreid worden met 1D om bijvoorbeeld in de stad de riolering op een goede manier mee te nemen. Deze combinatie levert een hoge nauwkeurigheid en vergroot de toepasbaarheid.
 
Met behulp van 3D Tiles kan wateroverlast gevisualiseerd in een realistische 3D omgeving waardoor ook niet-water-experts deze resultaten gemakkelijk kunnen interpreteren (zie figuur 7). Denk hierbij aan bv besluitvormers die ten tijde van een calamiteit onder grote druk keuzes moeten maken. Beleidsmakers die door de steeds meer integrale aanpak met meerdere domeinen te maken krijgen. Maar ook aan burgers die geïnformeerd worden over beleid en waarbij de 3D omgeving ook kan ondersteunen in het vegroten van klimaatbewustzijn.

<figure id="Figuur_x"> 
<a href="media/3Di image1.png" target="_blank"><img src="media/3Di image1.png" alt=""></a>
<figcaption>3D Tiles ingezet voor het weergegeven van waterhoogtes (bron: Imagem)</figcaption>
</figure>

Om deze 3D Tiles te kunnen gebruiken moeten de waterhoogte die 3Di voorspelt omgezet worden in ruimtelijke objecten die gerepresenteerd kunnen worden als 3D Tiles. De waterhoogte die 3Di voorspelt beschrijft de waterhoogte in een vierkant gebiedje. Door middel van interpolatie en triangulatie wordt dit omgezet in een 3D mesh en deze mesh wordt dan gerepresenteerd als 3D Tiles. Deze stappen kunnen worden uitgevoerd tijdens of na de simulatie voor iedere tijdsstap die gesimuleerd wordt.

Wanneer deze 3D Tiles zijn gegenereerd worden deze weergegeven in de 3D representatie van de omgeving. Er is gekozen om zo min mogelijk styling informatie aan de 3D Tiles toe te voegen; dit wordt overgelaten aan de visualisatiesoftware. Door hierin dezelfde hoogtekaart te gebruiken als in de simulatie zal alleen water dat boven het maaiveld uitkomt zichtbaar zijn. De resultaten van meerdere tijdstappen zijn beschikbaar waardoor het verloop van de wateroverlast over de tijd gevisualiseerd kan worden. Dit geeft inzicht in de duur van de overlast en de snelheid waarmee de overlast verdwijnt.

Bronnen: [3Di watermanagement](https://3diwatermanagement.com/)


### Visualisatie doorrijprofielen

Voor het bepalen van de status van de verschillende assets van Rijkswaterstaat,
worden planimetrische en hoogte-informatie gecombineerd (3D) toegepast. Een
voorbeeld hiervan is het schouwen, inwinnen en valideren van de vrije ruimtes
tussen het wegdek en een asset binnen het brongebied van RWS. Dit doet RWS in
opdracht van de RDW, en zorgt ervoor dat er een veilige doorgang gegarandeerd is
voor persoon, vracht en speciaal vervoer. RWS voert zelf geen data inwinning
uit, en is daarom afhankelijk van de data die geleverd wordt vanuit de
leveranciers.

Hiervoor zijn er eisen gesteld aan de vrije ruimtes, waarbij voor de
hoogtemetingen een relatieve afwijking van 1 cm is vastgesteld (zie ook bronen onder). 
Omdat deze metingen vaak op snelwegen worden uitgevoerd, kiezen leveranciers
steeds vaker voor het inwinnen van de vrije ruimte met behulp van mobile
laserscanning. Mede doordat dit een efficiënte en veilige methode van inwinning
is. De meting resulteert in een puntenwolk dataset van een asset, waarna de
vrije ruimtes vervolgens worden geconverteerd naar fotobestanden voor een
weergave van de omgeving.

Voor het valideren van de fotobestanden van de leverancier wordt gebruikgemaakt
van 3D-software die ontwikkeld is door de TU Delft en Rijkswaterstaat (zie bronnen onder).
Deze software wordt ingezet om met alternatieve puntenwolken
vergelijkingsmateriaal van hetzelfde asset te maken. Dit stelt Rijkswaterstaat
in staat om het geleverde fotomateriaal te controleren en te verifiëren of de
omschrijvingen in de bewijsvoering (kwaliteitsrapportage) overeenkomen.

De software is gebaseerd op het feit dat het wegdek en het brugdek/portaal
voldoende gesegmenteerd kan worden uit de data, en dat doormiddel van B-splines
een schatting gemaakt kan worden van de onderkant van het object. De resultaten
kunnen op twee manieren worden weergegeven: via de dwarsdoorsnede (figuur 8A) of
doormiddel van de voxels van het gehele wegdek (figuur 8B).

<figure id="Figuur_X"> 
<a href="media/726ce491e4eb25da71ea0c1ec6e1d99c.png" target="_blank"><img src="media/726ce491e4eb25da71ea0c1ec6e1d99c.png" alt=""></a>
<figcaption>3D Tiles weergave van het wegdek via dwarsdoorsnede en voxels van het gehele wegdek (bron: Rijkswaterstaat) </figcaption>
</figure>

Figuur B laat het belang zien van het ontsluitingsvraagstuk van dit type dataset
naar de verschillende projectteams en afdelingen binnen Rijkswaterstaat. Dit
stelt een projectteam in staat om een schatting te maken van de verandering van
een asset over tijd, zodat gerichte data inwinning kan plaatsvinden in opdracht
van RWS wanneer een asset zich in een kritieke toestand bevindt. Daarnaast
krijgt de gebruiker ook een inschatting in 3D om te bepalen of een speciaal
transport zich veilig door Nederland kan verplaatsen.

Bronnen: [Data-eisen doorrijprofielen](https://www.rijkswaterstaat.nl/zakelijk/zakendoen-met-rijkswaterstaat/werkwijzen/werkwijze-in-gww/data-eisen-rijkswaterstaatcontracten/doorrijprofielen), [Clearance Measurement Validation For Highway Infrastructure With Use of LiDAR Point Clouds](https://repository.tudelft.nl/record/uuid:ca9254d6-0f7b-4999-b62a-763eb5c95397)