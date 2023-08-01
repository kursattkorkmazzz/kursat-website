export default function cn(className: {}): string {
  let styles = " ";
  Object.values(className).map((v) => {
    styles += " " + v;
  });
  return styles;
}

export function combineRecursive(object: {}): string {
  let styles = " ";
  Object.values(object).map((v) => {
    if (typeof v === "object") {
      //Recursive
      styles += " " + combineRecursive(v!);
    }
    styles += " " + v;
  });
  return styles;
}
