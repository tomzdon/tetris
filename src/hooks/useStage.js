import React, { useState, useEffect } from "react";
import { createStage } from "../../src/constants/helpers";


export const useStage = (player, currentFigure, checkCollid, resetPlayer) => {
    const [stage, setStage] = useState(createStage());

    useEffect(() => {
        const updateStage = prevStage => {
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
        if (checkCollid()) {
            return resetPlayer;
        }

        setStage(prev => updateStage(prev));
    }, [player.position.x, player.position.y]);

    return [stage, setStage];
};