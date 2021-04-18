import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import '/hoc/my-app/src/assets/css/dist/tailwind.css';
 class Home extends Component {
    render() {
        return (
            <div className="w-screen bg-indigo-500">
                <div className="flex container justify-between py-3 " >
                    <h1 className= "text-white text-lg font-bold">Home</h1>
                    <ul className="flex text-white font-bold">
                        <li className="mx-3">
                            <Link to="/register">Account</Link>
                        </li>
                        <li className="mx-3">
                            <Link to="/login">Login</Link>
                            {/* ỏe đây có thể sử dụng a, nhưng mỗi lần click vào thì nó đều load lại trang trong khi react đã cung cấp routr, cho việc chuyển mà ko phải reload lại trang tiện hơn nhiều, ban đầu nó chưa hiểu, nhưng h để ý mới thấy */}
                        </li>
                        <li className="mx-3">
                            <Link to="/createpost">Posts</Link>
                        </li>
                        <li className="mx-3">
                            <Link to="#">About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default withRouter(Home);