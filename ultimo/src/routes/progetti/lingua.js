import { writable } from 'svelte/store';
// @ts-ignore
import ita from '/src/routes/textITA.json';
// @ts-ignore
import eng from '/src/routes/textENG.json';
export const lingua = writable(ita);
