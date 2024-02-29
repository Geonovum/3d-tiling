# Standaarden

Dit hoofdstuk gaat in op enkele standaarden en techniek voor 3D Tiling.

Voor het serveren van 3D Tiles zijn er in het algemeen twee standaarden.

## OGC 3D Tiles specification

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

## i3S

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
