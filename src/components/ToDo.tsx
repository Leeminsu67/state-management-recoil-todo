import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../Atoms";

const ToDo = ({ text, category, id }: IToDo) => {
  // typescript tips
  // const onClick = (newCategory: IToDo["category"]) => {
  //   console.log(newCategory);
  // };
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="Doing" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default ToDo;
