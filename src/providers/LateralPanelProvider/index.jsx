import React, { useState, createContext, useCallback, useContext } from "react";
import LateralPanel from "../../components/LateralPanel";

export const LateralPanelContext = createContext({});

const LateralPanelProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState("");

  const onClosePanel = useCallback(() => {
    setIsOpen(false);
    setContent(null);
  }, []);

  const onOpenPanel = useCallback(
    ({ content: panelContent, title: panelTitle, onClose }) => {
      const wrappedOnClose = (args) => {
        onClose(args);
        onClosePanel();
      };
      const contentWithProps = React.cloneElement(panelContent, {
        onClose: wrappedOnClose
      });
      setContent(contentWithProps);
      setTitle(panelTitle);
      setIsOpen(true);
    },
    []
  );

  return (
    <LateralPanelContext.Provider value={{ onOpenPanel, onClosePanel }}>
      {children}
      <LateralPanel isOpen={isOpen} title={title} onClose={onClosePanel}>
        {content}
      </LateralPanel>
    </LateralPanelContext.Provider>
  );
};

export default LateralPanelProvider;
