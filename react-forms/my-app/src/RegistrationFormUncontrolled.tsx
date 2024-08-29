export function RegistrationFormUncontrolled() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const $form = event.currentTarget;
    const formData = new FormData($form);
    const formDataObj = Object.fromEntries(formData);

    console.log('username: ', formDataObj.username);
    console.log('password:', formDataObj.password);
  }

  return (
    <div>
      <h3>Uncontrolled Form</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            Username:
            <input name="username" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
