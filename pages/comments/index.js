import { useState } from "react";

const CommentsPage = () => {
    const [comments, setComments] = useState([])
    const loadComment = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }

    return (
        <div className="mt-4 w-1/5 mx-auto">
            <button onClick={loadComment} className='bg-slate-300 p-2 rounded-md font-bold'>Load comments</button>
            <h2>List of comments:</h2>
            {comments.map(comment => <div key={comment.id}>
                <p>{comment.comment}</p>
            </div>)}
        </div>
    )
}
export default CommentsPage; 