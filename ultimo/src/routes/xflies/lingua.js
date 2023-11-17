import { writable } from 'svelte/store';
// @ts-ignore
import ita from '/src/routes/xflies/xtesto.json';
//@ts-ignore
import eng from '/src/routes/xflies/xtestoeng.json';
export const lingua = writable(ita);
