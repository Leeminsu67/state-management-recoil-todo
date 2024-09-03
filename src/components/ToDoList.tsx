import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoState } from "../Atoms";
import ToDo from "./ToDo";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoState);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

// interface IForm {
//   Email: string;
//   First_Name: string;
//   Last_Name: string;
//   Username: string;
//   Password: string;
//   Password1: string;
//   extraError?: string;
// }

// function ToDoList() {
//   // register 함수를 사용하면 onChange 이벤트 핸들러가 필요없다 setState도
//   // watch는 form의 입력값들의 변화를 관찰 할 수 있게 해주는 함수
//   // watch는 입력값들의 값들이 바뀔 때마다 확인을 할 것임 form 입력값 추적
//   // defaultValues 에 객체 안에 값을 넣으면 기본값으로 들어감
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<IForm>({
//     defaultValues: {
//       Email: "@naver.com",
//     },
//   });

//   // react-hook-form이 validation을 다 마쳤을 때만 호출됨
//   const onValid = (data: IForm) => {
//     console.log(data);
//     if (data.Password !== data.Password1) {
//       setError(
//         "Password1",
//         { message: "Password are not the same" },
//         { shouldFocus: true }
//       );
//     }

//     // setError("extraError", { message: "Server offline." });
//   };

//   console.log(errors);
//   return (
//     <div>
//       {/* 첫번째 인자는 데이터가 유효할 때 호출되는 함수 두번째는 유효하지 않을때 호출되는 함수 */}
//       <form
//         style={{ display: "flex", flexDirection: "column" }}
//         onSubmit={handleSubmit(onValid)}
//       >
//         {/* register 함수가 반환하는 객체를 가져다가 input에 props로 준다. */}
//         {/* onChange 이벤트와 value useState를 모두 대체 */}
//         <input
//           {...register("Email", {
//             required: "Email is required",
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: "Only your email naver.com",
//             },
//           })}
//           placeholder="Email"
//         />
//         <span style={{ color: "red" }}>
//           {errors?.Email?.message?.toString()}
//         </span>
//         <input
//           {...register("First_Name", {
//             required: "First_Name is required",
//             validate: {
//               noNico: async (value) =>
//                 value.includes("nico") ? "no nicos allowed" : true,
//               noNick: async (value) =>
//                 value.includes("nick") ? "no nick allowed" : true,
//             },
//           })}
//           placeholder="First_Name"
//         />
//         <span style={{ color: "red" }}>
//           {errors?.First_Name?.message?.toString()}
//         </span>
//         <input
//           {...register("Last_Name", { required: "Last_Name is required" })}
//           placeholder="Last_Name"
//         />
//         <span style={{ color: "red" }}>
//           {errors?.Last_Name?.message?.toString()}
//         </span>
//         <input
//           {...register("Username", {
//             required: "Username is required",
//             minLength: 10,
//           })}
//           placeholder="Username"
//         />
//         <span style={{ color: "red" }}>
//           {errors?.Username?.message?.toString()}
//         </span>
//         <input
//           {...register("Password", {
//             required: "Password is required",
//             minLength: 5,
//           })}
//           placeholder="Password"
//         />
//         <span style={{ color: "red" }}>
//           {errors?.Password?.message?.toString()}
//         </span>
//         <input
//           {...register("Password1", {
//             required: "Password is required",
//             minLength: { value: 5, message: "Your password is too short" },
//           })}
//           placeholder="Password1"
//         />
//         <span style={{ color: "red" }}>
//           {errors?.Password1?.message?.toString()}
//         </span>
//         <button>Add</button>
//         <span style={{ color: "red" }}>
//           {errors?.extraError?.message?.toString()}
//         </span>
//       </form>
//     </div>
//   );
// }

// export default ToDoList;
