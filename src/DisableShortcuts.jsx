import React, { useEffect } from 'react';

const DisableShortcuts = () => {
  useEffect(() => {
    // Disable Right-Click
    const disableContextMenu = (event) => event.preventDefault();
    document.addEventListener('contextmenu', disableContextMenu);

    // Disable Specific Keyboard Shortcuts
    const disableShortcuts = (event) => {
      if (event.keyCode === 123 || 
          (event.ctrlKey && event.shiftKey && (event.keyCode === 73 || event.keyCode === 67 || event.keyCode === 74)) || 
          (event.ctrlKey && event.keyCode === 85)) {
        event.preventDefault();
      }
    };
    document.addEventListener('keydown', disableShortcuts);

    // Clean up the event listeners on component unmount
    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('keydown', disableShortcuts);
    };
  }, []);

  return null; // This component does not render anything
};

export default DisableShortcuts;
