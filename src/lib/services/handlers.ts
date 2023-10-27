import { writable } from 'svelte/store';
import { pb } from './pb';
import type { Category, Location } from '$lib/types/Handler';

export const categories = writable<Category[]>(await pb.collection('categories').getFullList());

export const locations = writable<Location[]>(await pb.collection('locations').getFullList());
