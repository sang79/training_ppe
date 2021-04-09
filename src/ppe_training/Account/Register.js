import React, { Component, useState } from 'react';
import '/hoc/my-app/src/assets/css/dist/tailwind.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Alert from './Alert';
function Register() {
  const [message, setMessage] = useState(null)
  const createUser = async (e) => {
      e.preventDefault()
      const payload = new FormData(e.target);
      axios.post('http://happy_eyes.test/api/user/register', payload)
          .then(function (response) {
              setMessage(`Register user success`)
              console.log(response);
          })
          .catch(function (error) {
              // const err = error.response.data.message
              setMessage('error')
          });
}
        return(
          <section className= "relative">
            <Alert message= {message} />
            <div className="bg-gray-200 flex justify-center lg:justify-center md:justify-start p-0 md:p-10 overflow-x-hidden ">
            <form onSubmit = {(e) => createUser(e)} className="bg-white max-w-sm shadow-md rounded-lg py-10 px-8">
              {/* lưu ý ở đây, ban đầu nó set phần max-w-lg, nên khiến cả phần ô phía login to lên gấp 2 lần */}
              <h1 className="font-bold text-3xl w-screen ">Register</h1>
              <label className = "block mt-4 text-grey-darker text-md mb-1">
              <span className= "block mb-1">Username</span>
              <input 
              type = "text" 
              name= "name" 
              placeholder= "enter username" 
              className= "w-full shadow-md appearance-none border border-gray-400 rounded py-1 px-3 text-grey-darker leading-tight" />
              </label>
              <label className = "block mt-4 text-grey-darker text-md mb-1">
                <span className= "block mb-1">Email</span>
              <input 
              type = "text" 
              name= "email" 
              placeholder= "your email .@mail.com"
               className= "w-full shadow-md appearance-none border border-gray-400 rounded py-1 px-3 text-grey-darker leading-tight" />
              </label>
              <label className = "block mt-4 text-grey-darker text-md mb-1">
              <span className= "block mb-1">Password</span>
              <input 
              type = "password" 
              name= "password" 
              className= "w-full shadow border border-gray-400 appearance-none rounded py-2 px-3 text-grey-darker leading-tight" />
              </label>
              <div className="mt-3">
              <input type = "checkbox" />
              <label className= "text-gray-400 ml-2">Please agree with our policy!</label>
              </div>
              <button type= "submit" className= "w-full mt-3 btn font-bold">Register</button>
              <div className= "relative mt-8 h-px bg-gray-200  ">
              <span className= "absolute absolute-x -top-3 bg-white px-3 -mt-px text-gray-500">or signIn with</span>
              {/* ở trên phải áng chừng top-5 để đưa lên giữa đường line, vì nếu dùng absolutw-y thì nó lại ghi đè lên absolute-x nên ko nằm ở giữa dc, phải chọn 1 trong 2 thằng, ở đây nó chọn top vì trong trường hợp nếu có respnsive thì cũng ko ảnh hưởng đến chiều dọc mà chỉ ảnh hưởn đến chiều ngang của absotlute - x mà thôi! */}
              </div>
              <div className= "flex justify-center space-x-2 mt-6">
              <Link to="/login" className="">
              <button type= "submit" className= "flex items-center px-2 py-1 rounded font-bold max-w-sm text-indigo-600 border border-indigo-600">
              <img className= "w-3 mr-3 " src= "/../images/images.jpg" />
                  Sign In
                </button>
                </Link>
                <button className= "flex items-center px-2 py-1 rounded font-bold max-w-sm text-red-600 border border-red-600">
                  <img className= "w-3 mr-3 " src= "/../images/google-icon.png" />
                  Google
                </button>
                <button className= "text-blue-600 border border-blue-600 max-w-sm bg-white flex items-center px-2 py-1 rounded font-bold ">
                  <img className= "w-2 mr-3" src= "/../images/facebook-icon.png" />
                  Facebook
                </button>
              </div>
            </form>
            <section className= "hidden md:block">
              <img className= " p-6 ml-3" src="/../images/bcg_log.jpg" />
            </section>
          </div>
          </section>
        )

} 
export default Register; 