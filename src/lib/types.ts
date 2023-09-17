export type Align = 'center' | 'end' | 'start' | 'stretch';

export type Justify =
  'around' | 'between' | 'center' | 'end' | 'evenly' | 'start';

export type Direction = 'column' | 'row';

export type FlexProps = {
  align?: Align;
  justify?: Justify;
  direction?: Direction;
  reverse?: boolean;
  gap?: string;
};
