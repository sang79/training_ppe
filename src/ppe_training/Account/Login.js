import axios from 'axios';
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from './Alert';
import '/hoc/my-app/src/assets/css/dist/tailwind.css';
function Login() {
  const [message, setMessage] = useState(null);
  const loginUser = async (e) => {
    e.preventDefault();
    const payload = new FormData(e.target)
    axios.post('http://happy_eyes.test/api/user/login', payload)
      .then(function (response) {
        setMessage(`Register user success`)
        console.log(response);
      })
      .catch(function (error) {
        // const err = error.response.data.message
        setMessage('error')
      });
  }
  return (
    <section>
      <Alert message={message} />
      <div className="bg-gray-200 m-auto flex justify-center lg:justify-center md:justify-start p-0 md:p-10 overflow-x-hidden ">
        <form onSubmit={(e) => loginUser(e)} className=" bg-white max-w-sm shadow-md rounded-lg py-10 px-8">
          {/* lưu ý ở đây, ban đầu nó set phần max-w-lg, nên khiến cả phần ô phía login to lên gấp 2 lần */}
          <h1 className="font-bold text-3xl w-screen ">Login</h1>
          <p className="text-gray-400 my-2">
            Doesn't have any account yet?
              <span className="text-indigo-700 underline ml-2"><Link to="/register">Sign up</Link></span>
            {/* phần này ko hiểu vì sao lại ko css dc cho phần a, khi mở f12 thấy có rất nhiều thẻ bị override dẫn đến việc ko style cdc như ý muốn! */}
          </p>
          <label className="block text-grey-darker text-md mb-1 mt-4">
            <span className="">Email</span>
            <input type="text" placeholder="sang@gmail.com" id="email" className="w-full shadow-md appearance-none border border-gray-400 rounded py-2 px-3 text-grey-darker leading-tight" />
          </label>
          <label className=" mt-4 block text-grey-darker relative text-md mb-1">
            <span className="">Password</span>
            <span className="text-indigo-700 font-normal underline absolute top-0 right-0"><Link to="/forgotPassword" >Forgot password</Link></span>
            <input type="password" id="password" className="w-full shadow border border-gray-400 appearance-none rounded py-2 px-3 text-grey-darker leading-tight" />
          </label>
          <div className="mt-3">
            <input type="checkbox" />
            <label className="text-gray-400 ml-2">Remember me</label>
          </div>
          <button type="submit" className="w-full mt-3 btn font-bold">Login</button>
          <div className="relative mt-8 h-px bg-gray-200  ">
            <span className="absolute absolute-x -top-3 bg-white px-3 -mt-px text-gray-300">or login with</span>
            {/* ở trên phải áng chừng top-5 để đưa lên giữa đường line, vì nếu dùng absolutw-y thì nó lại ghi đè lên absolute-x nên ko nằm ở giữa dc, phải chọn 1 trong 2 thằng, ở đây nó chọn top vì trong trường hợp nếu có respnsive thì cũng ko ảnh hưởng đến chiều dọc mà chỉ ảnh hưởn đến chiều ngang của absotlute - x mà thôi! */}
          </div>
          <div className="flex space-x-3 mt-6">
            <button type="submit" className="flex justtify-center items-center px-4 py-2 rounded font-bold w-full text-red-600 border border-red-600">
              <img className="w-6 mr-4 " src="/../images/google-icon.png" />
                  Google
                </button>
            <button type="submit" className="text-blue-600 border border-blue-600 w-full bg-white flex justtify-center px-8 py-3 rounded font-bold ">
              <img className="w-3 mr-4" src="/../images/facebook-icon.png" />
                  Facebook
                </button>
          </div>
        </form>
        <section className="hidden md:block">
          <img className="ml-3" src="/../images/bcg_log.jpg" />
        </section>
      </div>
    </section>
  )
}
export default Login;