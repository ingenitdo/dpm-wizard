import { ObjectId } from "./ObjectId";

export type ConnectionType = {
  id: ObjectId;
  title?: string;
  color: string;
  textColor: string;
  colorInactive?: string;
  textColorInactive?: string;
  strokeDasharray?: string;
  legend?: boolean;
  legendOrder?: number;
  legendLabel?: string;
  default?: boolean;
  labelSize: number;
}