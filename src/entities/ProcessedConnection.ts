import { Connection } from "./Connection";
import { ConnectionType } from "./ConnectionType";

export type ProcessedConnection = {
  connection: Connection;
  connectionType: ConnectionType;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  textX: number;
  textY: number;
  textWidth: number;
  textHeight: number;
  textAnchor: string;
  arrowTranslate: string;
  arrowD: string;
  startX?: number;
  startY?: number;
}