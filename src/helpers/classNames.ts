type Mode = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mode,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([, value]) => !!value)
      .map(([key]) => key),
  ].join(' ') as string;
}
