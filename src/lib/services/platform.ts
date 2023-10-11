import { Capacitor } from '@capacitor/core';
import { readable } from 'svelte/store';

export const isMobile = readable<boolean>(Capacitor.isNativePlatform());
