# C-17 Duty Day

A standalone, offline-capable duty day calculator (Bravo, Airland, and Tracker tabs).

## Put it on your iPhone via GitHub Pages

1. Sign in at github.com and click **+ → New repository**. Name it
   `c17-duty-day`, set it **Public**, and create it.
2. On the repo page: **Add file → Upload files**. Drag in ALL of these
   (keep them together in the repo root):
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
   Then **Commit changes**.
3. **Settings → Pages** → Source: **Deploy from a branch**,
   Branch: **main**, folder **/ (root)** → **Save**.
4. Wait ~1 minute, refresh the Pages settings page. Your URL appears:
   `https://YOURUSERNAME.github.io/c17-duty-day/`
5. Open that URL **in Safari** on your iPhone → **Share → Add to Home Screen → Add**.

The app launches full-screen, works offline after the first load, and remembers
your entries until you tap **Erase All**.

## Updating later
Re-upload a changed `index.html` (and bump `CACHE` in `sw.js`, e.g. v2 → v3)
so phones pull the new version instead of the cached one.
