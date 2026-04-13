# De Zonnestrategie — Project Briefing voor Claude Code

## 1. Projectoverzicht

**Projectnaam:** De Zonnestrategie (voorheen SlimTerugleveren)
**Domein:** dezonnestrategie.nl (nog te claimen, favoriet) — alternatief: slimterugleveren.com
**Huidige status:** Prototype live op Netlify (helpful-heliotrope-47b3ad.netlify.app)
**Doel:** Onafhankelijk adviesplatform over zonnepanelen, de Energiewet en slim omgaan met energie. Geen affiliate-model — reputatie en autoriteit opbouwen staat voorop. Geld verdienen komt later, als het organisch past.
**Eigenaar:** Thierry Boonstra — belastingadviseur M&A bij JSA Tax, oprichter The Innovative Lawyer
**Taal:** Nederlands

---

## 2. Oorsprong en context

Het project is ontstaan uit een academische paper van Thierry: "Van passieve eindafnemer naar actieve marktdeelnemer", over de nieuwe Energiewet 2026 en de mogelijkheden voor particulieren om stroom te delen, te verkopen en op te slaan. De paper is vertaald naar een consumentenwebsite die het verhaal vertelt van:
- **Het probleem:** de salderingsregeling stopt per 1 januari 2027
- **Het nieuwe kader:** de Energiewet 2026 maakt je een "actieve afnemer"
- **De oplossingen:** dynamisch contract, thuisbatterij, ERE-credits, energiedelen, P2P-handel

De site biedt onafhankelijke voorlichting en eerlijk advies — inclusief het advies om soms niets te doen.

### Positionering
De Zonnestrategie onderscheidt zich van bestaande energiesites door:
- **Geen commercieel belang:** geen affiliate-links, geen gesponsorde aanbevelingen. Alle doorverwijzingen zijn informatief.
- **Juridische onderbouwing:** Thierry heeft een juridische/fiscale achtergrond en kan de Energiewet op een niveau uitleggen dat andere consumentensites niet kunnen.
- **Eerlijkheid over beperkingen:** de site zegt ook wanneer iets niet loont, wanneer wetgeving nog niet operationeel is, en wanneer "afwachten" het beste advies is.

---

## 3. Wat er al gebouwd is

### 3.1 Landingspagina (HTML)
Een volledige single-page HTML website met:
- Hero-sectie met value proposition
- Tijdlijn (1998 → 2027)
- Drie opties uitgelegd (dynamisch contract, thuisbatterij, energiedelen/P2P)
- Interactieve besparingscalculator (twee stappen):
  - Stap 1: "Wat kost het stoppen van saldering jou?" (sliders: panelen, verbruik, stroomtarief, verwachte terugleververgoeding)
  - Stap 2: "Zo verdien je het terug" (toggles: dynamisch contract, thuisbatterij, P2P)
- FAQ met accordeons
- Schema.org markup (WebSite + FAQPage)
- Responsive design
- Scroll-animaties

**Aan te passen bij migratie:**
- Partnersectie omzetten van affiliate-cards naar informatieve vergelijking (geen tracking links)
- Rekentool uitbreiden met een "doe niets"-uitkomst voor situaties waar actie niet loont
- CTA's aanpassen: van "bekijk aanbieder" naar "lees meer" / "bereken je situatie"
- Affiliate-disclaimer verwijderen, vervangen door "over ons" met uitleg van onafhankelijkheid

### 3.2 Blogartikelen — Fase 1: Kernverhaal (6 stuks, geschreven, klaar)

1. **Salderingsregeling stopt in 2027 — wat betekent dat voor jou?** (pillar page)
   - Zoektermen: "salderingsregeling stopt wat nu", "terugleververgoeding 2027 berekenen"
   - Bevat: rekenvoorbeeld, vier strategieën, concrete cijfers

2. **De nieuwe Energiewet: van stroomverbruiker naar stroomondernemer**
   - Zoektermen: "Energiewet 2026 particulieren", "energiedelen zonnepanelen"
   - Bevat: drie nieuwe mogelijkheden (energiedelen, P2P, flexibiliteit), eerlijke nuancering
   - NB: wordt later uitgebouwd tot hub-pagina van de Energiewet-kennisbank

3. **Dynamisch energiecontract met zonnepanelen: slim of risicovol?**
   - Zoektermen: "dynamisch contract zonnepanelen voordeel", "beste dynamische energieleverancier"
   - Bevat: hoe het werkt, nadelen eerlijk benoemd, combinatie met thuisbatterij

4. **Thuisbatterij in 2026: loont het en hoe bereken je de terugverdientijd?**
   - Zoektermen: "thuisbatterij terugverdientijd 2026", "thuisbatterij btw terugvragen"
   - Bevat: rekensom, BTW-truc via KOR, wanneer het niet loont

5. **ERE-credits: geld verdienen met je laadpaal (en bijna niemand weet het)**
   - Zoektermen: "ERE-credits aanvragen", "geld verdienen met laadpaal thuis"
   - Bevat: uitleg RED3-richtlijn, MID-meter, inboekdienstverleners, rekenvoorbeeld

6. **Zonnepanelen kopen in 2026: loont het nog?**
   - Zoektermen: "zonnepanelen kopen 2026 rendabel", "terugverdientijd zonder saldering"
   - Bevat: drie doorgerekende scenario's (minimaal/slim/optimaal)

### 3.3 Contentplan — Fase 2: Energiewet-kennisbank (13 artikelen, nog te schrijven)

#### Cluster 1: De basis — wat is er veranderd?

7. **"Van netbeheerder tot systeembeheerder: de nieuwe energietermen uitgelegd"**
   - Zoektermen: "energiewet nieuwe termen", "systeembeheerder netbeheerder verschil"
   - Alle nieuwe begrippen vertaald naar gewoon Nederlands. Referentie-artikel.

8. **"Je nieuwe rechten als energieconsument sinds 2026"**
   - Zoektermen: "consumentenrechten energiewet", "opzegvergoeding energiecontract regels"
   - Opzegboetes, contracttransparantie, modelcontracten, faillissementsbescherming, verbod negatieve terugleververgoeding.

9. **"De slimme meter wordt verplicht: wat je moet weten"**
   - Zoektermen: "slimme meter verplicht 2026", "analoge meter vervangen"
   - Verschil slim vs. digitaal, waarom essentieel voor energiedelen/dynamisch contract.

#### Cluster 2: Energiedelen — de kern van de paper

10. **"Energiedelen uitgelegd: stroom delen met buren, familie of je VvE"**
    - Zoektermen: "energiedelen hoe werkt het", "stroom delen buren"
    - Wat mag er, hoe werkt verrekening, voorwaarde (zelfde leverancier). Eerlijk over wat al kan en wat niet.

11. **"Een energiegemeenschap oprichten: stap voor stap"**
    - Zoektermen: "energiegemeenschap oprichten", "energiecoöperatie starten"
    - Rechtsvorm (coöperatie), statuten, NEN-certificering, aanmelden netbeheerder, verdeelsleutel. Praktijkvoorbeelden (Local4Local, Rivierenland).

12. **"Peer-to-peer stroom verkopen: wat kan er nu echt?"**
    - Zoektermen: "stroom verkopen particulier", "peer-to-peer energie Nederland"
    - Wet maakt het mogelijk, markt staat in kinderschoenen. Welke platforms, wat heb je nodig, wat is realistisch?

13. **"Energiedelen vs. P2P vs. terugleveren: wat is het verschil?"**
    - Zoektermen: "verschil energiedelen peer-to-peer"
    - Drie concepten, drie situaties, drie uitkomsten. Opheldert wijdverspreide begripsverwaring.

#### Cluster 3: Specifieke groepen

14. **"Zonnepanelen en je VvE: de nieuwe mogelijkheden onder de Energiewet"**
    - Zoektermen: "VvE zonnepanelen energiewet", "energiedelen VvE appartement"
    - Energiegemeenschap binnen VvE, splitsingsakte, opbrenstverdeling.

15. **"Huurder met zonnepanelen: wat verandert er voor jou?"**
    - Zoektermen: "huurder zonnepanelen rechten", "energiedelen huurder"
    - Profiteren van zonne-energie op dak complex zonder eigen panelen.

16. **"ZZP'er en de Energiewet: micro-onderneming of huishouden?"**
    - Zoektermen: "ZZP energiewet", "micro-onderneming energiecontract"
    - Welke rechten, welk contracttype, grijs gebied thuiskantoor.

#### Cluster 4: Toekomst en flexibiliteit

17. **"Flexibiliteit verkopen met je thuisbatterij: hoe werkt aggregatie?"**
    - Zoektermen: "flexibiliteit verkopen thuisbatterij", "aggregatie energie particulieren"
    - Vraagrespons, aggregators, welke batterijen ondersteunen dit.

18. **"Netcongestie: waarom het stroomnet vol zit en wat jij eraan kunt doen"**
    - Zoektermen: "netcongestie uitgelegd", "stroomnet vol oplossing"
    - Achtergrondverhaal: waarom de Energiewet er is. Geeft context aan alles.

19. **"Wat komt er nog? De AMvB, het EMD-pakket en de toekomst van energiedelen"**
    - Zoektermen: "Energiebesluit AMvB", "EMD-pakket Nederland"
    - Wat nog niet af is, wat nog door parlement moet. Regelmatig updaten.

### 3.4 Contentplan — Fase 3: Praktische verdieping (10 artikelen, nog te schrijven)

20. Welke energieleverancier is het beste voor zonnepanelen in 2027?
21. Stekker-thuisbatterij vs. vaste installatie: wat past bij jou?
22. Zonnepanelen en een warmtepomp: de ideale combinatie?
23. Slim laden: je EV opladen met je zonnepanelen
24. Hoeveel zonnepanelen heb ik nodig? De rekensom voor 2026
25. Zonnepanelen op een plat dak: opbrengst, kosten en aandachtspunten
26. Wat als de terugleververgoeding naar nul gaat na 2030?
27. De complete checklist: zonnepanelen kopen zonder fouten
28-29. Twee onderwerpen naar keuze op basis van zoektrends

---

## 4. Publicatieschema

### Fase 1: Kernverhaal (week 1-6, start nu)
Eén artikel per week. De zes bestaande blogs:

| Week | Artikel | Bestand |
|------|---------|---------|
| 1 | Salderingsregeling stopt in 2027 | blog-1-salderingsregeling.md |
| 2 | De nieuwe Energiewet | blog-6-energiewet.md |
| 3 | Dynamisch energiecontract | blog-3-dynamisch-contract.md |
| 4 | Thuisbatterij terugverdientijd | blog-2-thuisbatterij.md |
| 5 | ERE-credits | blog-4-ere-credits.md |
| 6 | Zonnepanelen kopen in 2026 | blog-5-zonnepanelen-2026.md |

### Fase 2: Energiewet-kennisbank (week 7-19)
Eén artikel per week:

| Week | Artikel | Cluster |
|------|---------|---------|
| 7 | Nieuwe energietermen uitgelegd | Basis |
| 8 | Je nieuwe rechten als consument | Basis |
| 9 | De slimme meter wordt verplicht | Basis |
| 10 | Energiedelen uitgelegd | Energiedelen |
| 11 | Energiedelen vs. P2P vs. terugleveren | Energiedelen |
| 12 | Netcongestie uitgelegd | Toekomst |
| 13 | Energiegemeenschap oprichten | Energiedelen |
| 14 | Peer-to-peer stroom verkopen | Energiedelen |
| 15 | VvE en de Energiewet | Groepen |
| 16 | Huurder met zonnepanelen | Groepen |
| 17 | ZZP'er en de Energiewet | Groepen |
| 18 | Flexibiliteit en aggregatie | Toekomst |
| 19 | AMvB, EMD-pakket en de toekomst | Toekomst |

### Fase 3: Praktische verdieping (week 20+)
Eén artikel per week of twee weken, afhankelijk van tempo.

---

## 5. Technische architectuur

### Huidige staat
- Single HTML file op Netlify
- Geen framework, puur HTML/CSS/JS
- Geen CMS, geen blog-structuur

### Gewenste architectuur
- **Astro of Next.js** als static site generator (SSG) — snel, SEO-friendly
- **Markdown-bestanden** als content-source voor blogs (geen database nodig)
- **Netlify** als hosting (gratis tier is voldoende)
- **Eigen domein** koppelen (dezonnestrategie.nl)
- **Geen tracking scripts** — geen affiliate pixels

### Technische SEO-vereisten
- Unieke meta title (max 60 tekens) en meta description (max 155 tekens) per pagina
- sitemap.xml en robots.txt
- Schema.org markup (WebSite, FAQPage, Article per blog)
- Open Graph tags voor social sharing
- Canonical URLs
- Interne linkstructuur: elk artikel linkt naar minimaal 2 andere artikelen + rekentool
- Snelle laadtijden (statische site, geen client-side rendering voor content)

---

## 6. Sitestructuur en interne links

### Paginastructuur
```
/                          → Landingspagina met rekentool
/over                      → Over De Zonnestrategie
/privacy                   → Privacybeleid
/blog/                     → Blogoverzicht
/blog/salderingsregeling-stopt-2027
/blog/energiewet-2026
/blog/dynamisch-contract-zonnepanelen
/blog/thuisbatterij-terugverdientijd
/blog/ere-credits-laadpaal
/blog/zonnepanelen-kopen-2026
/kennisbank/               → Energiewet-kennisbank overzicht
/kennisbank/energietermen-uitgelegd
/kennisbank/consumentenrechten-energiewet
/kennisbank/slimme-meter-verplicht
/kennisbank/energiedelen-uitgelegd
/kennisbank/energiegemeenschap-oprichten
/kennisbank/peer-to-peer-stroom-verkopen
/kennisbank/energiedelen-vs-p2p-vs-terugleveren
/kennisbank/vve-zonnepanelen-energiewet
/kennisbank/huurder-zonnepanelen
/kennisbank/zzp-energiewet
/kennisbank/flexibiliteit-aggregatie
/kennisbank/netcongestie-uitgelegd
/kennisbank/amvb-emd-pakket-toekomst
```

### Linkstructuur
```
                    ┌──────────────────────┐
                    │     REKENTOOL        │
                    │  (elke pagina linkt  │
                    │   hierheen)          │
                    └──────────┬───────────┘
                               │
           ┌───────────────────┼───────────────────┐
           │                   │                   │
  ┌────────▼─────────┐  ┌─────▼──────┐  ┌─────────▼────────┐
  │ PILLAR PAGE:     │  │ KENNISBANK │  │ BLOG:            │
  │ Salderingsregeling│  │ HUB:       │  │ Panelen kopen,   │
  │ (alles linkt     │  │ Energiewet │  │ Batterij, ERE,   │
  │  hierheen)       │  │ (alle KB-  │  │ Dynamisch        │
  │                  │  │  artikelen │  │                  │
  └──────────────────┘  │  linken    │  └──────────────────┘
                        │  hierheen) │
                        └─────┬──────┘
                              │
              ┌───────────────┼───────────────┐
              │               │               │
     ┌────────▼──┐  ┌────────▼──┐  ┌─────────▼──┐
     │ Cluster:  │  │ Cluster:  │  │ Cluster:   │
     │ Basis     │  │ Energie-  │  │ Groepen &  │
     │ (termen,  │  │ delen     │  │ Toekomst   │
     │  rechten, │  │ (delen,   │  │ (VvE, ZZP, │
     │  meter)   │  │  P2P,     │  │  flexibi-  │
     │           │  │  gemeente) │  │  liteit)   │
     └───────────┘  └───────────┘  └────────────┘
```

---

## 7. Rekentool-aanpassingen

### Huidige staat
- Stap 1: berekent verlies door einde saldering
- Stap 2: toont oplossingen met toggles (dynamisch, batterij, P2P)
- CTA's sturen naar affiliate-links

### Gewenste staat
- Stap 1: ongewijzigd (berekent verlies)
- Stap 2: toont oplossingen, maar voegt een vijfde uitkomst toe:
  - **"Doe niets"**: als het verlies beperkt is (bijv. <€100/jaar) of als de situatie ongunstig is (weinig panelen, hoog zelfverbruik), krijgt de gebruiker het eerlijke advies dat actie niet nodig is.
- Stap 3 (nieuw): **gepersonaliseerd advies** op basis van de input:
  - "Op basis van jouw situatie raden we aan: [advies]"
  - Met links naar relevante artikelen, niet naar externe aanbieders
- CTA's verwijzen naar eigen artikelen, niet naar externe partijen
- Optioneel later: AI-gestuurde adviesmodule (Anthropic API, vergelijkbaar met AI-beleidsscan architectuur)

---

## 8. Inhoudelijke kerngegevens

### Salderingsregeling
- Stopt per 1 januari 2027 (Wet beëindiging salderingsregeling, aangenomen Eerste Kamer 17 december 2024)
- Geen afbouw, in één keer
- Terugleververgoeding: minimaal 50% van kale leveringstarief tot 2030
- Na 2030: leveranciers bepalen zelf, moet "redelijk" zijn (ACM toezicht)
- Gemiddeld stroomtarief januari 2026: ~€0,27/kWh
- Kale leveringstarief: ~€0,155/kWh
- Minimale terugleververgoeding: ~€0,07-0,08/kWh
- Netto terugleververgoeding (na terugleverkosten): vaak slechts ~€0,0025/kWh bij vast contract

### Energiewet 2026
- In werking per 1 januari 2026, vervangt Elektriciteitswet 1998 en Gaswet 2000
- Erkent "actieve afnemer" als juridisch concept
- Drie nieuwe mogelijkheden: energiedelen, peer-to-peer handel, flexibiliteit/aggregatie
- Energiedelen: momenteel alleen via dezelfde leverancier. Vrije leverancierskeuze komt later via EMD-pakket
- P2P: wettelijk mogelijk zonder leveranciersvergunning voor particulieren, loopt via platform
- AMvB (Energiebesluit) met nadere regels nog deels in voorbereiding
- Energiegemeenschap: rechtspersoon (coöperatie), NEN-certificering verplicht, maatschappelijk doel voorop
- Leveranciers: "we werken aan implementatie energiedelen"
- Slimme meter verplicht per 2026, netbeheerders hebben tot 2028 voor volledige uitrol
- Nieuwe terminologie: netbeheerder → systeembeheerder, stroomnet → elektriciteitssysteem

### Thuisbatterij
- Prijzen: €600-800/kWh capaciteit (gedaald ~50% in 2 jaar)
- 5 kWh: €3.000-5.000 incl. installatie | 10 kWh: €6.000-10.000
- Zelfverbruik: van ~30% naar 60-80%
- Terugverdientijd: 6-9 jaar | Levensduur: 10-15 jaar (LiFePO4)
- BTW-teruggave via KOR bij dynamisch contract (21% van aanschafprijs)
- Plug-in batterij: NVWA max 800W op gedeelde groep, eigen groep aanbevolen

### ERE-credits
- Emissie Reductie Eenheden, Europese RED3-richtlijn
- Waarde: ~€0,08-0,12/kWh | Vattenfall minimum: €0,05/kWh
- Vereist: thuislaadpaal met MID-meter, registratie bij inboekdienstverlener

### Dynamisch contract
- Betaal actuele uurprijs (EPEX-spot)
- Meestal geen terugleverkosten (vs. €0,03-0,05/kWh bij vast)
- Voordeel na 2027: ~€175/jaar extra t.o.v. vast (Roland Berger)

---

## 9. Stijl en toon

### Doelgroep
Nederlandse huiseigenaren met zonnepanelen, of die overwegen panelen te kopen. Secundair: huurders, VvE-leden, ZZP'ers. Leeftijd 30-60, technisch geïnteresseerd maar geen experts.

### Schrijfstijl
- Toegankelijk, concreet, geen jargon
- Cijfers en rekenvoorbeelden centraal
- Eerlijk over nadelen en beperkingen — ook als dat betekent "doe niets"
- Onafhankelijke toon — geen verkooppraatje, geen sponsored content
- Juridische nuancering waar nodig ("de wet maakt dit mogelijk, maar in de praktijk...")
- Korte alinea's, duidelijke tussenkopjes
- Elk artikel eindigt met verwijzing naar rekentool en De Zonnestrategie branding

### Niet doen
- Niet overdrijven over opbrengsten
- Niet doen alsof alles al operationeel is (met name energiedelen/P2P)
- Niet te technisch worden over wetgeving
- Geen hype-taal ("revolutionair", "gamechanger")
- Geen doorverwijzingen met commercieel belang
- Niet suggereren dat actie altijd nodig is

---

## 10. SEO-strategie

### Kernstrategie
Focus op long-tail zoektermen met hoge zoekintentie en lage concurrentie. Niet concurreren op brede termen. Wél concurreren op Energiewet-gerelateerde termen — daar is de markt nog open.

### Twee pillar pages
1. **Blog 1 (salderingsregeling)** — hub voor zonnepanelen/batterij/contract-content
2. **Kennisbank hub (Energiewet)** — hub voor alle Energiewet-content

### Autoriteitsopbouw
- Gastbijdragen op Tweakers, energieforums
- Inhoudelijke reacties op Reddit (r/geldzaken, r/duurzaamheid) en Tweakers-topics
- Geen betaalde backlinks of keyword stuffing
- De onafhankelijke positionering is zelf een USP bij outreach

---

## 11. Openstaande acties

### Thierry
- [ ] Domein claimen (dezonnestrategie.nl)
- [ ] "Over ons"-tekst schrijven
- [ ] Google Search Console account aanmaken

### Claude Code — Prioriteit 1 (voor livegang)
- [ ] Static site opzetten (Astro of Next.js) met Markdown-blog support
- [ ] Twee content-secties: /blog/ en /kennisbank/
- [ ] Landingspagina migreren van single HTML naar framework
- [ ] Rekentool aanpassen (doe-niets-optie, geen affiliate CTA's)
- [ ] Blog-template bouwen met meta tags, schema markup, OG tags
- [ ] 6 bestaande blogartikelen integreren
- [ ] sitemap.xml en robots.txt genereren
- [ ] Interne linkstructuur implementeren
- [ ] Over-pagina en privacy-pagina aanmaken

### Claude Code — Prioriteit 2 (na livegang)
- [ ] Kennisbank-template en overzichtspagina met clusters
- [ ] Domein koppelen aan Netlify
- [ ] Google Search Console en Analytics koppelen

### Content — doorlopend
- [ ] 13 Energiewet-kennisbank artikelen (1/week, start week 7)
- [ ] 10 praktische verdiepingsartikelen (start week 20)

### Later
- [ ] AI-gestuurde persoonlijke adviesmodule (Anthropic API)
- [ ] Nieuwsbrief-aanmeldformulier

---

## 12. Gerelateerde projecten

- **The Innovative Lawyer** (theinnovativelawyer.ai) — AI in de juridische sector. Aparte branding. De AI-beleidsscan is referentie-architectuur voor een eventuele adviesmodule.
- **P2P energieplatform businessplan** — Intern businessplan. De website kan als autoriteitskanaal fungeren.
- **Frank Energie connectie** — Thierry kent de CEO. Relevant voor content-samenwerking rondom energiedelen/P2P.

---

## 13. Bestanden

### Fase 1 blogs (geschreven, klaar)
| Bestandsnaam | Week | Onderwerp |
|---|---|---|
| blog-1-salderingsregeling.md | 1 | Salderingsregeling stopt |
| blog-6-energiewet.md | 2 | De nieuwe Energiewet |
| blog-3-dynamisch-contract.md | 3 | Dynamisch contract |
| blog-2-thuisbatterij.md | 4 | Thuisbatterij |
| blog-4-ere-credits.md | 5 | ERE-credits |
| blog-5-zonnepanelen-2026.md | 6 | Zonnepanelen kopen |

### Overig
| Bestandsnaam | Beschrijving |
|---|---|
| slimterugleveren.html | Huidige landingspagina (te migreren) |
| De-Zonnestrategie-Project-Briefing.md | Dit document |
