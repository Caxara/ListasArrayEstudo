export function PlaceInput(props: {
  valorInput: string;
  setvalorInput: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div>
      <input
        value={props.valorInput}
        onChange={(e) => {
          props.setvalorInput(e.target.value);
        }}
      ></input>
    </div>
  );
}
