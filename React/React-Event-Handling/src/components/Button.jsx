function handleClick() {
  console.log("Button clicked!");
}


export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Count ++</button>
      <p onMouseOver={() => console.log("Mouse over the paragraph!")}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa numquam
        Sapiente minima aliquam facere quod tenetur libero dolore vitae at
        deleniti saepe.
      </p>
      <button onDoubleClick={() => console.log("Double clicked!!")}>Double Click!!</button>
    </div>
  );
}
