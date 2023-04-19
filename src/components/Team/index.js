import "./Team.css";
import Worker from "../Worker";
import hexToRgba from "hex-to-rgba";

const Team = (props) => {
  const { workers, deleteWorker, changeColor, like } = props;
  const { colorCard, title, id } = props.data;

  let newColorBackground = hexToRgba(colorCard, 0.6);

  return (
    <>
      {workers.length > 0 && (
        <section
          className="team"
          style={{ backgroundColor: newColorBackground }}
        >
          <input
            className="input-color"
            type="color"
            value={colorCard}
            onChange={(e) => {
              changeColor(e.target.value, id);
            }}
          />
          <h3 style={{ borderColor: colorCard }}>{title}</h3>
          <div className="workers">
            {workers.map((worker, index) => {
              return (
                <Worker
                  worker={worker}
                  data={props.data}
                  deleteWorker={deleteWorker}
                  key={index}
                  like={like}
                />
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default Team;
