import React, {useState} from 'react';
import { Typography, Grid, Paper, TextField, Button, TableCell, TableRow, TableBody, TableHead, Box, Table, TablePagination } from '@material-ui/core';
import axios from 'axios';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link  } from 'react-router-dom';


const UploadProduct = () => {
    const [pdfhere, setPdfhere] = useState();
    const [mainData, setMainData] = useState([]);
    const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
    React.useEffect(()=>{
        const userId = localStorage.getItem("userId");

        axios.get(`http://localhost:7000/pdf/${userId}`,{headers: { Authorization: `Bearer ${localStorage.getItem("auth_token")}`}}).then(res=>{console.log(res.data);setMainData(res.data)})
    }, [])
	// const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
		setPdfhere(event.target.files[0]);
		// setIsSelected(true);.
        console.log(event.target.files[0]);
	};
    const handleSubmit = () => {
        console.log("{{}{}{}{}}")

        const formData = new FormData();
        const userId = localStorage.getItem("userId");
        formData.append("pdf", pdfhere);
        axios.post(`http://localhost:7000/product/pdfupload/${userId}`, formData,{headers: { Authorization: `Bearer ${localStorage.getItem("auth_token")}`}}).then(res=>console.log(res.data))
    }
    const handleLimitChange = (event) => {
        setLimit(event.target.value);
      };
    
      const handlePageChange = (event, newPage) => {
        setPage(newPage);
      };
    
    return (
        <>
        <div style={{textAlign:'center', marginTop:'150px'}} >
            <Typography>Add Your Pdf Here</Typography>
            <input style={{marginTop:'55px'}} type="file" name="file" onChange={changeHandler} />
            <Button onClick={handleSubmit} >Submit</Button>
			<div>
            <Typography style={{marginTop:'55px'}}>Your recent pdf</Typography>
            
				{/* <button onClick={handleSubmission}>Submit</button> */}
			</div>

            
       

<PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  User
                </TableCell>
                <TableCell style={{textAlign:'center'}}>
                  Status
                </TableCell>
                <TableCell>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
             <TableBody>
              {mainData?mainData.slice((page)*limit,(page)*limit+limit).map((proc) => (
                   (
                <TableRow
                  hover
                  key={proc.id}
                //   selected={selectedCustomerIds.indexOf(proc.id) !== -1}
                >
                  <TableCell>
                    {/* {proc.user_id?proc.user_id.username:''} */}
                  </TableCell>
                  
                  <TableCell>
                    {/* {getStatus(proc.status)} */}
                    {proc.isApproved}hi
                  </TableCell>
                  {/* <TableCell>
                    {getShipmentStatus(proc.shipment ? proc.shipment.shipped_on ?proc.shipment.shipped_on :'NA':'NA')}
                  </TableCell> */}
                  <TableCell>
                      {proc.isApproved ? <Link to="/product/form" >
                  <Button variant="contained" color="primary" >
                          View
                  </Button>
                  </Link> : <Link>
                  <Button variant="contained" color="primary" >
                          Rejected
                  </Button>
                  </Link>}
                      
                  </TableCell>
                </TableRow>
                  )
              )):''}
              
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={mainData?mainData.length:''}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    
    </div>
        </>
    )
}

export default UploadProduct
