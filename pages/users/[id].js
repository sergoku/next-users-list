import { useRouter } from "next/router";
import AppLink from "../../components/AppLink.js";
import HeadContainer from "../../components/HeadContainer.js";
export default function ({ user }) {
  const { query } = useRouter();
  return (
    <>
      <HeadContainer>
        {" "}
        <h1>User: {query.id}</h1>
        <h2>Name: {user.name}</h2>
        <div>{AppLink({ href: "/", text: "Home" })}</div>
      </HeadContainer>
    </>
  );
}
export async function getServerSideProps({ params }) {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await responce.json();
  return {
    props: { user },
  };
}
