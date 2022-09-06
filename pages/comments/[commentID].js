import { comments } from '../../data/comments'
const CommentDetails = ({ comment }) => {
    return (
        <div>
            <p>{comment.id} {comment.comment}</p>
        </div>
    )
}
export default CommentDetails;

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { commentID: '1' }
            },
            {
                params: { commentID: '2' }
            },
            {
                params: { commentID: '3' }
            }
        ],
        fallback: false
    }
}
export async function getStaticProps(context) {
    const { params } = context
    const { commentID } = params
    const comment = comments.find(comment => comment.id === parseInt(commentID))
    console.log(comment);
    return {
        props: {
            comment: comment
        }
    }
}