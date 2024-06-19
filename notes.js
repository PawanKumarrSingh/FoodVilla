/***
 *
 * HMR- Hot Module Reload due to which web reload when we save any file
 * Parcel act as a bundler
 * Parcel MINIFY the code
 * cleans our code
 * caching while development
 * *Transitive dependencies
 * allow https build
 */

// const container = React.createElement(
//   "div",
//   { style: { color: "white", backgroundColor: "#787878" } },
//   React.createElement("h1", {}, "Heading1"),
//   React.createElement("h2", {}, "Heading2")
// );

//^This HTML like structure used here is known as JSX
// ^Internally JSX is converted to React.createElement by babel
// ^JSX => React.createElement => Object => DOM.
//&This is React element
// const container = (
//   <div>
//     <h1 id="pawn">Pawna kumar singh</h1>
//   </div>
// );

//^ Everything in React is rendered as component
// ^ Components are of two types Functional and class based component
//^ Functional component are nothing but normal functions with JSX as return type
// ^ Component name should start with capital letter
//& This is REACT component
// const Heading = () => {
//   return (
//     <div>
//       {10 + "abc"}
//       <h1>This is h1 tag</h1>
//       <h2>This is h2 tag</h2>
//     </div>
//   );
// };

// ^ component composition :Component composition in React involves the inclusion of one or more components in a single component, where each sub-component can further consist of additional components.
//^ JSX can have only one parent
//^ React.Fragment is a component
//^ config driven UI
//^ index of map fun should not be used as key no key<<<<<index << unique key(best practice)
