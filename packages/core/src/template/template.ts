import NJFError from "../utils/error";

// The template engine renderer for the component

function templateRenderer(str: string, options: Record<string, any>): string {
  // Regular expression to match {{key}} in the string
  const Reg = new RegExp(/{{\s*([^{}\s]*)\s*}}/g);
  // Replace with the corresponding data value or empty string if not found
  return str.replace(Reg, (match: string, key: string) => {
    const res = key
      .split(".")
      .reduce(
        (acc: any, part: any) =>
          acc && acc[part] !== undefined
            ? acc[part] === null
              ? ""
              : acc[part]
            : "",
        options
      );
    const exist = options[key] === undefined;
    if (!res && exist) {
      throw new NJFError(
        `(${key}) doesn't exist ,return it from the component`
      );
    } else return res;
  });
}

export { templateRenderer };
