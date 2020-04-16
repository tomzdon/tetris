import React, { useState, useEffect } from "react";

import { DisplayGame } from "../../components/styles/DisplayGame";
import { StaticsGame } from "../../components/styles/StaticsGame";
import { TableWithCells } from "../../components/TableWithCells/TableWithCells";
import { Button } from "../../components/Button/Button";
import { usePlayer } from "../../hooks/usePlayer";
import { useStage } from "../../hooks/useStage";
import { useInterval } from "../../hooks/useInterval";
import { checkCollisions } from "../../helpers";

export const Tetris = () => {
  const [
    player,
    currentFigure,
    positionPlayer,
    resetPlayer,
    setPlayer,
  ] = usePlayer();

  const [stage, setStage] = useStage(player, currentFigure, resetPlayer);

  const movePlayer = (dir) => {
    if (!checkCollisions(player, stage, { x: dir, y: 0 })) {
      positionPlayer(dir, 0, false);
    }
  };

  const move = ({ keyCode }) => {
    if (keyCode === 37) {
      movePlayer(-1);
    } else if (keyCode === 39) {
      movePlayer(1);
    } else if (keyCode === 40) {
    } else if (keyCode === 38) {
    }
  };
  
  const settingsGame = () => {
    if (!checkCollisions(player, stage, { x: 0, y: 1 })) {
      positionPlayer(0, 1, false);
    } else {
      positionPlayer(0, 0, true);
    }
  };

  useInterval(
    () => {
      settingsGame();
    }, 300
  );

  const startGame = () => {
    // resetPlayer();
    // setStage(getFigure());
    // positionPlayer(0, 1);
  };

  return (
    <DisplayGame tabIndex="0" onKeyDown={(e) => move(e)}>
      <TableWithCells stage={stage} />
      <asad>
        <StaticsGame></StaticsGame>
        <Button callback={startGame}> </Button>
      </asad>
    </DisplayGame>
  );
};
