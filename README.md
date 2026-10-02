# arkadia-krasnoludy

A plugin for the [Arkadia Web Client](https://github.com/Delwing/arkadia-web-client-extension)
that adds the guild emotes of *Krasnoludy z Twierdz Gor Starego Swiata* (the
`gp*` commands) to the command line's Tab completion.

## How completion works

The plugin registers every emote with `api.command.addSuggestions`. The client
completes the **last word** being typed from those suggestions, and a suggestion
may contain spaces, so:

- emotes with a fixed argument are offered whole (`gpoczysc brode`,
  `gpwytrzyj usta i brode`);
- emotes whose argument is a free target or item (`gppowitaj [kogo]`,
  `gpaprobuj <co>`) are offered bare.

Suggestions are removed again in `destroy()` (the host also drops them on unload).

## Files

- `plugin.ts` — the whole plugin; the emote list (`SUGGESTIONS`) is at the top.
- `plugin.json` — registry manifest. Keep its `version` in sync with
  `package.json` and `PLUGIN_VERSION` in `plugin.ts`.
- `DESCRIPTION.md` — the Polish, player-facing registry page.

## Build / develop

```
yarn install
yarn build       # dist/plugin.js
yarn dev         # serves http://localhost:5177/plugin.js
yarn typecheck
```

## Publishing

Same flow as the other plugins: `deploy.yml` publishes `dist/` to GitHub Pages
on `master`, `publish.yml` uploads `plugin.json` + `plugin.ts` to the plugin
registry on a `v*` tag (slug `krasnoludy`, trusted publisher
`Delwing/arkadia-krasnoludy` / `publish.yml`).
