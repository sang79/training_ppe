import React, { Component } from 'react';
import '/hoc/my-app/src/assets/css/dist/tailwind.css';
export default class ForgotPassword extends Component {
    render() {
        return (
            <div className="flex items-start p-2 w-full h-full overflow-hidden relative">
                <section className="">
                    <img className=" p-6 ml-3" src="/../images/forgot_password.jpg" />
                </section>
                <form className="bg-white max-w-md absolute absolute-y absolute-x">
                    <h1 className="font-bold text-4xl w-screen ">Forgot your password</h1>
                    <div className="mt-4">
                        <label className="block text-grey-darker text-md mb-1" for="email">Email</label>
                        <input type="text" placeholder="your email .@mail.com" id="email" className="w-full shadow-md appearance-none border border-gray-400 rounded py-1 px-3 text-grey-darker leading-tight" />
                    </div>
                    <div className="mt-4">
                        <label for="password" className="block text-grey-darker flex justify-between text-md mb-1">
                            Password
                </label>
                        <input type="password" id="password" className="w-full shadow-md border border-gray-400 appearance-none rounded py-1 px-3 text-grey-darker leading-tight" />
                    </div>
                    <div className="mt-4">
                        <label for="password" className="block text-grey-darker flex justify-between text-md mb-1">
                            Confirm Password
                </label>
                        <input type="password" id="password" className="w-full shadow-md border border-gray-400 appearance-none rounded py-1 px-3 text-grey-darker leading-tight" />
                    </div>
                    <button className="w-full my-4 btn font-bold mb-4">Reset Password</button>
                    <button className="w-full btn opacity-50">back to signIn</button>
                </form>
            </div>
        )
    }
}