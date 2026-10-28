# Bunzy – lokal konceptdemo

En tidig webbskiss för Café Bunzy i Borås. Avsedd som underlag för en presentation och gemensam designgenomgång.

## Kör lokalt

Python 3 behövs. Från projektmappen:

    python -m http.server 4317 --bind 127.0.0.1 --directory dist

Öppna http://127.0.0.1:4317/. Samma kommando finns som npm start om Node.js är installerat.

## Det som finns

- Kompakt menysektion med tre produkter från Bunzys Wolt-meny.
- Menylänkar öppnar Wolt i en ny flik.
- Hitta hit och Visa på karta öppnar Google Maps med adressen i Borås.
- Kontaktuppgifter och en mindre interiörbild från lokalen.
- Beställ online är avstängd och märkt Demo.
- Anpassad layout för mobil och dator, lokala typsnitt och responsiva WebP-bilder.
- Statisk HTML/CSS utan JavaScript, spårning eller externa bibliotek under körning.

## Före en färdig webbplats

Bekräfta innehåll, bildrättigheter, öppettider och beställningslösning med Bunzy. Demon innehåller inga priser, ingen egen checkout och ingen betalning. Bilderna är referensmaterial med dokumenterade källor i IMAGE-SOURCES.md. noindex markerar att detta är en konceptdemo.

## Filer

- dist/index.html – innehåll och länkar.
- dist/styles.css – layout och responsiva brytpunkter.
- dist/assets/ – foton, typsnitt och typsnittslicens.
- scripts/optimize-images.cjs – skapar WebP-versioner från de ursprungliga produktbilderna. Kräver Sharp (npm install --no-save sharp).

Ingen publicering eller hosting är konfigurerad.
