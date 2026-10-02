/**
 * Krasnoludy - Tab completion for the guild emotes of Krasnoludy z Twierdz Gor
 * Starego Swiata (the `gp*` commands).
 *
 * Every emote goes into the command line's Tab completion. The client completes
 * the last word being typed, and a suggestion may hold spaces, so emotes with a
 * fixed argument ("gpoczysc brode", "gpwytrzyj usta i brode") are offered
 * whole. Emotes whose argument is a free target or item are offered bare.
 *
 * See README.md for build / host / publish details.
 */

import type { PluginApi, PluginInfo } from '@arkadia/plugin-types';

const PLUGIN_NAME = 'Krasnoludy';
const PLUGIN_VERSION = '1.0.0';
const PLUGIN_AUTHOR = 'Dargoth';
const PLUGIN_DESCRIPTION =
  'Podpowiedzi (Tab) dla emotek Krasnoludow z Twierdz Gor Starego Swiata.';

const SUGGESTIONS = [
  'gppowitaj', // [kogo] - khazadzkie powitanie
  'gppozegnaj', // [kogo] - khazadzkie pozegnanie
  'gpdeterminacja', // determinacja gorskiego ludu
  'gpaprobuj', // <co> - aprobata przedmiotu
  'gpskrytykuj', // <co> - skrytykowanie przedmiotu
  'gpoczysc brode', // czyszczenie swojej brody
  'gppogladz brode', // pochwalenie sie wszystkim swa broda
  'gpprzeczesz brode', // przeczesanie swojej brody
  'gpprzygladz brode', // przygladzenie swojej brody
  'gptargaj brode', // nerwowe targanie swojej brody
  'gppopraw warkocz', // poprawienie warkocza
  'gpwytrzyj usta',
  'gpwytrzyj brode',
  'gpwytrzyj usta i brode',
  'gpzamysl sie', // chwilka zadumy i zamyslenia
  'gpzaprzecz', // [slowom kogo] - gwaltowne zaprzeczenie
  'gppotwierdz', // [slowa kogo] - zgodne potwierdzenie
  'gppobaw sie warkoczem', // chwila zabawy z warkoczem
  'gpzarzuc', // <co> - zarzucenie tarczy na plecy
  'gpzarzuc tarcze',
  'gpzdejmij', // zdjecie tarczy z plecow
];

let pluginApi: PluginApi | null = null;

export async function init(api: PluginApi): Promise<PluginInfo> {
  pluginApi = api;
  api.command.addSuggestions(...SUGGESTIONS);

  return {
    name: PLUGIN_NAME,
    version: PLUGIN_VERSION,
    author: PLUGIN_AUTHOR,
    description: PLUGIN_DESCRIPTION,
  };
}

export async function destroy(): Promise<void> {
  // The host calls destroy() with no arguments, so use the api captured at init.
  // It also drops the suggestions on unload; removing them here keeps a reload clean.
  pluginApi?.command.removeSuggestions(...SUGGESTIONS);
  pluginApi = null;
}
