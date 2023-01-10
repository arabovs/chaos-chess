import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { Chessboard } from "react-chessboard";

const IndexPage = () => {
  const [side, setSide] = useState("white");
  const changeSide = () => {
    side == "white" ? setSide("black") : setSide("white");
  };

  return (
    <div>
      <div>
        <Button
          onClick={() => {
            changeSide();
          }}
        >
          Text
        </Button>
      </div>
      <div>
        <Chessboard id="BasicBoard" boardWidth={600} boardOrientation={side} />
      </div>
    </div>
  );
};

export default IndexPage;
