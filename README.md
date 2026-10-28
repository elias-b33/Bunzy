# Bunzy – lokal konceptdemo

En tidig webbskiss för Café Bunzy i Borås. Avsedd som underlag för en presentation och gemensam designgenomgång.

## Kör lokalt

Python 3 behövs. Från projektmappen:

    python -m http.server 4317 --bind 127.0.0.1 --directory dist

Öppna http://127.0.0.1:4317/. Samma kommando finns som npm start om Node.js är installerat.

## Det som finns

- Bunzys röda ordlogotyp, varm bakgrund och röda accenter.
- Kompakt menysektion med tre produkter från Bunzys Wolt-meny.
- Meny och Hela menyn öppnar en avsiktligt tom sida inom samma demo.
- Bun of the month öppnar en egen vy med en länk till Instagram för aktuell smak.
- Månadsbilden är uttryckligen ett exempel från ordinarie sortiment.
- Hitta hit och Visa på karta öppnar Google Maps med adressen i Borås.
- Kontaktuppgifter och en mindre interiörbild från lokalen.
- Beställ online är avstängd och märkt Demo.
- Mobilanpassning, lokala typsnitt, responsiva WebP-bilder och tydliga fokusmarkeringar.
- Statisk HTML/CSS utan JavaScript, spårning eller externa bibliotek under körning.

## Före en färdig webbplats

Bekräfta innehåll, bildrättigheter, öppettider och beställningslösning med Bunzy. Bygg innehållet på menysidan och koppla aktuell månadssmak när underlag finns. Demon innehåller inga priser, ingen egen checkout och ingen betalning. Bilderna är referensmaterial med dokumenterade källor i IMAGE-SOURCES.md. noindex markerar att detta är en konceptdemo.

## Filer

- dist/index.html – startsidan.
- dist/meny.html – avsiktligt tom menydemo.
- dist/manadens-bulle.html – separat Bun of the month-vy.
- dist/styles.css – layout, färger och responsiva brytpunkter.
- dist/assets/ – foton, logotyp, typsnitt och typsnittslicens.
- scripts/optimize-images.cjs – skapar WebP-versioner från de ursprungliga produktbilderna. Kräver Sharp (npm install --no-save sharp).

## Redo för Vercel

Importera GitHub-repot https://github.com/elias-b33/Bunzy i Vercel och välj main som produktionsgren. Behåll Root Directory på repots rot.

Inställningarna finns redan i vercel.json:

- Framework Preset: Other.
- Output Directory: dist.
- Build Command och Install Command: tomma; sidan behöver inget byggsteg.
- Inga miljövariabler eller hemligheter krävs.

Konfigurationen är förberedd, men inget Vercel-projekt har skapats eller publicerats i detta arbete. Alla sidor använder relativa länkar och fungerar på en Vercel-domän. Menysidan är avsiktligt tom även efter publicering.

Vercels dokumentation: https://vercel.com/docs/project-configuration/vercel-json
