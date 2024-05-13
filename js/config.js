let respecConfig = {
  useLogo: true,
  useLabel: true,
  // title is verplicht! Neem hier de titel van het document op ----------------------
  title: "Handreiking 3D Tiling",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "wv",                   // Werkversie
  //specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                 // Norm
  //specType: "ST",                 // Standaard
  //specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  specType: "HR",                     // HandReiking
  //specType: "WA",                 // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice
  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  //-- zie: https://geonovum.github.io/handleiding-tooling/ReSpec/#pubdomain
  pubDomain: "3d-tiling",
  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  //licence: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //licence: "cc0",                 // Public Domain Dedication
  licence: "cc-by",                 // Attribution, met bronvermelding
  //-- TODO shortName is verplicht! (komt in de URL: kies logische afkorting)--------------
  shortName: "3d-tiling",
  
  //edDraftURI = De URI van de draft version. Deze wordt automatisch afgeleid van de github URI; maar kan hier overschreven worden. 
		//edDraftURI: ["https://geonovum.github.io", "/", "shortName"],

  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2023-03-28",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  //publishVersion: "0.0.2",
  //previousVersion: "0.0.1",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  //previousPublishDate: "2014-05-01",
  //previousMaturity: "CV",
  //-- TODO: de namen van de Editor(s) / Redacteur(en)---------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors:
    [
      {
        name: "Arnoud de Boer",
        company: "Geonovum",
       // companyURL: "https://www.geonovum.nl",
      },
      {
        name: "Michel Grothe",
        company: "Geonovum",
        //companyURL: "https://www.geonovum.nl",
      }
    ],
  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors:
    [
       
{
  name: "André Mulder",
  company: "Gemeente Rotterdam",
  //companyURL: "https://www.rotterdam.nl",
},
{
  name: "Balazs Dukai",
  company: "3DGI",
  //companyURL: "https://3dgi.nl",
},
{
  name: "Bert Temme",
  company: "Geodan",
  //companyURL: "https://www.geodan.nl",
},
{
  name: "Bob Mijwaard",
  company: "Kadaster",
 // companyURL: "https://www.kadaster.nl",
},
{
  name: "Christian Wisse",
  company: "Gemeente Rotterdam",
  //companyURL: "https://www.rotterdam.nl",
},
{
  name: "Corné Helmons",
  company: "Gemeente Rotterdam",
  //companyURL: "https://www.rotterdam.nl",
},
{
  name: "Daan van de Heide",
  company: "Rijkswaterstaat",
 // companyURL: "https://www.rws.nl",
},
{
  name: "Gerbrand Vestjens",
  company: "Kadaster",
  //companyURL: "https://www.kadaster.nl",
},
{
  name: "Gerlof de Haan",
  company: "VNG",
  //companyURL: "https://www.vng.nl",
},
{
  name: "Ioanna Tsakalaki",
  company: "TNO",
 // companyURL: "https://tno.nl",
},
{
  name: "Jeroen Hogeboom",
  company: "Kadaster",
  //companyURL: "https://www.kadaster.nl",
},
{
  name: "Linda Vels",
  company: "Kadaster",
  //companyURL: "https://www.kadaster.nl",
},
{
  name: "Margriet Palm",
  company: "Nelen-Schuurmans",
  //companyURL: "https://nelen-schuurmans.nl",
},
{
  name: "Martijn van Gog",
  company: "Gemeente Amsterdam",
 // companyURL: "https://amsterdam.nl",
},
{
  name: "Ravi Peters",
  company: "3DGI",
 // companyURL: " https://3dgi.nl",
},
{
  name: "Rinaldo Bhailal",
  company: "Kadaster",
  //companyURL: "  https://www.kadaster.nl",
},
],
github: "https://github.com/Geonovum/3d-tiling",
  // Create PDF and link to file in header (optional):
  // TODO: Change the filename as preferred.
  //alternateFormats: [
   //   {
    //      label: "pdf",
    //      uri: "template.pdf",
    //  },
 // ],
};
