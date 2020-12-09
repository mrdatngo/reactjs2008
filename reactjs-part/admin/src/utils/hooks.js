import { useState } from "react";
// custom Hooks
function useFormInput(initValue) {
    const [value, setValue] = useState(initValue);

    const onChange = function (event) {
        setValue(event.target.value);
    };

    return [value, onChange];
}

export { useFormInput };
