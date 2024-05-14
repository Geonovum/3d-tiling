# Toolkit

## Handleidingen

In deze sectie vind je een verzameling handleidingen en how-to's die je
stapsgewijs begeleiden bij het werken met 3D Tiles. Of je nu een beginner bent
die net begint met het gebruik van 3D Tiles of een ervaren ontwikkelaar die op
zoek is naar geavanceerde tips en technieken, deze handleidingen bieden
praktische instructies en voorbeelden om je te helpen bij het maken, laden,
visualiseren en optimaliseren van 3D-gegevenssets met behulp van 3D Tiles.

<https://3dtilesnederland.nl/quick-start-guide/>

<https://github.com/Geodan/mapbox-3dtiles?tab=readme-ov-file>

## Viewers, generators en servers

In deze sectie vind je een overzicht van verschillende viewers en servers die
compatibel zijn met 3D Tiles. Of je nu op zoek bent naar een krachtige 3D-engine
om je 3D Tiles te visualiseren of een robuuste serveroplossing om je gegevens te
hosten, hier vind je een selectie van tools en platforms die je kunnen helpen
bij het werken met 3D Tiles. Van populaire game-engines tot gespecialiseerde
web-based viewers, deze lijst biedt een breed scala aan opties om aan je
specifieke behoeften te voldoen.

Voor een overzicht van nog meer viewers, zie

<https://github.com/pka/awesome-3d-tiles?tab=readme-ov-file>

### Viewers

#### Cesium

Cesium is een krachtige open-source JavaScript-bibliotheek voor het maken van
3D-kaarten in de browser. Het biedt ondersteuning voor het laden en weergeven
van 3D Tiles, waardoor gebruikers complexe 3D-gegevenssets kunnen visualiseren
en analyseren in hun webapplicaties.

<https://github.com/CesiumGS/cesium>

#### MapboxGL

MapboxGL is een JavaScript-bibliotheek die wordt gebruikt voor het maken van
dynamische, interactieve kaarten. Het ondersteunt de weergave van 3D Tiles,
waardoor gebruikers gedetailleerde en realistische 3D-kaarten kunnen maken met
behulp van Mapbox-platform.

<https://github.com/Geodan/mapbox-3dtiles>

#### Unity

Unity is een populaire game-engine die wordt gebruikt voor het maken van 3D- en
2D-games, simulaties en visualisaties. Met de Unity engine kunnen ontwikkelaars
3D Tiles integreren om complexe geografische gegevenssets te visualiseren en
interactieve 3D-omgevingen te creëren.

<https://unity.com/>

#### Unreal Engine

Unreal Engine is een krachtige game-engine die wordt gebruikt voor het maken van
hoogwaardige 3D-content, waaronder games, simulaties en visualisaties. Het
ondersteunt de integratie van 3D Tiles, waardoor ontwikkelaars gedetailleerde en
realistische 3D-omgevingen kunnen maken met behulp van de Unreal Engine.

<https://www.unrealengine.com/>

#### deck.gl

dec**k.gl** is een op WebGL gebaseerde 3D-rendering-engine die wordt gebruikt
voor het maken van geavanceerde 3D-visualisaties in de browser. Het ondersteunt
de weergave van 3D Tiles, waardoor gebruikers gedetailleerde en interactieve
3D-gegevenssets kunnen bekijken en analyseren.

<https://deck.gl/docs/api-reference/geo-layers/tile-3d-layer>

#### Esri JavaScript SDK / ArcGIS Server

De Esri JavaScript API biedt een krachtig platform voor het maken van
webmapping-applicaties. Het ondersteunt de integratie van 3D Tiles, waardoor
ontwikkelaars complexe 3D-gegevenssets kunnen visualiseren en analyseren in hun
webapplicaties.

<https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-IntegratedMesh3DTilesLayer.html>

#### 3d-tiles-renderer

3DtilesRendererJS is een JavaScript-bibliotheek die is ontworpen voor het
renderen van 3D Tiles in webapplicaties. Het biedt ondersteuning voor het laden
en weergeven van 3D-gegevenssets, waardoor ontwikkelaars gedetailleerde en
interactieve 3D-visualisaties kunnen maken in de browser.

<https://github.com/NASA-AMMOS/3DTilesRendererJS>

### Generators en servers

#### pg2b3dm

pg2b3dm is een tool waarmee 3D-geometrieën vanuit PostGIS kunnen worden omgezet
naar 3D Tiles. De gegenereerde 3D Tiles kunnen worden gevisualiseerd in Cesium
JS, Cesium for Unreal, Cesium for Unity3D, Cesium for Omniverse, QGIS, ArcGIS
Pro, ArcGIS Maps SDK for JavaScript, Mapbox GL JS v3 (experimenteel) of andere
3D Tiles client viewers.

<https://github.com/Geodan/pg2b3dm>

#### VCS

Virtual City Systems biedt een krachtige tool voor het genereren van 3D Tiles
genaamd "CityServer3D". Met CityServer3D kunnen gebruikers eenvoudig 3D-gegevens
van verschillende bronnen importeren en converteren naar het 3D Tiles-formaat.
De gegenereerde 3D Tiles kunnen vervolgens worden geïntegreerd in verschillende
3D-georuimtelijke toepassingen en worden gevisualiseerd in populaire 3D
Tiles-clients zoals Cesium, Mapbox GL JS en andere. CityServer3D biedt ook
geavanceerde functionaliteiten voor het beheren, analyseren en presenteren van
3D-gegevens op schaalbare en efficiënte wijze.

<https://vc.systems/en/>

#### 3D GeoVolumes

De OGC API – 3D GeoVolumes is een krachtige serveroplossing voor het serveren
van 3D Tiles. Met deze server kunnen 3D-gegevenssets efficiënt worden gehost en
toegankelijk gemaakt voor gebruik in verschillende 3D-applicaties. Door het
gebruik van de OGC API-standaard kunnen 3D Tiles datasets eenvoudig worden
gepubliceerd en gedeeld met andere gebruikers. GeoVolumes biedt een robuuste
infrastructuur voor het leveren van 3D-gegevens op schaal, waardoor het ideaal
is voor het hosten van grote 3D-modellen en het ondersteunen van geavanceerde
3D-toepassingen.

<https://ogcapi.ogc.org/geovolumes/>

## 3D Tile Datasets en websites

### 3D basisvoorziening Kadaster

De 3D Basisvoorziening van het Kadaster is beschikbaar op schaalniveaus tussen
1:500 en 1:10.000. De gegevens worden geleverd als dataset per kaartblad,
waarbij u zelf het gewenste kaartblad kunt selecteren op de kaart van Nederland.
De gegevens worden geleverd in een zip-bestand, waarin een CityJSON-bestand is
opgenomen. Een kaartbladbestand van het 3D Basisbestand Volledig is ongeveer
200-700 MB groot. De kaartbladbestanden van het 3D Basisbestand Gebouwen zijn
aanzienlijk kleiner, terwijl het 3D Hoogtestatistieken Gebouwen als één bestand
voor heel Nederland wordt geleverd in GeoPackage 1.2.

De 3D Basisvoorziening kan worden toegepast voor verschillende doeleinden, zoals
het maken van 3D-visualisaties, het uitvoeren van analyses van geluidsmodellen,
schaduwanalyses, analyse van zonnepotentie en afwateringsberekeningen. Het vormt
tevens een belangrijke basis voor gemeenten bij de planvorming en uitvoering van
projecten in het kader van de nieuwe Omgevingswet. Daarnaast is het een
waardevol visueel hulpmiddel in de communicatie met burgers over de impact van
plannen op de omgeving.

<https://api.pdok.nl/kadaster/3d-basisvoorziening/ogc/v1_0>

### 3D Tiles Nederland

3DTilesNederland.nl is een samenwerkingsverband tussen de Vereniging van
Nederlandse Gemeenten (VNG) en de gemeenten Rotterdam, Amsterdam en Den Haag. De
website zet zich in om het verzamelen, beheren en benutten van 3D-data binnen
gemeenten te bevorderen en te ondersteunen.

Het streven is om gemeenten te helpen bij het gestandaardiseerd beschikbaar
stellen van lokaal ingewonnen 3D-data door gebruik te maken van de
internationale 3D Tiles-standaard. De website biedt praktische handleidingen,
instructies en ondersteuning voor het maken, publiceren en delen van
gedetailleerde 3D-modellen van steden, inclusief praktische informatie over het
benaderen van gepubliceerde 3D-data.

Daarnaast biedt 3DTilesNederland.nl verschillende tools zoals CesiumJS, Unreal
en Unity (Netherlands 3D) waarmee gemeenten realistische virtuele tours,
simulaties en trainingen kunnen ontwikkelen om burgers te informeren en
betrekken bij stadsplanning en andere gemeentelijke projecten.

<https://3dtilesnederland.nl/3d-tilesets/>

### Netherlands3D

Netherlands3D is een open-source Digitaal Twin-framework dat is ontworpen voor
Nederland. Met Netherlands3D kun je gedetailleerde, op data gebaseerde modellen
maken door middel van data visualisatie.

<https://netherlands3d.eu/>
