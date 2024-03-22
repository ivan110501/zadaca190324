type Props = {
  value?: string;
  onChange: (value: string) => void;
};

const Input = ({ value = "", onChange }: Props) => {
  return (
    <>
      <input
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="input"
        type="text"
        value={value}
        placeholder="Enter tag"
      />
    </>
  );
};
export default Input;
