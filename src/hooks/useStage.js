import React, { useState, useEffect } from "react";
import { createStage } from "../../src/constants/helpers";

export const useStage = (player, currentFigure) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const updateStage =  prevStage => {
      console.log(prevStage);
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      );
      currentFigure.forEach((row, y) => {
        row.forEach((value, x) => {
          newStage[y + player.position.y][x + player.position.x] = [
            value,
            "clear"
          ];
        });
      });
      return newStage;
    };

    setStage(prev =>  updateStage(prev));
  }, [player.position.x]);

  return [stage, setStage];
};
