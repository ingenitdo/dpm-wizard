import { ItemSymbol } from "./ItemSymbol";
import { ObjectId } from "./ObjectId";
import { ProcessedDataSource } from "./ProcessedDataSource";
import { ProcessedAction } from "./ProcessedAction";
import { ProcessedConnection } from "./ProcessedConnection";
import { RowHeight } from "./RowHeight";
import { ConnectionGapHeight } from "./ConnectionGapHeight";
import { ProcessedDataPurpose } from "./ProcessedDataPurpose";


export type ProcessedCase = {
  id: ObjectId;
  label: string;
  dataSources: ProcessedDataSource[];
  dataPurposes: ProcessedDataPurpose[];
  actions: ProcessedAction[];
  connections: ProcessedConnection[];
  shortInfo?: string[]; //visible bubble
  infoTitle?: string; //Rich-Text
  info?: string; //Rich-Text
  permissions?: string; //Rich-Text

  rowHeights: RowHeight[];
  connectionGapHeights: ConnectionGapHeight[];

  isOpen: boolean;
  x: number;
  y: number;
  width: number;
  height: number;

  itemSymbols?: ItemSymbol[];
}