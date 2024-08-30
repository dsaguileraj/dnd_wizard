import { BaseInterface } from "@core/interfaces/core";

export function getOptions(query: BaseInterface[]) {
  let options: any[] = [{ value: undefined, label: "---" }];
  query.forEach((data) => {
    options.push({ value: data?.id, label: data.name });
  });
  return options;
}
