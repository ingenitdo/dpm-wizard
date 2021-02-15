import { ObjectId } from "./ObjectId";
import { DataSource } from "./DataSource";
import { DataPurpose } from "./DataPurpose";
import { Action } from "./Action";
import { Connection } from "./Connection";
import { ItemSymbol } from "./ItemSymbol";

export type Case = {
  id: ObjectId;
  label: string;
  dataSources: DataSource[];
  dataPurposes: DataPurpose[];
  actions: Action[];
  connections: Connection[];
  shortInfo?: string[]; //visible bubble
  infoTitle?: string; //Rich-Text
  info?: string; //Rich-Text
  permissions?: string; // Rich-Text
  isOpen: boolean;
  itemSymbols?: ItemSymbol[];
}