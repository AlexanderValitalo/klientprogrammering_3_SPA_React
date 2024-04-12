# Djupgående Dokumentation, Reflektion och Analys av Alexander Välitalos: Inlämningsuppgift 3: SPA med React

## Dokumentation

### Allmänt om mitt arbete
- Denna applikation `badgemania-client` är byggd med React och Next.JS
- Applikationen använder sig av SPA (single page application) så den inte behöver ladda om då man går till olika "pages"
- Med Next.JS så används server-side rendering och static site generation för att leverera sidor snabbt, vilket förbättrar användarupplevelsen och prestandan
- Det ger även SEO-optimering då innehållet direkt blir tillgängligt för sökmotorer om sidan tas i produktion
- Det blir bättre produktivitet med automatisk routing och hot reloading för utvecklingsprocessen
- En annan fördel är hög skalbarhet
- I mitt projekt har jag även använt TypeScript för att kunna ha typade variabler och lättare felsökning om något skulle gå fel
- I mitt projekt har jag även använt mig utav Tailwindcss för att enklare kunna styla element och komponenter som jag vill
- I mitt projekt har jag även använt mig utav EsLint för att hitta fel som kan uppstå i koden

### `Komponenter som används på flera ställen i min applikation`

#### Header
 Header är en komponent består av en yttre div som innehåller en Image med badgemanias logga och en h1 som informerar vilken sida man är på
 
#### NavigationLink
NavigationLink är en komponent som består av en Link och en h2 som byggs upp av informationen från link-propen som är av typen NavigationLinkProps, link i sin tur är av typen RouteLink som jag har definierat i en egen fil under mappen interfaces. Denna information kommer ifrån Navigation-komponenten.
Hur Link ska designas bestäms av vilken sida man befinner sig på i nuläget då den jämför sidans namn med hjälp av usePathname som importeras från next/navigation.

#### Navigation
Navigation är en komponent som bygger upp alla NavigationLink:ar genom att ha informationen till varje i en object-array `LINKS` av typen RouteLink och propen children som kommer från sidan som använder Navigation komponenten. Object-arrayen `LINKS` lopas igenom med .map och skapar en ny NavigationLink för varje object i LINKS arrayen och när det är klart placeras övriga element och eventuella komponenter ifrån propen children på sidan.

### `Sidor (pages) i applikationen`

#### Home page (/)
Home sidan använder komponenten Navigation och inuti den så finns ett mainelement som innehåller en Image, h1 och en h2
Home sidan välkomnar användaren och förklarar kort vad Badgemania gör.

#### Solutions page (/solutions)
Solutions mappen innehåller 2 filer där den ena är page.tsx och den andra är en komponent Solution.tsx som används på denna page.tsx.
Solution är en komponent som tar in solutionText som SolutionProps. SolutionProps är ett interface som talar om att solutionText är av typen SolutionList. solutionText får sin information av page.tsx och med hjälp av den så bygger den upp en div som innehåller en h2 med texten för aktuell solution och därefter en ul.lista med li-element skapas med hjälp av solutionText.text med .map. 
Solution page har listan med SOLUTIONS som skickas till komponenten Solution. Solution page bygger sidan genom att använda komponenten Navigation som innehåller ett main-element som i sin tur innehåller komponenten Header och en div som mappar igenom SOLUTIONS-object-arrayen och skapar en Solutionskomponent för varje object i arrayen.





