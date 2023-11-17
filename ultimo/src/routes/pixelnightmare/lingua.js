import { writable } from 'svelte/store';
// @ts-ignore
import sto from '/src/routes/pixelnightmare/story.json';
// @ts-ignore
import stoeng from '/src/routes/pixelnightmare/storyeng.json';
export const lingua = writable(sto);
