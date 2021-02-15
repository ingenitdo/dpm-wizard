import { ViewerMode } from "./ViewerMode";
import { ControlOptions } from "./ControlOptions";

export type MasterData = {
  title: string;
  author: string;
  version: string;
  description: string;
  viewerMode: ViewerMode;
  controlOptions: ControlOptions;
}