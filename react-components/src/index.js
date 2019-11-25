import React from "react";
import ReactDOM from "react-dom";

// functional component
// const Greeting = props => {
//   //   console.log(props);
//   return (
//     <div>
//       <h1>Hello {props.firstName}!</h1>
//       <p>You are from {props.country}</p>
//     </div>
//   );
// };

// class component
// class Greeting extends React.Component {
//   render() {
//     // console.log(this.props);
//     return (
//       <div>
//         <h1>Hello {this.props.firstName}!</h1>
//         <p>You are from {this.props.country}</p>
//       </div>
//     );
//   }
// }

import App from "./App.js";

ReactDOM.render(
  //   <div>
  //     <Greeting firstName="Fatma" country="Tunisia" />
  //     <Greeting firstName="Shan" country="Hong-Kong" />
  //   </div>,
  <App />,
  document.getElementById("root")
);
