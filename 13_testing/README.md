## Vitest

### Setup

- vitest installieren (`npm install -D vitest`)
- test script in package.json einrichten (`{"test": "vitest"}`)
- tests können jetzt mit `npm run test` (oder auch `npm test`) gestartet werden
- optional: mit der vscode extension für vitest können wir tests direkt in vscode nutzen

### Tests einrichten

Wir platzieren tests meist direkt neben der datei die getestet werden soll, 
mit dem gleichen Namen, aber .test dazwischen. Also für addTwo.ts z.B. addTwo.test.ts

Zum Aufbau der Teste schaut in die Kommentare in `src/lib/addTwo.test.js`





## Mocking
Mit Mocks simulieren/imitieren wir Komponenten die wir aus irgendeinem Grund nicht direkt verwenden wollen oder können

### API Mocking mit Mock Service Worker
Ein typisches Beispiel sind APIs. Durch Mocking können wir mit einer API interagieren ohne dass sie schon existieren muss (z.B. weil das Backend-Team
parallel an ihr arbeitet), und wissen immer genau welche Daten zurückkommen werden.
Mock Service Worker ist ein sehr mächtiges und beliebtes Tool hierfür.


#### MSW Setup
- Wir installieren MSW mit `npm install --save-dev msw`
Wir erstellen `src/mock/handlers.ts`. Hier werden die einzelnen Routen gemockt.
Diese Datei kann z.B. so aussehen:

```ts
import { http, HttpResponse } from 'msw'
import { birds } from '../data/birds'
 
export const handlers = [
  // wir fangen hier alle GET Requests an https://tolleapi.com/hello ab
  http.get('https://tolleapi.com/hello', () => {
    // und beantworten sie mit dem Objekt {text: "Hallo Welt!"}
    return HttpResponse.json({text: "Hallo Welt!"})
  }),
]
```

Dann erstellen wir noch eine Datei `src/mock/browser.ts`
Hier werden unsere Routen gesammelt, und speziell für Nutzung im Browser verpackt
```ts
import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'
 
export const worker = setupWorker(...handlers)
```

Nun erstellen wir mit `npx msw init ./public  --save` einen sogenannten Serviceworker.
Dieser wird spaeter laufende Requests abfangen und umschreiben.

Jetzt endlich können wir MSW integrieren. 
Das tun wir in App.tsx, und zwar bevor wir React initiieren:

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() =>
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
);

```

Jetzt sollte alles startklar sein, und ein fetch an die jeweilige Route sollte uns "gemockte" Daten zurückgeben