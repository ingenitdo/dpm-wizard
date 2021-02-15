import { ObjectId } from "./ObjectId";
import { Position } from "./Position";
import { ItemSymbol } from "./ItemSymbol";

export type DataPurpose = {
  id: ObjectId;
  label: string[];
  position: Position;
  shortInfo?: string[]; //visible bubble
  infoTitle?: string; //Rich-Text
  info?: string; //Rich-Text
  erasurePolicy?: string; //clock icon: ...
  storagePolicy?: string; //storage icon: ...
  typeId?: string; //BoxType
  itemSymbols?: ItemSymbol[];
}