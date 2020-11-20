import React from "react";

const FuncCounter = React.memo(({ counter, data }) => {
    console.log("Render func component");
    return (
        <div>
            Counter: {counter} | {data.counter}
        </div>
    );
});

export default FuncCounter;
// export default function FuncCounter(props) {
//     console.log("Render func component");
//     return (
//         <div>
//             Counter: {props.counter} | | {props.data.counter}
//         </div>
//     );
// }
