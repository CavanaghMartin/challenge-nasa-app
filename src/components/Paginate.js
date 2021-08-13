import React,{useState} from 'react'
import {  setPage } from '../redux/product/photo.action';
import { useDispatch,useSelector } from 'react-redux';
import { Pagination } from '@material-ui/lab';
const Paginate = props => {
    const dispatch = useDispatch()
    const photos = useSelector(state => state.photoReducer.cameraPhotos)
    const pageNumber = useSelector(state => state.photoReducer.pageNum)
    var pageSize = 25; //tamaño de la pagina
    var pageCont = Math.ceil(photos.length / pageSize);//numero de paginas
  
    
    const handleChange = (event, value) => {
        dispatch (setPage(photos,value)) 
      };
    return (
        <div className="pagination" >
            <Pagination style={{marginLeft: "17em"}} page={pageNumber} count={pageCont} onChange={handleChange} color="primary" />
        </div>
    );

}

Paginate.propTypes = {

}

export default Paginate
