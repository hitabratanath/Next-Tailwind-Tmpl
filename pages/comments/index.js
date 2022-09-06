import { useState } from "react";

const CommentsPage = () => {
    const [comments, setComments] = useState([])
    const [inputComment, setInputComment] = useState('')
    const loadComment = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }
    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comment: inputComment })
        })
        const data = response.json()
        console.log(data);
    }
    const deleteComment = async (id) => {
        const response = await fetch(`/api/comments/${id}`, {
            method: 'DELETE'
        })
        const data = response.json()
        console.log(data);
        loadComment()
    }
    return (
        <div className="mt-4 mx-auto">
            <div className="flex">
                <input type="text" value={inputComment} onChange={(e) => setInputComment(e.target.value)} />
                <button onClick={submitComment} className='bg-slate-300 p-2 rounded-md font-bold my-3 ml-2'>Submit comment</button>
                <button onClick={loadComment} className='bg-slate-300 p-2 rounded-md font-bold my-3 ml-2'>Load comment</button>
            </div>
            <h2>List of comments:</h2>
            {comments.map(comment => <div key={comment.id} className='flex'>
                <p>{comment.comment}</p>
                <button onClick={() => deleteComment(comment.id)} className='bg-red-500 text-white p-2 rounded-lg'>Del</button>
            </div>)}
        </div>
    )
}
export default CommentsPage; 