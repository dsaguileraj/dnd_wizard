import { BaseProps } from "@core/interfaces/core";

export function getOptions(query: BaseProps[]) {
  let options: any[] = [{ value: undefined, label: "---" }];
  query.forEach((data) => {
    options.push({ value: data?.id, label: data.name });
  });
  return options;
}
