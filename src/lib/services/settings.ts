import { writable } from 'svelte/store';
import ls from 'localstorage-slim';
import {
	type LocalSettings,
	type GlobalSettings,
	DEFAULT_LOCALSETTINGS,
	DEFAULT_GLOBALSETTINGS
} from '$lib/types/Settings';

export const localSettings = writable<LocalSettings>(
	ls.get('localSettings') ?? DEFAULT_LOCALSETTINGS
);

export const globalSettings = writable<GlobalSettings>(DEFAULT_GLOBALSETTINGS);
