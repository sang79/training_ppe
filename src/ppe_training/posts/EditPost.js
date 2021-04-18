import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from "universal-cookie";
import Alert1 from "../Account/Alert1";
function EditPost({ match }) {
    const { params } = match;
    const { post_id } = params;
    const [post, setPost] = useState({});
    const cookies = new Cookies();
    useEffect(() => {
        const setHeader = {
            headers: {
                Authorization: 'Bearer ' + cookies.get('ppe-fe-token-register-sang')
            }
        }
        axios.get(`http://happy_eyes.ppe-be.codeby.com/api/posts/${post_id}`, { headers: setHeader.headers })
            .then(function (response) {
                setPost(response?.data?.data)
            })
            .catch(function (error) {
            });
    }, [])
        const editPost = (e) => {
            e.preventDefault();
            const payload = new FormData(e.target);
            const setHeader = {
                headers: {
                    Authorization: 'Bearer ' + cookies.get('ppe-fe-token-register-sang')
                }
            }
            axios.post(`http://happy_eyes.ppe-be.codeby.com/api/posts/${post_id}`, payload, setHeader)
            .then(function (response) {
                if (response.data.status) {
                    Alert1({ t: `success`, c: [`Edit post success`] });
                } else {
                    Alert1({ t: `error`, c: [response.data.message] });
                }
                console.log(response);
            })
            .catch(function (error) {
            });
        }
    return (
        <div className="mx-auto max-w-md h-full overflow-hidden mt-10 flex justify-center  rounded-md shadow-md">
            <form onSubmit={(e) => editPost(e)} className="max-w-sm relative bg-gray-100 rounded-lg shadow-md py-10 px-8">
                <h1 className="text-2xl font-bold w-screen">Edit Post</h1>
                <label className="block text-grey-darker text-sm mb-1 mt-4">
                    <span className="block mb-1">Title</span>
                    <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight "
                        type="text"
                        name="title"
                        defaultValue={post?.title} />
                </label>

                <label className="block text-grey-darker text-sm mb-1 mt-4">
                    <span className="block mb-1">Description</span>
                    <textarea className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight row-6 "
                        name="description"
                        defaultValue={post?.description}
                        >

                        </textarea>
                </label>


                <button type="submit" className="my-6 btn font-bold w-full hover:bg-blue-700">Edit</button>
                <input type="hidden" name="_method" value="PUT" />
                {/* phần này nếu không thêm vào thì edit phía trên ko thực hiện dc và network báo lỗi 404 */}
                <button className=" absolute bottom-0 right-0 mr-8 mt-3 btn font-bold w-1/3 hover:bg-blue-700">
                    <Link className="" to="/listpost" >
                        back to lists
                    </Link>
                </button>
            </form>
        </div>
    )
}
export default EditPost;