export interface StrAndObjProps {
  str2obj: (str: string) => Record<string, any>;
  obj2str: (obj: Record<string, any>) => string;
}
