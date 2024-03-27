import "./Grid.css";
import SelectableGrid from "./SelectableGrid";

const Grid = () => {
  return (
    <div className="app">
      <h1>Selectable Grid </h1>

      <SelectableGrid rows={15} cols={15} />
    </div>
  );
};

export default Grid;
