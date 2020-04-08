import React, { useState } from "react";
import { figures, randomFigure } from "../../src/constants/figures.js";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    position: { x: 4, y: 0 },
    currentFigure: figures.I.positionStart,
    collid: false,
  });

  const resetPlayer = () => {
    setPlayer({
      position: { x: 4, y: 0 },
      currentFigure: randomFigure(),
      collid: false,
    });
  };

  const positionPlayer = (x, y, collid) => {
    setPlayer((prev) => ({
      ...prev,
      position: { x: (prev.position.x += x), y: (prev.position.y += y) },
      collid: collid,
    }));
  };

  return [player, player.currentFigure, positionPlayer, resetPlayer, setPlayer];
};
