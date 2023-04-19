import "./Worker.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const Worker = (props) => {
  const { nombre, puesto, foto, id, fav } = props.worker;
  const { colorCard } = props.data;
  const { deleteWorker, like } = props;

  return (
    <div className="worker">
      <AiFillCloseCircle
        className="delete-icon"
        onClick={() => deleteWorker(id)}
      />

      <div className="header" style={{ backgroundColor: colorCard }}>
        <img src={foto} alt={nombre} />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {fav ? (
          <AiFillHeart
            color="red"
            onClick={() => {
              like(id);
            }}
          />
        ) : (
          <AiOutlineHeart
            onClick={() => {
              like(id);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Worker;
