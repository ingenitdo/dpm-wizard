import { ObjectId } from "./ObjectId";
import { Position } from "./Position";

export type Connection = {
  id: ObjectId;
  label: string;
  textEllipsis: boolean;
  typeId?: string; //ConnectionType
  source: string; //DataSource | Action;
  destination: string; //DataPurpose | Action;
  position: Position;
}