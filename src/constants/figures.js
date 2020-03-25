export const figures = {
  0: { positionStart: [[0]], color: "0, 0, 0" },
  I: {
    color: "80, 227, 230",
    positionStart: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0]
    ]
  },
  J: {
    positionStart: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0]
    ],
    color: "36, 95, 223"
  },
  L: {
    positionStart: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"]
    ],
    color: "223, 173, 36"
  },
  O: {
    positionStart: [
      ["O", "O"],
      ["O", "O"]
    ],
    color: "223, 217, 36"
  },
  S: {
    positionStart: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0]
    ],
    color: "48, 211, 56"
  },
  T: {
    positionStart: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0]
    ],
    color: "132, 61, 198"
  },
  Z: {
    positionStart: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0]
    ],
    color: "227, 78, 78"
  }
};

export const randomFigure = () => {
  const figuresName = "IJLSOTZ";
  const figureRandom =
    figuresName[Math.floor(Math.random() * figuresName.length)];
  return figures[figureRandom].positionStart;
};
