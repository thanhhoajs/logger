export const Colors = {
  Reset: '\x1b[0m',
  Red: Bun.color('red', 'ansi'),
  Green: Bun.color('#00ff00', 'ansi'),
  Yellow: Bun.color('#ffff00', 'ansi'),
  Blue: Bun.color('#0000ff', 'ansi'),
  Magenta: Bun.color('#ff00ff', 'ansi'),
  Cyan: Bun.color('#00ffff', 'ansi'),
  Gray: Bun.color('#808080', 'ansi'),
  DarkYellow: Bun.color('hsl(50, 100%, 40%)', 'ansi'),
  Silver: Bun.color('#c0c0c0', 'ansi'),
  BrownGray: Bun.color('#8b7355', 'ansi'),
  BrightWhite: Bun.color('#ffffff', 'ansi'),
} as const;

export type Color = keyof typeof Colors;
