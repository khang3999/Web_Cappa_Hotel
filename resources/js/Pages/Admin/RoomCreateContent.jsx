import '../../admin.js';
import '../../../css/roomAdmin.css'
export default function RoomCreateContent() {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    return (
        <>
            <div className="bg position-absolute">

            </div>

            <form className='mt-5 position-absolute z-2 create-form' action={route('admin.rooms.store')} method="POST" encType="multipart/form-data">
                <input type="hidden" name="_token" value={csrfToken} />
                <h2 className='text-light'>Create new room</h2>
                <div className="row">
                    <div className="col-6">
                        <div className="form__group field mb-2">
                            <input type="input" className="form__field" placeholder="Name" required="required" name="name" />
                            <label htmlFor="name" className="form__label">Name</label>
                        </div>

                        <div className="form__group field mb-2">
                            <input type="text" className="form__field" placeholder="Description" required="required" name="description" />
                            <label htmlFor="description" className="form__label">Description</label>
                        </div>
                        <div className="form__group field mb-2">
                            <input type="number" className="form__field" placeholder="Price" required="required" name="price" />
                            <label htmlFor="price" className="form__label">Price</label>
                        </div>
                        <div className="form__group field mb-2">
                            <input type="file" className="form__field" placeholder="Photo" required="required" name="photo" />
                            <label htmlFor="photo" className="form__label">Photo</label>
                        </div>
                    </div>
                    <div className="col-6">

                        <div className="form__group field mb-2">
                            <input type="number" className="form__field" placeholder="Adult" required="required" name="adult" />
                            <label htmlFor="adult" className="form__label">Adult</label>
                        </div>

                        <div className="form__group field mb-2">
                            <input type="number" className="form__field" placeholder="Children" required="required" name="children" />
                            <label htmlFor="children" className="form__label">Children</label>
                        </div>

                        <div className="form__group field mb-2">
                            <input type="text" className="form__field" placeholder="Type" required="required" name="type" />
                            <label htmlFor="type" className="form__label">Type</label>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <button type='submit'>
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                </svg>
                            </div>
                        </div>
                        <span>Send</span>
                    </button></div>
            </form>
        </>
    );
}
