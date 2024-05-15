import { useState, useRef } from "react";
import "./index.css";
import WhiteBoard from "../../components/Whiteboard";

const RoomPage = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const [tool, setTool] = useState("pencil");
  const [color, setColor] = useState("black");
  const [elements, setElements] = useState([]);

  return (
    <div className="row">
      <h1 className="text-center py-4">
        White Board Sharing App
        <span className="text-primary">[Users Online : 0]</span>
      </h1>
      <div className="col-md-10 mx-auto px-5 mb-3 d-flex align-items-center justify-content-center">
        <div className="d-flex col-md-2 justify-content-center gap-1">
          <div className="d-flex gap-1">
            <label htmlFor="pencil">Pencil</label>
            <input
              type="radio"
              id="pencil"
              checked={tool === "pencil"}
              name="tool"
              value="pencil"
              onChange={(e) => setTool(e.target.value)}
            />
          </div>
          <div className="d-flex gap-1">
            <label htmlFor="line">Line</label>
            <input
              type="radio"
              id="line"
              checked={tool === "line"}
              name="tool"
              value="line"
              onChange={(e) => setTool(e.target.value)}
            />
          </div>

          <div className="d-flex gap-1">
            <label htmlFor="rect">Rectangle</label>
            <input
              type="radio"
              id="rect"
              checked={tool === "rect"}
              name="tool"
              value="rect"
              onChange={(e) => setTool(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-3 mx-auto">
          <div className="d-flex align-items-center justify-content-center">
            <label htmlFor="color">Select Color: </label>
            <input
              type="color"
              id="color"
              className="mt-1 ms-3"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-3 d-flex gap-2">
          <button className="btn btn-primary mt-1">Undo</button>
          <button className="btn btn-outline-primary mt-1">Redo</button>
        </div>
        <div className="col-md-2">
          <button className="btn btn-danger">Clear Board</button>
        </div>
      </div>

      <div className="col-md-10 mx-auto mt-4 canvas-box">
        <WhiteBoard
          canvasRef={canvasRef}
          ctxRef={ctxRef}
          elements={elements}
          setElements={setElements}
        />
      </div>
    </div>
  );
};

export default RoomPage;
