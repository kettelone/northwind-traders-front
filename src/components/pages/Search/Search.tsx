import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import './Search.css'
import searchService from '../../../API/SearchService';
import SearchInput from './SearchInput';
import RadioButtons from './RadioButtons';
import CompanyResult from './CompanyResult';
import ProductResult from './ProductResult';

interface SearchResultCustomers{
    data: {
      result: {
        rows: {
          companyName?: string,
          id?: number,
          contactName?: string,
          contactTitle?: string,
          phone?: string
        }[]
      },
      searchData: {
        data:{}
        metrics:{}
      }
    }
}

interface SearchResultProducts {
  data: {
    result: {
      rows: {
        id: number,
        productName: string,
        quantityPerUnit: string,
        unitPrice: string,
        unitsInStock: number
      }[]
    },
    searchData: {
      data: {}
      metrics: {}
    }
  }
}
  
const Search = () => {
  const [searchInput, setSearchInput] = useState('')
  const [customerChecked, setCustomerChecked] = useState(false)
  const [productsChecked, setProductsChecked] = useState(true)
  const [searchResults, setSearchResults] = useState({})
  const dispatch = useDispatch()

  const handleDispatch = (response: SearchResultCustomers | SearchResultProducts) => {
    if (response.data.searchData) {
      const { data, metrics } = response.data.searchData
      dispatch({ type: "ADD_SQL", payload: data, metrics })
    }
  }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }

  const handleKeyDown = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter'){
      let response: SearchResultCustomers | SearchResultProducts
      if (customerChecked) {
        response = await searchService.getCustomers(searchInput)
        setSearchResults(response.data.result?.rows)
        handleDispatch(response)
        return
      } else if (productsChecked) { 
        response = await searchService.getProducts(searchInput)
        setSearchResults(response.data.result?.rows)
        handleDispatch(response)
        return
      }
    }
  }

  const customerChange = async() => {
    setProductsChecked(false)
    setCustomerChecked(true)
    const response: SearchResultCustomers = await searchService.getCustomers(searchInput)
    setSearchResults(response.data.result?.rows)
    handleDispatch(response)
  }

  const productChange = async () => {
    setCustomerChecked(false)
    setProductsChecked(true)
    const response: SearchResultProducts = await searchService.getProducts(searchInput)
    setSearchResults(response.data.result?.rows)
    handleDispatch(response)
  }

  return (
    <div className='card-container'>
      <div className="card">
        <div className="card-content">
          <SearchInput
            handleInput={handleInput}
            handleKeyDown={handleKeyDown} />
          <RadioButtons
            productsChecked={productsChecked}
            productChange={productChange}
            customerChecked={customerChecked}
            customerChange={customerChange}
          />
          <p className="search-results">Search results</p>
          {Array.isArray(searchResults) && searchResults.length > 0
            ?
            searchResults.map((result, index) => 
                result.companyName
                ? <CompanyResult result={result} index={index} key={uuidv4()} />
                : <ProductResult result={result} index={index} key={uuidv4()} />
              )
            : <div className='no-results'>No results </div>
          }
        </div>
    </div>
    </div>
  );
};

export default Search;