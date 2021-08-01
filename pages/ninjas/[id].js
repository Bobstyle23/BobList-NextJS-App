export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const data = await response.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>Name: {ninja.name}</h1>
      <p>E-mail: {ninja.email}</p>
      <p>Website: {ninja.website}</p>
      <p>City: {ninja.address.city}</p>
      <p>Phone: {ninja.phone}</p>
    </div>
  );
};

export default Details;
