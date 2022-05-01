import { SvelteComponentTyped } from "svelte";

declare type Align = "start" | "center" | "end" | "stretch";

declare type Justify =
  | "start"
  | "center"
  | "end"
  | "around"
  | "between"
  | "evenly";

declare type Direction = "row" | "column";

export interface FlexProps {
  align?: Align;
  justify?: Justify;
  direction?: Direction;
  reverse?: boolean;
}

export default class Flex extends SvelteComponentTyped<FlexProps> {}
