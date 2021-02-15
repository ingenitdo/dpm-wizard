import { ObjectId } from "./ObjectId";

export type GlossarItem = {
  id: ObjectId;
  keywords: string[];
  title: string;
  content: string; //Rich-Text
}