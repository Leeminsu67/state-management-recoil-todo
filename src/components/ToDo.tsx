import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../Atoms";

// find to do based on id
// 수정하고자 하는 to do의 경로를 알아야함
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
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name };
      console.log("replace the to do in the index");
      return oldToDos;
    });
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
