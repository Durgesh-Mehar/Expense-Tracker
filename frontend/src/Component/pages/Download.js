import React from 'react'
import { Button } from 'react-bootstrap'
import { CSVLink } from 'react-csv'
import { useSelector } from 'react-redux'


const Download = () => {
 const data = useSelector(state => state.expense.expenses)
  return (
    <div>
      <CSVLink data={data} headers={["Amount", "Description","Category"]}><Button variant='outline-info'>Download Expenses</Button></CSVLink>
    </div>
  )
}

export default Download;
