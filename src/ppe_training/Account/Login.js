import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie/es6';
import Alert1 from './Alert1';
import '/hoc/my-app/src/assets/css/dist/tailwind.css';

function Login() {
  const cookies = new Cookies();
  const [message] = useState(null)
  const loginUser = async (e) => {
    e.preventDefault()
    const payload = new FormData(e.target);
    axios.post('http://happy_eyes.ppe-be.codeby.com/api/user/login', payload)
      .then(function (response) {
        if (response.data.status) {
          Alert1({ t: `Success`, c: [`Login success`] })
          cookies.set('ppe-fe-token-login-sang', response.data.data.token, { path: '/', expires: new Date(Date.now() + 25920000000) });
        } else
          Alert1({ t: `Error`, c: [response.data.message] })
        console.log('response', response);
      })
      .catch(function (error) {
        const err = error.response.data.message
        Alert1({ t: `Err`, c: [err] })
      });
  }
  return (
    <section className="relative">
      <div className="bg-gray-200 flex justify-center lg:justify-center md:justify-start p-0 md:p-10 overflow-x-hidden">
        <form onSubmit={(e) => loginUser(e)} className="max-w-sm text-md bg-white rounded-lg shadow-md py-10 px-8">
          <h1 className="text-2xl font-bold w-screen">Login</h1>
          <p className="text-gray-400 my-2">
             Doesn't have any account yet?
            <span className="text-indigo-700 underline ml-2"><Link to="/register">Sign up</Link></span>
            </p>
          <label className="block text-grey-darker text-sm mb-1 mt-4" >
            <span className="block mb-1">Email</span>
            <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight "
              type="email"
              name="email"
              placeholder="sang@example.com" />
          </label>

          <label className="block text-grey-darker text-sm mb-1 relative mt-4" >
            <span className="block mb-1">Password</span>
            <span className="text-indigo-700 font-normal underline absolute top-0 right-0"><Link to="/forgotPassword" >Forgot password</Link></span>
            <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight "
              name="password"
              type="password" />
          </label>
          <div className="mt-3">
            <input type="checkbox" />
            <label className="text-gray-400 ml-2">Remember me</label>
          </div>
          <button type="submit" className="mt-6 btn font-bold w-full">Login</button>
          <div className="flex space-x-3 mt-6">
            <button type="submit" className="flex justtify-center items-center px-4 py-2 rounded font-bold w-full text-red-600 border border-red-600">
              <img className="w-6 mr-4 " alt="" src="/../images/google-icon.png" />
                   Google
                 </button>
            <button type="submit" className="text-blue-600 border border-blue-600 w-full bg-white flex justtify-center px-8 py-3 rounded font-bold ">
              <img className="w-3 mr-4" alt="" src="/../images/facebook-icon.png" />
                   Facebook
                 </button>
          </div>
        </form>
        <section className="hidden md:block">
           <img className="ml-3 md:h-full" alt= "" src="/../images/bcg_log.jpg" />
         </section>
      </div>
    </section>

  );
}
export default Login;