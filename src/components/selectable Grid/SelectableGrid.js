import { useState } from "react";

const SelectableGrid = ({ rows = 10, cols = 10 }) => {
  5;

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedBoxed, setSelectedBoxes] = useState([]);

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  const handleMouseDown = (boxNumber) => {
    setIsMouseDown(true);
    setSelectedBoxes([boxNumber]);
  };
  const handleMouseEnter = (boxNumber) => {
    if (isMouseDown) {
      const startBox = selectedBoxed[0];
      const endBox = boxNumber;

      const startRow = Math.floor((startBox - 1) / cols);
      const startcol = (startBox - 1) % cols;

      const endRow = Math.floor((endBox - 1) / cols);
      const endcol = (endBox - 1) % cols;

      const minRow = Math.min(startRow, endRow);
      const maxRow = Math.max(startRow, endRow);

      const mincol = Math.min(startcol, endcol);
      const maxcol = Math.max(startcol, endcol);
    }
  };

  return (
    <div
      className="grid"
      style={{ "--rows": rows, "--cols": cols }}
      onMouseUp={handleMouseUp}
    >
      {[...Array(rows * cols).keys()].map((_, i) => (
        <div
          key={i}
          className={`box`}
          onMouseDown={() => handleMouseDown(i + 1)}
          onMouseEnter={() => handleMouseEnter(i + 1)}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};
export default SelectableGrid;
