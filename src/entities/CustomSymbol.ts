import { IconType } from "./IconType";
import { CustomSymbolPosition } from "./CustomSymbolPosition";

export type CustomSymbol = {
  id: string;
  title: string;
  icon: IconType;
  position: CustomSymbolPosition;
  isDialog: boolean;
  legend: boolean;
  legendLabel: string;
}