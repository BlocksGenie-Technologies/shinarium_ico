import { useCallback, useContext } from "react";
import { LateralPanelContext } from "../providers/LateralPanelProvider";

const useLateralPanel = ({ content, title }) => {
  const { onOpenPanel } = useContext(LateralPanelContext);
  const openPanel = useCallback(
    () => onOpenPanel({ title, content }),
    [title, content]
  );

  return [openPanel];
};

export default useLateralPanel;
