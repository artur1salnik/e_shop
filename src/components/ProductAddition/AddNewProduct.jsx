import {reduxForm} from 'redux-form';


const AddNewProductForm = () => {
    return (
        <div className="container addNewProduct mt-3">
            <form className="row">
                <div className="col-6">
                    <div className="mb-3">
                        <label htmlFor="field1">Имя:&nbsp;</label>
                        <input type="text" id="field1" placeholder="Name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="field2">Цена:&nbsp;</label>
                        <input type="number" id="field2" />
                    </div>
                    <div className="formInputFile">
                        <label htmlFor="field3">Изображение:</label>
                        <input type="file" id="field3" />
                    </div>
                </div>
                <div className="col-6">
                    <div>
                        <textarea id="field4" placeholder="Description" rows="3" cols="50"></textarea>
                    </div>
                    <div className="addNewProductBtn">
                        <button>Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddNewProductForm;