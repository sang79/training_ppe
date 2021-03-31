import React, { Component } from 'react';
import '/hoc/my-app/src/assets/css/dist/tailwind.css';
export default class Register extends Component {
    render() {
        return(
            <div className="bg-gray-200 flex items-start p-10 shadow-md w-full h-full overflow-hidden ">
            <section className="bg-white max-w-sm shadow-md rounded-lg pt-3 ml-8 pb-8 px-5">
              {/* lưu ý ở đây, ban đầu nó set phần max-w-lg, nên khiến cả phần ô phía login to lên gấp 2 lần */}
              <h1 className="font-bold text-3xl w-screen ">Register</h1>
              <div className= "mt-4">
              <label className = "block text-grey-darker text-md mb-1" for = "username">Username</label>
              <input type = "text" placeholder= "enter username" id= "username" className= "w-full shadow-md appearance-none border border-gray-400 rounded py-1 px-3 text-grey-darker leading-tight" />
              </div>
              <div className= "mt-4">
              <label className = "block text-grey-darker text-md mb-1" for = "email">Email</label>
              <input type = "text" placeholder= "your email .@mail.com" id= "email" className= "w-full shadow-md appearance-none border border-gray-400 rounded py-1 px-3 text-grey-darker leading-tight" />
              </div>
              <div className = "mt-4">
              <label for= "password" className = "block text-grey-darker flex justify-between text-md mb-1">
                Password
                </label>
              <input type = "password" id= "password" className= "w-full shadow border border-gray-400 appearance-none rounded py-2 px-3 text-grey-darker leading-tight" />
              </div>
              <div className = "mt-4">
              <label for= "password" className = "block text-grey-darker flex justify-between text-md mb-1">
                Confirm Password
                </label>
              <input type = "password" id= "password" className= "w-full shadow border border-gray-400 appearance-none rounded py-2 px-3 text-grey-darker leading-tight" />
              </div>
              <div className="mt-3">
              <input type = "checkbox" />
              <label className= "text-gray-400 ml-2">Please agree with our policy!</label>
              </div>
              <button className= "w-full mt-3 btn font-bold">Register</button>
              <div className= "relative mt-8 h-px bg-gray-200  ">
              <span className= "absolute absolute-x -top-3 bg-white px-3 -mt-px text-gray-300">or signIn with</span>
              {/* ở trên phải áng chừng top-5 để đưa lên giữa đường line, vì nếu dùng absolutw-y thì nó lại ghi đè lên absolute-x nên ko nằm ở giữa dc, phải chọn 1 trong 2 thằng, ở đây nó chọn top vì trong trường hợp nếu có respnsive thì cũng ko ảnh hưởng đến chiều dọc mà chỉ ảnh hưởn đến chiều ngang của absotlute - x mà thôi! */}
              </div>
              <div className= "flex justify-center space-x-2 mt-6">
              <button className= "flex items-center px-2 py-1 rounded font-bold max-w-sm text-indigo-600 border border-indigo-600">
              <img className= "w-5 mr-3 " src= "/../images/images.jpg" />
                  Sign In
                </button>
                <button className= "flex items-center px-2 py-1 rounded font-bold max-w-sm text-red-600 border border-red-600">
                  <img className= "w-5 mr-3 " src= "/../images/google-icon.png" />
                  Google
                </button>
                <button className= "text-blue-600 border border-blue-600 max-w-sm bg-white flex items-center px-2 py-1 rounded font-bold ">
                  <img className= "w-2 mr-3" src= "/../images/facebook-icon.png" />
                  Facebook
                </button>
              </div>
            </section>
            <section className= "">
              <img className= " p-6 ml-3" src="/../images/bcg_log.jpg" />
            </section>
          </div>
        )
    }
} 