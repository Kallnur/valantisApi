
const Filters = ({filters, setFilters}) => {

    const handleChange = (e, filter) => {
        setFilters(prev => (
            {
                ...prev,
                [filter]: e.target.value
            }
        ))
    }

  return (
    <div className='filter'>
        <div>
            <label htmlFor="input-name">Название товара: </label>
            <input type="text" value={filters.product} onChange={(e) => handleChange(e, "product")}/>
        </div>
        <div>
            <label htmlFor="input-name">Цена от: </label>
            <input type="number" value={filters.price} onChange={(e) => handleChange(e, "price")}/>
        </div>
        <div>
            <label htmlFor="input-name">Название Бренда: </label>
            <input type="text" value={filters.brand} onChange={(e) => handleChange(e, "brand")}/>
        </div>
    </div>
  )
}

export default Filters