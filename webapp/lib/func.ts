export const clamp = (min: number, max: number, input: number) =>
  input > max ? max : input < min ? min : input
