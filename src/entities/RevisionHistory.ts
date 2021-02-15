import { ObjectId } from "./ObjectId";

export type RevisionHistory = {
  id: ObjectId;
  info?: string; //Rich-Text
}