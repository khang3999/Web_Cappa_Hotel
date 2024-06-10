import "../../../css/admin.css"

const RoomContent = ({rooms}) => {
    // const [rooms, setRooms] = useState([]);
    // useEffect(()=>{
    //     fetch('http://127.0.0.1:8000/rooms/crud')
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch banner data');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         setRooms(data);
    //     })
    //     .catch(error => {
    //         console.error('Error fetching banner data:', error);
    //     });

    // },[])



    // const [rooms, setRooms] = useState([]);
    // const [arrRoomId, setArrRoomId] = useState([]);
    // const [hasMoreData, setHasMoreData] = useState(true);

    // useEffect(() => {
    //     // Load the initial data
    //     loadmore();

    //     // // Add scroll event listener
    //     // window.addEventListener('scroll', handleScroll);
        
    //     // // Cleanup scroll event listener on component unmount
    //     // return () => {
    //     //     window.removeEventListener('scroll', handleScroll);
    //     // };
    // }, []);



    // async function loadmore (){
    //     if (!hasMoreData) {
    //         return
    //     }; // khi fetch hết không làm nữa
    //     const url = route('api.rooms.loadmore')
    //     const data = {arrRoomId: arrRoomId }
    //     const response = await fetch (url, {
    //         method: "POST",
    //         body: JSON.stringify(data)
    //     })
    //     const result = await response.json();

    //     console.log(result);

    //     if (result.length === 0) { // không còn du lue
    //         setHasMoreData (false);
    //     } else{
    //         setRooms([...rooms, ...result.rooms]);
    //         setArrRoomId([...arrRoomId, ...result.rooms.map(room => room.id)]);
    //     }
    // }

    // const handleScroll = () => {
    //     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20 && !hasMoreData) {
    //         loadmore();
    //     }
    // };


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
                                    <td scope="row"><img width={'100px'} className="img-fluid" src={`/images/${room.photo}`}></img></td>
                                    <td scope="row"><span className="position-relative p-2">{room.type}</span></td>
                                    <td scope="row">
                                        <button type="button" className="btn btn-outline btn-outline-success"><i className="bi bi-check-lg"></i></button>
                                        <button type="button" className="btn btn-outline btn-outline-danger"><i className="bi bi-x-lg"></i></button>
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