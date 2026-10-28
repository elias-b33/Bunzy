# Bunzy – lokal konceptdemo

En tidig webbskiss för Bunzy i Borås och Stockholm. Avsedd som underlag för en presentation och gemensam designgenomgång.

## Kör lokalt

Python 3 behövs. Från projektmappen:

    python -m http.server 4317 --bind 127.0.0.1 --directory dist

Öppna http://127.0.0.1:4317/. Samma kommando finns som npm start om Node.js är installerat.

## Det som finns

- Bunzys röda ordlogotyp, varm bakgrund och röda accenter.
- Kompakt menysektion med tre produkter från Bunzys Wolt-meny.
- Meny och Hela menyn öppnar en egen enkel menysida med sex drycker, små bilder och priser från Bunzys meny på SEMENY.
- Bun of the month visar en liten produktbild, smaknamn och kort beskrivning direkt under menyn. Rutan öppnar en egen enkel demosida utan extern smaklänk.
- Biscoff Bun är tydligt märkt Demoexempel, med en bild från ordinarie sortiment. Bunzy fyller på aktuell månadssmak senare.
- Hitta hit i navigationen går till två platsrutor, Borås och Stockholm, med varsin Google Maps-länk.
- Riktiga bilder från respektive lokal. Boråstelefonen visas enbart vid Borås.
- TikTok syns vid loggan och tillsammans med Instagram under platsrutorna.
- Beställ online öppnar en liten dialog: välj bulle och antal och visa en lokal sammanfattning. Inget skickas, sparas eller betalas.
- Mobilanpassning, lokala typsnitt, responsiva WebP-bilder och tydliga fokusmarkeringar.
- Statisk HTML/CSS med lite JavaScript för demodialogen. Ingen serverfunktion, spårning eller externa bibliotek under körning.

## Före en färdig webbplats

Bekräfta innehåll, priser, bildrättigheter, öppettider och beställningslösning med Bunzy. Menysidan visar tills vidare bara drycker; lägg till resten av sortimentet och aktuell månadssmak när underlag finns. Dryckernas namn och priser följer den länkade SEMENY-menyn, kontrollerad 28 oktober 2026, och uppdateras manuellt i HTML. Ingen egen checkout eller betalning finns. Bilderna är referensmaterial med dokumenterade källor i IMAGE-SOURCES.md. noindex markerar att detta är en konceptdemo.

## Filer

- dist/index.html – startsidan.
- dist/meny.html – egen menysida med sex drycker och priser.
- dist/manadens-bulle.html – separat Bun of the month-vy.
- dist/styles.css – layout, färger och responsiva brytpunkter.
- dist/order-demo.js – öppna, sammanfatta och stänga den lokala beställningsdemon.
- dist/assets/ – foton, logotyp, typsnitt och typsnittslicens.
- scripts/optimize-images.cjs – skapar WebP-versioner från de ursprungliga produktbilderna. Kräver Sharp (npm install --no-save sharp).

## Redo för Vercel

Importera GitHub-repot https://github.com/elias-b33/Bunzy i Vercel och välj main som produktionsgren. Behåll Root Directory på repots rot.

Inställningarna finns redan i vercel.json:

- Framework Preset: Other.
- Output Directory: dist.
- Build Command och Install Command: tomma; sidan behöver inget byggsteg.
- Inga miljövariabler eller hemligheter krävs.

Konfigurationen är förberedd, men inget Vercel-projekt har skapats eller publicerats i detta arbete. Alla sidor använder relativa länkar och fungerar på en Vercel-domän.

Vercels dokumentation: https://vercel.com/docs/project-configuration/vercel-json
