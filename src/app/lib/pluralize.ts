import integerFormatter from "./integerFormatter";

interface PluralizeProps {
  count: number;
  digits?: number;
  noun: string;
  suffix?: string;
}

const pluralize = ({ count, digits = 5, noun, suffix = "s" }: PluralizeProps): string => {
  return `${integerFormatter(count, digits)} ${noun}${count !== 1 ? suffix : ""}`;
};

export default pluralize;
