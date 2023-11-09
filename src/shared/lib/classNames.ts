type Mode = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods = {},
  additional: string[] = []
): string  {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => !!value)
      .map(([key]) => key),
  ].join(" ") as string;
}
