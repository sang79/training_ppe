import { useEffect, useState } from "react";
// về hook, có thể sử dụng nó thay cho class, khai báo useState tương tự như là lúc khai báo this.state; 1 phần ư điểm trong việc sử dụng useState là ta có thể gọi các giá trị đã dc khởi tạp ngay từ đầu 1 cách trực tiếp, thay vì gọi this.state.count gọi count với count dc khởi tạo bởi useState, cách gọi này đơn giản hơn nhiều, nó cho phép lưu trữ state cục bộ trong function component, việc sử dụng dấu [] bên trong khai báo cũng có ý nghĩa, 2 biến dc đặt bên trong nó dc xem là giá trị index 0, 1 của mảng, vị trí 0 là giá trị ban đầu và 1 là giá trị dc cập nhật re-render lại ngay sau đó! 
// về effect trong hook,là việc lấy data, thay đổi các subc, hay các thay đổi ỏe DOM< các hoạt động như vậy dc định nghĩa là effect, effect đại loại là kiểu nhắc react cần làm gì sau mỗi lần re-render, sau khi re render react sữ tự động gọi hàm đã dc viết ra và tự động thực thi nó!  
const Alert = (props) => {
    const [isShow, setIsShow] = useState(false);
    useEffect(() => {
        if (props.message) {
            setIsShow(true);
        }
    }, [props.message])
    return (
        <>
            {
                isShow &&
                <>
                    <div className="z-10 absolute left-0 right-0 top-0 bottom-0 bg-black-50"></div>
                    <div className="z-20 left-0 right-0 mx-8 absolute  absolute-y bg-white p-3 border border-gray-200 shadow-lg rounded-md">
                        {props.message}
                        <button onClick={(e) => setIsShow(false)} className="btn mt-3 w-full">Close</button>
                    </div>
                </>
            }
        </>
    )
}

export default Alert;