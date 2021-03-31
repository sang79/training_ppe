import React, { Component } from 'react';
import '/hoc/my-app/src/assets/css/dist/tailwind.css';
export default class Login extends Component {
    render() {
        return(
            <div className="bg-gray-200 flex items-start p-10 shadow-md w-full h-full overflow-hidden ">
            <section className="bg-white max-w-sm shadow-md rounded-lg pt-3 ml-8 pb-8 px-5">
              {/* lưu ý ở đây, ban đầu nó set phần max-w-lg, nên khiến cả phần ô phía login to lên gấp 2 lần */}
              <h1 className="font-bold text-3xl w-screen ">Login</h1>
              <p className="text-gray-400 my-2">
                Doesn't have any account yet?
              <span className="text-indigo-700 underline ml-2"><a href = "#">Sign up</a></span>
              {/* phần này ko hiểu vì sao lại ko css dc cho phần a, khi mở f12 thấy có rất nhiều thẻ bị override dẫn đến việc ko style cdc như ý muốn! */}
              </p>
              <div className= "mt-4">
              <label className = "block text-grey-darker text-md mb-1" for = "username">Email</label>
              <input type = "text" placeholder= "sang@gmail.com" id= "username" className= "w-full shadow-md appearance-none border border-gray-400 rounded py-2 px-3 text-grey-darker leading-tight" />
              </div>
              <div className = "mt-4">
              <label for= "password" className = "block text-grey-darker flex justify-between text-md mb-1">
                Password
                <p className= "text-indigo-700 font-normal underline"><a >Forgot password</a></p>
                </label>
              <input type = "password" id= "password" className= "w-full shadow border border-gray-400 appearance-none rounded py-2 px-3 text-grey-darker leading-tight" />
              </div>
              <div className="mt-3">
              <input type = "checkbox" />
              <label className= "text-gray-400 ml-2">Remember me</label>
              </div>
              <button className= "w-full mt-3 btn font-bold">Login</button>
              <div className= "relative mt-8 h-px bg-gray-200  ">
              <span className= "absolute absolute-x -top-3 bg-white px-3 -mt-px text-gray-300">or login with</span>
              {/* ở trên phải áng chừng top-5 để đưa lên giữa đường line, vì nếu dùng absolutw-y thì nó lại ghi đè lên absolute-x nên ko nằm ở giữa dc, phải chọn 1 trong 2 thằng, ở đây nó chọn top vì trong trường hợp nếu có respnsive thì cũng ko ảnh hưởng đến chiều dọc mà chỉ ảnh hưởn đến chiều ngang của absotlute - x mà thôi! */}
              </div>
              <div className= "flex space-x-3 mt-6">
                <button className= "flex justtify-center items-center px-4 py-2 rounded font-bold w-full text-red-600 border border-red-600">
                  <img className= "w-6 mr-4 " src= "/../images/google-icon.png" />
                  Google
                </button>
                <button className= "text-blue-600 border border-blue-600 w-full bg-white flex justtify-center px-8 py-3 rounded font-bold ">
                  <img className= "w-3 mr-4" src= "/../images/facebook-icon.png" />
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