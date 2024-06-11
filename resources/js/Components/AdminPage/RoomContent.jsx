import { useEffect, useState } from "react"
import "../../../css/admin.css"

const RoomContent = ({ rooms }) => {
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this room?")) {
            // Nếu người dùng xác nhận xóa, chuyển hướng đến đường dẫn xóa phòng
            window.location.href = route('admin.rooms.destroy',id);
        }
        
    };

    return (
        <>
            <div className="container">
                <h1 className="mt-5 ">Rooms</h1>
                <a className="btn btn-primary" href={route('admin.rooms.create')}><i className="bi bi-plus"></i></a>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center">ID</th>
                            <th scope="col" className="text-center">Room</th>
                            <th scope="col" className="text-center">Description</th>
                            <th scope="col" className="text-center">Adult</th>
                            <th scope="col" className="text-center">Chilren</th>
                            <th scope="col" className="text-center">Photo</th>
                            <th scope="col" className="text-center">Type</th>
                            <th width={'100px'} scope="col" className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map((room, index) => {
                            return (
                                <tr key={index}>
                                    <td scope="row"><span className="position-relative"></span>{room.id}</td>
                                    <td scope="row">{room.name}</td>
                                    <td scope="row">{room.description.substring(0, 100)}...</td>
                                    <td scope="row">{room.adult}</td>
                                    <td scope="row">{room.children}</td>
                                    <td scope="row"><img width={'100px'} className="img-fluid" src={`/${room.photo}`}></img></td>
                                    <td scope="row"><span className="position-relative p-2">{room.type}</span></td>
                                    <td scope="row">
                                        <a href={route('admin.rooms.edit',[room.id])} className="editBtn">
                                            <svg height="1em" viewBox="0 0 512 512">
                                                <path
                                                    d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
                                                ></path>
                                            </svg>
                                        </a>

                                        <a onClick={()=>handleDelete(room.id)} className="bin-button">
                                            <svg
                                                className="bin-top"
                                                viewBox="0 0 39 7"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <line y1="5" x2="39" y2="5" stroke="white" strokeWidth="4"></line>
                                                <line
                                                    x1="12"
                                                    y1="1.5"
                                                    x2="26.0357"
                                                    y2="1.5"
                                                    stroke="white"
                                                    strokeWidth="3"
                                                ></line>
                                            </svg>
                                            <svg
                                                className="bin-bottom"
                                                viewBox="0 0 33 39"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <mask id="path-1-inside-1_8_19" fill="white">
                                                    <path
                                                        d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                                                    ></path>
                                                </mask>
                                                <path
                                                    d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                                                    fill="white"
                                                    mask="url(#path-1-inside-1_8_19)"
                                                ></path>
                                                <path d="M12 6L12 29" stroke="white" strokeWidth="4"></path>
                                                <path d="M21 6V29" stroke="white" strokeWidth="4"></path>
                                            </svg>
                                        </a>


                                        {/* <button type="button" className="btn btn-outline btn-outline-success"><i className="bi bi-pen-lg"></i></button>
                                        <button type="button" className="btn btn-outline btn-outline-danger"><i className="bi bi-x-lg"></i></button> */}
                                    </td>
                                </tr>
                            )
                        }, [])}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default RoomContent;