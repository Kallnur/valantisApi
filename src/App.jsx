import { useEffect, useState } from 'react'
import './App.css'
import { request } from './components/api/api'
import ProductList from './components/ProductList'
import { productsFilter, removeDuplicateOfProducts } from './utils/utils'
import Pagination from './components/Pagination'
import Loader from './components/Loader'
import Filters from './components/Filters'

function App() {
  const [products, setProducts] = useState([]);
  const [copyProducts, setCopyProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [load, setLoad] = useState(true);
  const [filters, setFilters] = useState({brand: "", price: "", product: ""})
  const productLimit = 50;
  let dublicatesCount = 0;

  const constructorIdsParams = (offset=0, limit=50) => ({
    action: "get_ids",
    params: {
      offset: offset ? offset : ((currentPage - 1) * productLimit) + dublicatesCount, 
      limit: limit ? limit : productLimit
    }
  })

  const constructorItemsParams = (ids) => ({
    action: "get_items",
    params: { ids }
  })

  const getProducts = () => {
    setLoad(true)
    request(constructorIdsParams())
    .then(res => request(constructorItemsParams(res.data.result)))
    .then(res => { 
      const ProductsWithoutDublicates = removeDuplicateOfProducts(res.data.result)
      if (ProductsWithoutDublicates.length < productLimit) {
        dublicatesCount += productLimit - ProductsWithoutDublicates.length;
        return request(constructorIdsParams(currentPage * productLimit, dublicatesCount))
          .then(res => request(constructorItemsParams(res.data.result)))
          .then(res => ProductsWithoutDublicates.concat(res.data.result))
      }

      return res.data.result;
    })
    .then(res => setProducts(res) )
    .catch(err => { console.log(err) })
    .finally(() => setLoad(false))
  }

  useEffect(() => {
    getProducts()
  }, [currentPage])

  useEffect(() => {
    setCopyProducts(productsFilter(products, filters))
  }, [filters, products])

  return (
    <>
      <Filters filters={filters} setFilters={setFilters} />
      {products.length ? 
        <ProductList 
          products={copyProducts.length || (filters.brand || filters.price || filters.product) ? copyProducts : products}
        /> 
      : 
        <span className='product-title'>Продукты не найдены!</span>
      }
      <Pagination productLimit={productLimit} setCurrentPage={setCurrentPage}/>
      {load ? <Loader isActive={load}/> : null}
    </>
  )
}

export default App