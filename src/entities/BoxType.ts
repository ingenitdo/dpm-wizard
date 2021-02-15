import { ObjectId } from "./ObjectId";

export type BoxType = {
  id: ObjectId;
  title?: string;
  color: string;
  textColor: string;
  colorInactive: string;
  textColorInactive: string;
  borderColor?: string;

  borderWidth?: number;
  borderStrokeDasharray?: string;
  legend?: boolean;
  legendOrder?: number;
  legendLabel?: string;
  sourceDefault?: boolean;
  purposeDefault?: boolean;
  actionDefault?: boolean;

  labelSize: number;
  shortInfoLabelSize: number;

  shortInfoBackground?: string;
  shortInfoActiveBackground?: string;
  infoIconBackground?: string;
  infoIconActiveBackground?: string;
  policyIconBackground?: string;
  policyIconActiveBackground?: string;
}