// import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from "universal-cookie";
import Alert1 from "../Account/Alert1";
function CreatePost() {
    const createPost = async (e) => {
        const cookies = new Cookies();
        e.preventDefault();
        const payload = new FormData(e.target);
        console.log('payload', payload);
        const setHeader = {
            headers: {
                Authorization: 'Bearer ' + cookies.get('ppe-fe-token-register-sang')
            }
        }
        axios.post('http://happy_eyes.ppe-be.codeby.com/api/posts', payload, setHeader)
            .then(function (response) {
                if (response.data.status) {
                    Alert1({ t: `success`, c: [`Create post success`] });
                    cookies.set('ppe-fe-token-posts-sang', response.data.data.token, { path: '/', expires: new Date(Date.now() + 25920000000) });
                } else {
                    Alert1({ t: `error`, c: [response.data.message] });
                }
                console.log(response);
            })
            .catch(function (error) {
                const err = error.response.data.message
                Alert1({ t: 'error', c: [err] })
                console.log(error);
            });
    }
    return (
        <div className="mx-auto max-w-md h-full overflow-hidden mt-10 flex justify-center  rounded-md shadow-md">
            <form onSubmit={(e) => createPost(e)} className="max-w-sm relative bg-gray-100 rounded-lg shadow-md py-10 px-8">
                <h1 className="text-2xl font-bold w-screen">Create Post</h1>
                <label className="block text-grey-darker text-sm mb-1 mt-4">
                    <span className="block mb-1">Title</span>
                    <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight "
                        type="text"
                        name="title" />
                </label>

                <label className="block text-grey-darker text-sm mb-1 mt-4">
                    <span className="block mb-1">Description</span>
                    <textarea className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight row-6 "
                        name="description"></textarea>
                </label>


                <button type="submit" className="my-6 btn font-bold w-full hover:bg-blue-700">Create</button>
                <button className=" absolute bottom-0 right-0 mr-8 mt-3 btn font-bold w-1/3 hover:bg-blue-700">
                    <Link className= "" to="/listpost" >
                        your lists
                    </Link>
                </button>

                {/* <div className="h-px bg-gray-200 mt-8 relative">
                    <span className="absolute absolute-y bg-white px-3 mt-px text-sm text-gray-400">or</span>
                </div> */}

            </form>
        </div>
    )
}
export default CreatePost;