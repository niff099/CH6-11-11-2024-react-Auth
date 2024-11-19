function HoverButton({ children, onSelect }) {
  //   document.querySelector("button").addEventListener("click", () => {
  //     console.log("hai FSW 2 !!!");
  //   });

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

export default HoverButton;
