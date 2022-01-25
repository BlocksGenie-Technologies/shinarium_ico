import { useCallback, useContext } from "react";
import { LateralPanelContext } from "../providers/LateralPanelProvider";

const useLateralPanel = ({ content, title, onClose }) => {
  const { onOpenPanel } = useContext(LateralPanelContext);

  const openPanel = useCallback(
    () => onOpenPanel({ title, content, onClose }),
    [title, content]
  );

  return [openPanel];
};

export default useLateralPanel;
