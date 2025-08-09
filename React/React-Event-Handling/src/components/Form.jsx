function handleFormSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Handle form submission logic here
  console.log("Form submitted!");
}

export default function Form() {
  return (
    <form action="/" onSubmit={handleFormSubmit}>
      <input placeholder="Write something..." />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
