# NPC Companion - Pyodide + pyTincture MVP

This is a browser-first starter app for the **Nurturing Personal Companion (NPC)** concept.
It uses the **standalone Pyodide + pyTincture + dhxpyt** path so the UI remains rooted in the browser Python runtime.

## Included
- Today screen
- Daily Check-In form
- Reminders form with local save/delete/toggle
- Notes form with local save/delete
- Offline Companion Chat starter
- Settings for large text and high contrast
- PWA manifest and service worker
- Local browser storage for starter data

## Important
This starter keeps the **app shell and page rendering in Pyodide/pyTincture**.
The local save helpers use browser storage so the MVP can work without a server.

## Run locally
Do not open with `file:///`.
Use a local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/npc_pyodide_pytincture_mvp/
```

## Next build steps
1. Move local storage helpers into a more structured Python data layer
2. Add IndexedDB/DuckDB-WASM support
3. Add speech synthesis and optional voice input
4. Add secure Grok relay for online AI mode
5. Replace starter cards/forms with richer dhxpyt widgets as needed
