# Portfolio — Mattia Pirro

Sito portfolio single-page per **Mattia Pirro**, Cyber Security Consultant & Penetration Tester.
Ispirato nella struttura a un portfolio professionale, realizzato in **HTML + CSS + JavaScript puro**, senza dipendenze esterne.

## Caratteristiche

- **Zero dipendenze**: nessun framework, nessun CDN, nessun font esterno. Tutto self-contained.
- **Bilingue IT/EN**: pulsante di cambio lingua con preferenza salvata in `localStorage`.
- **Responsive**: layout a griglia adattivo con menu mobile.
- **Sicuro**:
  - `Content-Security-Policy` restrittiva (`default-src 'self'`, niente inline script/style, `object-src 'none'`, `frame-ancestors 'none'`).
  - Link esterni con `rel="noopener noreferrer"`.
  - Nessun input utente: i testi provengono da un dizionario statico controllato.
- **Accessibile**: skip link, `aria-*`, rispetto di `prefers-reduced-motion`.

## Struttura

```
portfolio/
├── index.html          # struttura e contenuti (attributi data-i18n)
├── css/styles.css       # tema e layout
├── js/main.js           # toggle lingua, nav mobile, animazioni, anno, lightbox kill chain
├── diagrams/            # sorgenti Mermaid (.mmd) e config per le kill chain
├── assets/              # favicon, foto profilo, kill chain in SVG
└── README.md
```

## Contenuti

I contenuti derivano dal CV (aggiornato al 2024) e dai progetti tecnici:
esperienza professionale, formazione, competenze, progetti (recon engine, security research,
writeup HTB, materiale Active Directory), certificazioni e conferenze.

## Anteprima locale

Basta un qualsiasi server statico, ad esempio:

```bash
cd portfolio
python3 -m http.server 8080
```

Poi apri `http://localhost:8080`.

> Nota: la `Content-Security-Policy` con `script-src 'self'` richiede di servire il sito via HTTP
> (non aprendo `index.html` da `file://`), altrimenti il JavaScript non viene eseguito.

## Come aggiornare i contenuti

- **Testo IT**: modificare direttamente il markup in `index.html`.
- **Testo EN**: aggiornare il dizionario `EN` in `js/main.js` con la stessa chiave `data-i18n`.
- **Nuovi progetti / esperienze**: duplicare un blocco `.proj-card` / `.tl-item` in `index.html`
  aggiungendo le relative chiavi `data-i18n` e le traduzioni EN.

## Kill chain (diagrammi Mermaid)

Le kill chain sono diagrammi Mermaid in `diagrams/*.mmd`, pre-renderizzati in SVG statici
(nessuna libreria a runtime, coerente con la CSP). Per rigenerarli dopo una modifica:

```bash
npx @mermaid-js/mermaid-cli -i diagrams/killchain1.mmd -o assets/killchain1.svg -c diagrams/mermaid-config.json -b "#17151c"
npx @mermaid-js/mermaid-cli -i diagrams/killchain2.mmd -o assets/killchain2.svg -c diagrams/mermaid-config.json -b "#17151c"
```
