# South Canterbury Flying Conditions

A live VFR planning dashboard for Timaru (NZTU) and South Island cross country, tuned for C172 and PA-28. It pulls forecasts from Open-Meteo and shows the MetVUW South Island rain charts. It is a single static page with no build step and no server.

## Deploy to Netlify (drag and drop)

1. Sign up for a free Netlify account at app.netlify.com first, so your site stays live and gets a name you can keep. A drop made while signed out is temporary.
2. Open app.netlify.com/drop in your browser.
3. Drag this whole folder (the one holding index.html) onto the drop zone.
4. Wait a few seconds. Netlify gives you a live https address such as your-site-name.netlify.app.
5. Open Site configuration, then Change site name, to pick a friendlier address.

## Update it later

Go to your site in Netlify, open the Deploys tab, and drag the updated folder onto the deploy area. The new version replaces the old one within seconds.

## Add your own domain

In Netlify open Domain management, then Add a domain, and follow the steps to point a domain you own at the site. HTTPS is set up for you automatically.

## Good to know

1. Everything runs in the browser, so the live weather keeps working on any https host with no API keys to configure.
2. Open-Meteo is free for non commercial use with a daily call limit. For a paid product, move to their commercial plan.
3. The MetVUW charts are their images. Get their permission before you publish this publicly as a product.
4. This is a planning aid, not an official brief. Always brief through PreFlight or MetFlight GA and check current METAR, TAF, ARFOR, SIGMET, GRAFOR and NOTAMs before flight.

## Files

- index.html is the whole app. Nothing else is required to run it.
