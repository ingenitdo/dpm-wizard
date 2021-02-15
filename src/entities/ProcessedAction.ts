import { Action } from "./Action";

export type ProcessedAction = {
  action: Action;
  x: number;
  y: number;
  width: number;
  height: number;
}