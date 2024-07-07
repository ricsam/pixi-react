import type { PixiElements } from './PixiElements.ts';

export type NamespacedPixiElements = {
    [K in keyof PixiElements as `pixi${Capitalize<string & K>}`]: PixiElements[K];
};