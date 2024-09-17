import { Link } from 'react-router-dom';

export function About() {
  return (
    <>
      <h1>About</h1>
      <p>This is a very real and legit e-commerce website.</p>
      <p>
        Everything here is totally a real product and you can definitely
        purchase it on this website.
      </p>
      <p>Wait, how did you get here?</p>
      <Link to="/">&lt; Go back to the catalog!</Link>
    </>
  );
}
