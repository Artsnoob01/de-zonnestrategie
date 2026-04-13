# SlimTerugleveren — Overzicht van alle conclusies

*Samengesteld uit alle gesprekken gevoerd tussen februari en april 2026*

---

## 1. Oorsprong van het project

Het project is gestart vanuit een academische paper ("Van passieve eindafnemer naar actieve marktdeelnemer") over de Energiewet. Het doel was om deze kennis te vertalen naar een consumentengerichte website die zonnepanelenbezitters helpt om slim om te gaan met het einde van de salderingsregeling. De site is gebouwd als een statische HTML/CSS/JS-site, gehost op Netlify.

---

## 2. Juridische en marktcontext

### Salderingsregeling
- De Wet beëindiging salderingsregeling is op 17 december 2024 aangenomen door de Eerste Kamer.
- De saldering stopt per 1 januari 2027 — in één keer, zonder geleidelijke afbouw.
- Vanaf 2027 ontvangen zonnepanelenbezitters alleen nog een terugleververgoeding van minimaal 50% van het kale leveringstarief (exclusief belastingen), tot 2030. De ACM houdt hierop toezicht.
- Na 2030 vervalt het wettelijk minimum en bepalen leveranciers zelf een "redelijke" vergoeding.

### Energiewet
- De Energiewet is op 1 januari 2026 in werking getreden (aangenomen door Tweede Kamer op 4 juni 2024, Eerste Kamer op 10 december 2024).
- De wet erkent de "actieve afnemer" als wettelijke marktrol.
- Drie nieuwe leveringsvormen worden mogelijk: directe levering, energiedelen (bij dezelfde leverancier) en peer-to-peer handel.
- Kanttekening: sommige onderdelen (met name P2P en energiedelen) zijn nog niet volledig uitgewerkt in nadere regelgeving. De site presenteert dit soms stelliger dan de wetgevingsstand rechtvaardigt.

### ERE-credits
- Door de RED3-richtlijn moeten oliemaatschappijen compenseren via ERE-certificaten (Energie uit Hernieuwbare Energiebronnen).
- De waarde ligt in 2026 rond €0,10 per geladen kWh.
- Vattenfall garandeert minimaal €0,05/kWh via hun Thuislaadcashback.
- Vereiste: laadpaal met MID-meter.
- Bij 4.000 kWh/jaar thuisladen levert dit ca. €400 extra op.

---

## 3. Vier gebruikersprofielen / scenario's

We hebben vier profielen gedefinieerd, elk met een eigen optimale strategie:

### Profiel 1: "Ik heb panelen en doe verder niets" (baseline)
- Het slechtste scenario na 2027.
- Terugleververgoeding van slechts €0,05–0,09/kWh bij inkoop van €0,30–0,40.
- Geschat verlies: €400–600/jaar t.o.v. huidige saldering.
- Zelfverbruik blijft rond 30–35%.

### Profiel 2: "Panelen + dynamisch contract" (laagste drempel)
- Geen investering nodig, alleen overstappen.
- Verkoop stroom op piektarieven i.p.v. vaste lage vergoeding.
- Geschatte extra opbrengst: €150–400/jaar.
- Vraagt iets meer bewustzijn van verbruikspatroon.

### Profiel 3: "Panelen + dynamisch contract + thuisbatterij" (de sweet spot)
- Aanbevolen als standaard voor de meeste huishoudens.
- Zelfverbruik stijgt van ~35% naar 70–80%.
- Batterijprijzen gedaald naar €600–800/kWh, terugverdientijd 6–9 jaar.
- BTW-teruggave via KOR mogelijk (tot €2.000 op een batterij van €10.000).
- Geschatte totale besparing: €600–1.200/jaar.

### Profiel 4: "Panelen + dynamisch + thuisbatterij + EV met laadpaal" (maximaal)
- Alles van profiel 3, plus ERE-credits.
- EV thuis laden met eigen zonnestroom (gratis) + ERE-vergoeding ~€0,10/kWh.
- Geschatte extra opbrengst ERE: €400/jaar bij 4.000 kWh thuisladen.
- Vereist grootste investering (laadpaal met MID-meter, thuisbatterij, EV).

**Conclusie:** Profiel 3 is de sweet spot voor de site-aanbeveling. Profiel 4 is bonus voor EV-bezitters. Vermijd profiel 4 als standaard te presenteren (investering €15.000+ schrikt af).

---

## 4. Website-analyse en verbeterpunten

### Sterke punten
- Goed opgebouwde, informatieve landingspagina met duidelijk verhaal.
- Logische structuur: probleem → opties → wat levert het op → vergelijk → FAQ.
- Twee-stappen rekentool (eerst verlies tonen, dan oplossing) is slim voor conversie.
- Vertrouwenssignalen aanwezig: disclaimers, affiliate-vermelding, privacy.
- Site is licht (~65KB), laadt in <1 seconde.

### Verbeterpunten (geïdentificeerd)
1. **Geen eigen domein** — Site draait op Netlify-subdomein, Google indexeert dit nauwelijks.
2. **Dode CTA-links** — Alle "Bekijk PowerPeers →" etc. verwijzen naar `#` en doen niets.
3. **Cijfers niet onderbouwd** — Bedragen plausibel maar zonder bronvermeldingen (ACM-rapporten, CBS etc.).
4. **Geen "Over ons"** — Ondermijnt geloofwaardigheid bij een site die onafhankelijk advies claimt.
5. **Affiliate-model vaag** — Affiliate-disclaimer staat pas onderaan; zou bij élke aanbiedersvermelding moeten.
6. **Juridische nuancering** — P2P en energiedelen worden stelliger gepresenteerd dan de wetgevingsstand rechtvaardigt.

---

## 5. Herpositionering: van "verdien geld" naar "maak slimme keuzes"

### De kernshift
De oorspronkelijke messaging ("Verdien meer met je zonnepanelen") is gericht op geld verdienen met bestaande panelen. De eigenlijke missie is breder: mensen stimuleren om goede maatregelen te nemen en nog steeds zonnepanelen te kopen.

### Aanbevolen hero-messaging (4 varianten uitgewerkt)
- **Variant A (Geruststelling, aanbevolen voor homepage):** "Zonnepanelen blijven slim. Hier is waarom." — Neemt twijfel weg, spreekt zowel bezitters als twijfelaars aan.
- **Variant B (Empowerment):** "Zonnepanelen na 2027: slimmer dan ooit" — Benadrukt eigen regie, positief geframed.
- **Variant C (Twijfelaars, aanbevolen als aparte landingspagina):** "Ja, zonnepanelen zijn nog steeds slim" — Specifiek voor twijfelaars.
- **Page title suggestie:** "SlimTerugleveren.nl — Zonnepanelen blijven slim, ook na 2027"

### Overige tekstwijzigingen
| Sectie | Oud | Nieuw |
|---|---|---|
| Rekentool stap 1 | "Wat kost het einde van saldering jou?" | "Wat verandert er voor jouw zonnepanelen?" |
| Rekentool stap 2 | "Zo verdien je het verschil terug (en meer)" | "Zo haal je het maximale uit je panelen" |
| Ecosysteem-sectie | "Vier manieren om meer uit je stroom te halen" | "Vier slimme stappen voor na 2027" |
| CTA onderaan | "Klaar om meer uit je zonnepanelen te halen?" | "Benieuwd wat de slimste aanpak is voor jouw situatie?" |
| Footer | "Onafhankelijke informatie over de Energiewet..." | "Wij helpen je de juiste keuzes te maken voor je zonnepanelen — ook na het einde van de saldering." |

### Rekentool-advies
- Huidige tool toont vooral het verlies door einde saldering — effectief als alarmsignaal.
- Extra variant maken voor twijfelaars: "Wat leveren zonnepanelen mij op als ik ze nu koop — mét de juiste strategie?"
- Laat gebruikers eerst profiel kiezen ("Heb je een EV? Overweeg je een thuisbatterij?") voor gepersonaliseerd advies.

---

## 6. Domeinkeuze

### Onderzochte opties
| Domein | Status | Beoordeling |
|---|---|---|
| slimterugleveren.nl | Bezet (privépersoon, geparkeerd, geregistreerd april 2022 via ZXCS) | Houder te benaderen: krishanboere@hotmail.com |
| slimterugleveren.com | Vrij | Sluit aan bij huidige branding, maar .com rankt minder in NL |
| dezonnestrategie.nl | Vrij | **Aanbevolen** — dekt hele missie, .nl is sterk voor SEO |
| zonnestrategie.nl | Bezet (geparkeerd bij Yourhosting) | Te benaderen |
| zonnestrategie.tv | Vrij | Interessant voor video-content, maar duurder (€25–35/jaar) |

### Advies
**dezonnestrategie.nl** is de beste keuze. De naam dekt de hele missie (niet alleen terugleveren maar de complete strategie), past bij de herpositionering van "verdien geld" naar "maak slimme keuzes", en .nl is sterker voor SEO in Nederland. Registreer daarnaast slimterugleveren.com als redirect.

---

## 7. Affiliate- en verdienmodel

### Structuur
De site combineert informatieve content met affiliate-doorverwijzingen. Het model is gebaseerd op:
- **CPL (cost per lead):** Energiecontracten via Daisycon/Vattenfall — €20–80 per afgesloten contract.
- **CPS (cost per sale):** Thuisbatterijen (Zendure 8%, EcoFlow 5%), laadpalen (Coolblue via Awin).
- **PowerPeers/Vattenfall** als hoofdpartner — biedt zowel dynamisch contract als Thuislaadcashback.

### Geschatte opbrengsten
| Fase | Bezoek/maand | Conversie | Opbrengst/maand |
|---|---|---|---|
| Start (maand 1–6) | 500–2.000 | 1–2% | €75–300 |
| Groei (maand 6–12) | 2.000–5.000 | 2–3% | €300–2.250 |
| Volwassen (12+ maanden) | 5.000–15.000 | 2–4% | €1.500–9.000 |

### Strategisch advies
- Missie en verdienmodel bijten elkaar niet: goed advies leidt tot de producten waar de affiliate-links zitten.
- Eerst autoriteit opbouwen, dan pas conversie verwachten. Google rankt beter bij E-E-A-T.
- Affiliate-links mogen er vanaf dag één in staan, maar moeten wél werkend zijn (geen `#`-links).

---

## 8. Contentstrategie en SEO

### Traffic-aanpak (3 pijlers)
1. **SEO + blogcontent** — Long-tail artikelen rond actieve zoektermen.
2. **Social media** — Prikkelende feiten op LinkedIn/Instagram (bijv. "Wist je dat oliemaatschappijen jou betalen als je thuis je EV oplaadt?").
3. **Communities** — Tweakers, Reddit (r/geldzaken, r/duurzaamheid), Facebook-groepen over zonnepanelen.

### Contentplan (5 artikelen, 8 weken)
1. **"Salderingsregeling stopt in 2027: dit moet je weten"** — Pillar-content, hoogste prioriteit.
2. **"Thuisbatterij kopen: terugverdientijd berekenen in 2026"** — Hoge zoekintentie.
3. **"ERE-credits: zo verdien je aan het laden van je EV"** — Niche-goudmijn met minste concurrentie.
4. **"Dynamisch energiecontract vergelijken: welke past bij zonnepanelen?"** — Affiliate-conversie.
5. **"Zijn zonnepanelen nog rendabel na 2027?"** — Voor twijfelaars, past bij herpositionering.

### Technische SEO-checklist
- Eigen domein koppelen (stap 1).
- Sitemap.xml, robots.txt, meta descriptions per pagina.
- Open Graph-tags voor social sharing.
- Google Search Console claimen.
- Maandelijkse content-updates voor verse indexering.

---

## 9. P2P-platform als toekomstige richting

Naast de affiliate-site is verkend of een eigen P2P energieplatform (à la EnergySwap) haalbaar is.

### Kernbevindingen
- Een P2P-trader is juridisch de leverancier en heeft een **ACM-leveranciersvergunning** nodig (€1.199 + accountantsverklaring).
- Alternatief: werken als **wederverkoper via vergunninghouder** (bijv. EnergyZero) — geen eigen vergunning nodig.
- **EnergyZero** (niet Frank Energy) is de aangewezen backbone-partner — zij bieden supplier-as-a-service met 20+ white-label merken.
- Frank Energy is eerder een **toekomstige concurrent** dan een partner: zij verkennen zelf energiedelen.
- Break-even geschat bij 15.000–30.000 actieve trading pairs.
- Optimale lanceerwindow: januari 2027 (wanneer saldering stopt).

### Advies
- Begin met het affiliatemodel om de markt te leren kennen en cashflow op te bouwen.
- Gebruik de connectie met de CEO van Frank Energy voor informeel marktonderzoek (niet als platformpartner).
- Als het platform serieus wordt: kies het EnergyZero-wederverkoopmodel als laagdrempelige start.

---

## 10. Technisch deploy-pakket

De site is opgeleverd als een compleet Netlify-deploy-pakket met:
- Volledige HTML/CSS/JS site (geen framework, geen build stap).
- SEO meta tags, Open Graph, structured data (JSON-LD).
- Sitemap.xml, robots.txt, Netlify-config, 404-pagina.
- Cookiebanner met consent-logica.
- Privacy- en cookiebeleid pagina (in te vullen met eigen gegevens).
- Analytics-placeholder (Plausible of Google Analytics 4).
- Inline SVG favicon.

### Nog te doen voor livegang
- [ ] Domein registreren en koppelen aan Netlify.
- [ ] Affiliate-links invullen (PowerPeers via Daisycon, Coolblue via Awin, Zendure, EcoFlow).
- [ ] Privacy-pagina aanvullen met eigen naam, plaats, e-mailadres.
- [ ] Analytics instellen.
- [ ] "Over ons"-informatie toevoegen.
- [ ] OG-image vervangen door professionele afbeelding (1200×630px).
- [ ] Google Search Console claimen en sitemap submitten.

---

## Samenvatting: de 5 belangrijkste conclusies

1. **De missie is helder:** mensen helpen slimme keuzes te maken met zonnepanelen — niet alleen "geld verdienen." Die herpositionering moet door de hele site heen doorgevoerd worden.

2. **Profiel 3 (panelen + dynamisch contract + thuisbatterij) is de sweet spot** voor het standaardadvies. Niet te duur, niet te complex, hoogste rendement per geïnvesteerde euro.

3. **dezonnestrategie.nl is de aanbevolen domeinnaam** — dekt de hele missie, sterk voor SEO, past bij de herpositionering.

4. **Content is de groeimotor:** vijf SEO-artikelen in 8 weken, met ERE-credits als niche-kans met de minste concurrentie.

5. **Het P2P-platform is een optie voor later** — eerst het affiliatemodel laten draaien, dan eventueel opschalen via het EnergyZero wederverkoopmodel.
