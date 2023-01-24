import React, { useState } from 'react';
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import searchService from '../../../API/SearchService';
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
  
const Search = () => {
  const [searchInput, setSearchInput] = useState('')
  const [customerChecked, setCustomerChecked] = useState(false)
  const [productsChecked, setProductsChecked] = useState(true)
  const [searchResults, setSearchResults] = useState()


  const handleInput = (event) => {
    setSearchInput(event.target.value)
  }

  const customerChange = () => {
    setProductsChecked(false)
    setCustomerChecked(true)
    findCustomers()
  }

  const productChange = () => {
    setCustomerChecked(false)
    setProductsChecked(true)
    findProducts()

  }

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter'){
      let response
      if (customerChecked) {
        response = await searchService.getCustomers(searchInput)
        setSearchResults(response.data.rows)
        return
      } else if (productsChecked) {
        response = await searchService.getProducts(searchInput)
        setSearchResults(response.data.rows)
      }
    }
  }

  const findCustomers = async() => {
    const response = await searchService.getCustomers(searchInput)
    setSearchResults(response.data.rows)
    return
  }

  const findProducts = async () => {
    const response = await searchService.getProducts(searchInput)
    setSearchResults(response.data.rows)
  }

  return (
    <div className='card-container'>
      <div className="card">
        <div className="card-content">
          <div className="field">
            <label className='label'>
              Search Database
            </label>
            <div className="field-body">
              <div className="field">
                <div className="input-control">
                  <input
                    placeholder='Enter keyword...'
                    className='search-input'
                    onChange={handleInput}
                    onKeyPress={handleKeyDown}
                  />
                  <span className='search-icon'><SearchIcon /></span>
                </div>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Tables</label>
            <div className="field-body">
              <div className="selectors">
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      className='selectors-input'
                      value='products'
                      checked={productsChecked}
                      onChange={productChange}
                    />
                    <span className="check"></span>
                    <span className="control-label">
                      Products
                    </span>
                  </label>
                </div>
                <div className="control">
                  <label className="radio">
                    <input type="radio"
                      className='selectors-input'
                      value='customers'
                      checked={customerChecked}
                      onChange={customerChange}
                    />
                    <span className="control-label">
                      Customers
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <p className="search-results">Search results</p>
            {searchResults
              ? searchResults.map((result, index) => 
                result.companyName
                  ?
                  <p className='search-container' key={uuidv4()}>
                    <p className='search-result-name'>
                      <Link to={`/customer/${result.id}`}>
                        {result.companyName}
                      </Link>
                    </p>
                    <p className='search-result-description'>
                      #{index + 1} Contact: {result.contactName}, Title: {result.contactTitle}, Phone: {result.phone}
                    </p>
                  </p>
                  :
                  <p className='search-container'>
                    <p className='search-result-name'>
                      <Link to={`/product/${result.id}`}>
                        {result.productName}
                      </Link>
                    </p>
                    <p className='search-result-description'>
                      #{index + 1} Quantity Per Unit: {result.quantityPerUnit}, Price: {result.unitPrice}, Stock: {result.unitsInStock}
                    </p>
                  </p>
              )
              : 'No results '}
        </div>
    </div>
    </div>
  );
};

export default Search;