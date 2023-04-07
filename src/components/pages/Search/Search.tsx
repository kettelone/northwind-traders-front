import React, { useState } from 'react';
import { SearchResultCustomers, SearchResultProducts } from './interfaces';
import { useAppDispatch } from '../../../app/hooks';
import { update } from '../../../app/updateSQLSlice';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import searchService from '../../../services/searchService';
import SearchInput from './SearchInput';
import RadioButtons from './RadioButtons';
import CompanyResult from './CompanyResult';
import ProductResult from './ProductResult';

const Container = styled.div`
  width: 100%;
  padding-left: 15em;
  padding-top: 3.5em;
`
const Card = styled.div`
  font-size: 1em;
  font-family: sans-serif;
  line-height: 1.5rem;
  padding: 1.5rem;
`

const Content = styled.div`
  padding: 1.5rem;
  background-color: white;
  `

const SearchResults = styled.div`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
`
const NoResult = styled.div`
  margin-top: 1.5rem;
`
  
const Search = () => {
  const [searchInput, setSearchInput] = useState('')
  const [customerChecked, setCustomerChecked] = useState(false)
  const [productsChecked, setProductsChecked] = useState(true)
  const [searchResults, setSearchResults] = useState({})
  const dispatch = useAppDispatch()

  const handleDispatch = (response: SearchResultCustomers | SearchResultProducts) => {
    if (response.data.searchData) {
      const { data, metrics } = response.data.searchData
      dispatch(update({data, metrics}))
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
    <Container>
      <Card>
        <Content>
          <SearchInput
            handleInput={handleInput}
            handleKeyDown={handleKeyDown} />
          <RadioButtons
            productsChecked={productsChecked}
            productChange={productChange}
            customerChecked={customerChecked}
            customerChange={customerChange}
          />
          <SearchResults>Search results</SearchResults>
          {Array.isArray(searchResults) && searchResults.length > 0
            ?
            searchResults.map((result, index) => 
                result.companyName
                ? <CompanyResult result={result} index={index} key={uuidv4()} />
                : <ProductResult result={result} index={index} key={uuidv4()} />
              )
            : <NoResult>No results </NoResult>
          }
        </Content>
      </Card>
    </Container>
  );
};

export default Search;