import { DefineComponent, DefineSetupFnComponent, VueElement } from "vue";

export interface BuiltInCardOptions {
	title: string;
	cover: string;
	tags: string[];
	date: Date;
	id: number;
	color: string;
	link?: string;
	fontColor?: string;
}
export type Card = DefineSetupFnComponent;
