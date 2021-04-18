import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from "universal-cookie";
import { Link } from 'react-router-dom';
import Alert1 from '../Account/Alert1';
import moment from "moment";
function ListPost() {
    const cookies = new Cookies();
    const [posts, setPosts] = useState([])
    useEffect(() => {
        onLoadPost()
    }, [])

    const setHeader = {
        headers: {
            Authorization: 'Bearer ' + cookies.get('ppe-fe-token-register-sang')
            // ở đây pải sử dụng token của register thay vì của login, nếu sử dụng của login thì báo lỗi là Unauthenticated, cái này ko rõ là do lỗi của phía backend chưa hoàn thiện hay ?
        }
    }
    const onLoadPost = () => {
        axios.get('http://happy_eyes.ppe-be.codeby.com/api/posts', { headers: setHeader.headers })
        // đoạn này thì ko thể dùng http://happy_eyes.test/api/posts' như video, nó báo lỗi là heades are shown gì đó, ko rõ, khi làm việc thường thì phải thống nhất với backend tránh nhầm lẫn những đoạn này, vì rất mất thời gian fix hay tìm ra lỗi, vì vẫn chưa nắm dc react
        .then(function (response) {
            setPosts(response?.data?.data)
            console.log(response.data.data)
            // thằng ? giúp xóa lỗi dù trong data có lỗi hay không, thay vì hiển thị lỗi trên console hay là không show ra dc trên giao diện, thì nó đơn giản trả về underfined, như vậy tiện hơn
        })
        .catch(function (error) {
        });
    }
    const onDelete = (post) => {
        if(window.confirm('Are u sure, wanna delete this post?')){
            axios.delete(`http://happy_eyes.ppe-be.codeby.com/api/posts/${post.id}`, setHeader)
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
                        <h3 className= "font-bold uppercase">{post.title}</h3>
                        <p>{post.description}</p>
                        <p className="text-gray-400">{moment(post.created_at).fromNow()}</p>
                    </Link>
                    <button className= "btn my-3 rounded-sm" onClick= {(e) => onDelete(post)}>
                        Delete
                    </button>
                </li>
            )}
        </ul>
        </div>
    )
}
export default ListPost;
