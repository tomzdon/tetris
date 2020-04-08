import React, { useState, useEffect } from "react";
import { createStage } from "../helpers";

export const useStage = (player, currentFigure, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const sweepRows = (newStage) => {};

    const updateStage = (prevStage) => {
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );
      currentFigure.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.position.y][x + player.position.x] = [
              value,
              `${player.collid ? "merged" : "clear"}`,
            ];
          }
        });
      });
      if (player.collid) {
        resetPlayer();
        // return sweepRows(newStage);
      }

      return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, [player.position.x, player.position.y, player.collid]);

  return [stage, setStage];
};
