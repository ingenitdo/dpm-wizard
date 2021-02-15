import { LanguageIdentifier } from "./LanguageIdentifier";
import { Colors } from "./Colors";
import { BoxType } from "./BoxType";
import { MasterData } from "./MasterData";
import { FixedLabels } from "./FixedLabels";
import { ConnectionType } from "./ConnectionType";
import { Participant } from "./Participant";
import { Case } from "./Case";
import { SourceInformation } from "./SourceInformation";
import { RevisionHistory } from "./RevisionHistory";
import { GlossarItem } from "./GlossarItem";
import { CustomSymbol } from "./CustomSymbol";
import { TutorialType } from "./TutorialType";
import { HeaderType } from "./HeaderType";
import { Dimensions } from "./Dimensions";

export type Model = {
  version: string;
  masterData: MasterData;
  language: LanguageIdentifier;
  title?: string;
  subtitle?: string;
  header: HeaderType;
  participants: Participant[];
  connectionTypes: ConnectionType[];
  boxTypes: BoxType[];
  cases: Case[];
  sourceInformation?: SourceInformation;
  revisionHistory?: RevisionHistory;
  glossar?: GlossarItem[];
  isDialogFullsize: boolean;
  isDetailedIcons: boolean;
  fixedLabels?: FixedLabels;
  colors: Colors;
  dimensions: Dimensions;
  predefinedSymbols?: CustomSymbol[];
  customSymbols?: CustomSymbol[];
  tutorial?: TutorialType;
}