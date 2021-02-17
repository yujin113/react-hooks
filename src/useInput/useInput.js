export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value); // 유효성 검사
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange }; // 기본값을 value와 함께 return
};
