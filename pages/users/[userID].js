const UserIndividual = ({ user }) => {
    return (
        <div className="bg-slate-100 w-1/5 p-2 text-center shadow-md font-bold mx-auto mt-12 text-2xl text-gray-600 rounded-md">
            <p>{user.username}</p>
        </div>
    )
}
export default UserIndividual;
export async function getStaticPaths() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    const paths = data.map(user => {
        return {
            params: { userID: `${user.id}` }
        }
    })
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`)
    const user = await response.json()
    return {
        props: {
            user
        }
    }
}