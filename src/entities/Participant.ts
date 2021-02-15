import { ObjectId } from "./ObjectId";
import { IconType } from "./IconType";
import { ItemSymbol } from "./ItemSymbol";

export type Participant = {
  id: ObjectId;
  label: string[];
  labelSize: number;
  hasActionLabel: string;
  hasNoActionLabel: string;
  backgroundColor: string;
  labelColor: string;
  iconColor: string;
  borderColor: string;
  borderSize: number;
  icon?: IconType;
  itemSymbols?: ItemSymbol[];
}