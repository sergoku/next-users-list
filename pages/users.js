import AppLink from "../components/AppLink";
import HeadContainer from "../components/HeadContainer";

const Users = ({ users }) => {
  return (
    <>
      <HeadContainer>
        {" "}
        <div className="navbar">
          <h1>Users</h1>
          <div>
            {users.map((el) => {
              return (
                <h3 key={el.id}>
                  {AppLink({
                    href: `/users/${el.id}`,
                    text: `${el.id} / ${el.name}`,
                  })}
                </h3>
              );
            })}
          </div>
        </div>
      </HeadContainer>
    </>
  );
};

export default Users;

export async function getStaticProps(context) {
  const responce = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await responce.json();
  return {
    props: { users },
  };
}
