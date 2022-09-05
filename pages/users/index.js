import Link from "next/link";

const UserList = ({ users }) => {
    return (
        <div>
            <h1>List of users:</h1>
            {users.map(user => {
                return (
                    <div key={user.id}>
                        <h2>{user.id}</h2>
                        <Link href={`users/${user.id}`}>{user.name}</Link>
                    </div>
                )
            })}
        </div>
    )
}
export default UserList;

export async function getStaticProps() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    return {
        props: {
            users: data
        }
    }
}