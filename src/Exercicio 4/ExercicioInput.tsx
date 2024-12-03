export function ExercicioInput(props: {
  valorInput: string;
  setvalorInput: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div>
      <input
        value={props.valorInput}
        onChange={(evt) => {
          props.setvalorInput(evt.target.value);
        }}
      ></input>
    </div>
  );
}
