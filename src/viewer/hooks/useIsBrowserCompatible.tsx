import { useBrowser } from "./useBrowser";
import { useEffect, useState } from "react";
import { BrowserCompatibility } from "../../entities/BrowserCompatibility";

export const useIsBrowserCompatible = (browser_compatiblity: BrowserCompatibility) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [browserName, fullVersion, majorVersion] = useBrowser();
  const [isBrowserCompatible, setIsBrowserCompatible] = useState<boolean>(true);
  const [isLowMode, setIsLowMode] = useState<boolean>(false);

  useEffect(() => {
    if(!!browserName) {
      if(browserName === "Opera") {
        setIsBrowserCompatible(Number(majorVersion) >= browser_compatiblity.OPERA);
      } else     if(browserName === "Edge") {
        setIsBrowserCompatible(Number(majorVersion) >= browser_compatiblity.EDGE);
        setIsLowMode(true);
      } else     if(browserName === "Chrome") {
        setIsBrowserCompatible(Number(majorVersion) >= browser_compatiblity.CHROME);
      } else     if(browserName === "Safari") {
        setIsBrowserCompatible(Number(majorVersion) >= browser_compatiblity.SAFARI);
      } else     if(browserName === "Firefox") {
        setIsBrowserCompatible(Number(majorVersion) >= browser_compatiblity.FIREFOX);
      } else {
        setIsBrowserCompatible(false);
      }
    }

  },[browserName, majorVersion]);
  return [isBrowserCompatible, isLowMode];
};
