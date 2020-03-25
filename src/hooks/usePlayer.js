import React, { useState } from "react";
import { figures, randomFigure } from "../../src/constants/figures.js";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    position: { x: 4, y: 0 },
    currentFigure: figures.I.positionStart
  });

  const resetPlayer = () => {
    setPlayer({
      position: { x: 4, y: 0 }
    });
  };

  const positionPlayer = (x, y) => {
    setPlayer(prev => ({
      ...prev,
      position: { x: (prev.position.x += x), y: (prev.position.y += y) }
    }));
  };

  return [player, player.currentFigure, positionPlayer, resetPlayer, setPlayer];
};
