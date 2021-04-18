import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from "universal-cookie";
import { Link } from 'react-router-dom';
import Alert1 from '../Account/Alert1';
import moment from "moment";
function AllPost() {
    const cookies = new Cookies();
    const [posts, setPosts] = useState([])
    useEffect(() => {
        onLoadPost()
    }, [])

    const setHeader = {
        headers: {
            Authorization: 'Bearer ' + cookies.get('ppe-fe-token-register-sang')
        }
    }
    const onLoadPost = () => {
        axios.get('http://happy_eyes.ppe-be.codeby.com/api/all-posts', { headers: setHeader.headers })
        .then(function (response) {
            setPosts(response?.data?.data.posts)
            console.log(response.data)
            console.log(response.data.data.posts)
            console.log(response.data.data.users)
        })
        .catch(function (error) {
        });
    }
    const onDelete = (post) => {
        if(window.confirm('Are u sure, wanna delete this post?')){
            axios.delete(`http://happy_eyes.ppe-be.codeby.com/api/posts/${post.id}`, setHeader)
            // ở đây link dân api phải là posts, ban đầu tưởng là sử dụng với all-post nên không delete được, nếu sử dụng như trên thì lại ok, không rõ là do backend hay j?
            .then(function (response) {
                if (response.data.status) {
                    onLoadPost()
                } else {
                    Alert1({ t: `error`, c: [response.data.message] });
                }
                console.log(response);
            })
            .catch(function (error) {
            });
        }  
    }
    return (
        <div className="mx-auto max-w-md">
        <nav className= "uppercase flex space-x-4 justify-center py-3 ">
            <Link className= "text-blue-700 hover:underline hover:text-indigo-700 font-bold" to = "/listpost">My Posts</Link>
            <Link className= "" to = "/allpost">All Posts</Link>
            <Link className= "" to = "/createpost">Create Posts</Link>
        </nav>
        <ul>
            {posts.map((post, key) => 
                <li className= "border-t py-2 my-2" key = {post.id}>
                    <Link to={`/editPost/${post.id}`}>
                        <p className= "text-gray-200">Create by: {post}</p>
                        <h3 className= "font-bold uppercase">{post.title}</h3>
                        <p>{post.description}</p>
                        <p className="text-gray-400">{moment(post.created_at).fromNow()}</p>
                    </Link>
                    <button className= "btn my-3 rounded-sm" onClick= {(e) =>onDelete(post)}>
                        Delete
                    </button>
                </li>
            )}
        </ul>
        </div>
    )
}
export default AllPost;
