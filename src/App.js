import './App.css';
import SortingContainer from './components/Sorting/Sorting';
import ProductsContainer from './components/Products/Products';
import AddNewProductForm from './components/ProductAddition/AddNewProduct';


function App() {
  return (
    <div className="mainWrapper">
      <div className="row">
        <div className="col-3">
          <SortingContainer />
        </div>
        <div className="col-9">
          <ProductsContainer />
        </div>
      </div>
      <div className="row">
        <AddNewProductForm />
      </div>
    </div>
  )
}

export default App;
