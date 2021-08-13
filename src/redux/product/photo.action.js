import axios from "axios"
export const GET_PHOTOS = "GET_PHOTOS"
export const GET_CAMERAS = "GET_CAMERAS"
export const FILTER_BY_CAMERAS = "FILTER_BY_CAMERAS"
export const SET_PAGE = "SET_PAGE"
export const SET_PAGE_NUM = "SET_PAGE_NUM"
export const SET_ROVER = "SET_ROVER"
const api_key="UBdUir16sG6XiH7BdoUyj89scBJnVcu1D96VR1oY"

export const setPhotosDate = (date) => (dispatch, getState) => {
    
    var dd_mm_yyyy = date.toLocaleDateString();
    var yyyy_mm_dd = dd_mm_yyyy.replace(/(\d+)\/(\d+)\/(\d+)/g, "$3-$2-$1")
    let rover = getState().photoReducer.rover

    return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${yyyy_mm_dd}&api_key=${api_key}`)
        .then(photos => {

            dispatch({
                type: GET_PHOTOS,
                payload: photos.data.photos
            })
            dispatch(getCams())
            dispatch(setPage(photos.data.photos))

        
        })
        .catch(err => console.log(err))

}
export const setRover = (rover) =>  {

    return{
        type: SET_ROVER,
        payload: rover

    }
}

export const setSolar = (solar) => (dispatch, getState) => {
    let rover = getState().photoReducer.rover

    return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${solar}&api_key=${api_key}`)
        .then(photos => {

            dispatch({
                type: GET_PHOTOS,
                payload: photos.data.photos
            })
            dispatch(getCams())
            dispatch(setPage(photos.data.photos))

        })
        .catch(err => console.log(err))
}
export const getPhotosByEarthDate = () => (dispatch, getState) => {
    let photosDate = getState().photoReducer.photosDate
    let rover = getState().photoReducer.rover

    return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${photosDate}&api_key=${api_key}`)
        .then(photos => {

            dispatch({
                type: GET_PHOTOS,
                payload: photos.data.photos
            })
            dispatch(getCams())
            dispatch(setPage(photos.data.photos))

        })
        .catch(err => console.log(err))
}

export const getRoverPhotos = (rover) => (dispatch, getState) => {

    return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?api_key=${api_key}`)
        .then(photos => {

            dispatch({
                type: GET_PHOTOS,
                payload: photos.data.photos
            })
            dispatch(getCams())
        })
        .catch(err => console.log(err))
}



export const getPhotosOfCurrentDay = () => (dispatch, getState) => {
    let rover = getState().photoReducer.rover
    var date = new Date();
    var dd_mm_yyyy = date.toLocaleDateString();
    var yyyy_mm_dd = dd_mm_yyyy.replace(/(\d+)\/(\d+)\/(\d+)/g, "$3-$2-$1")
    console.log(yyyy_mm_dd)
    return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${yyyy_mm_dd}&api_key=UBdUir16sG6XiH7BdoUyj89scBJnVcu1D96VR1oY`)
        .then(photos => {
            if (photos.data.photos.length === 0) {
                var yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                var dd_mm_yyyy = yesterday.toLocaleDateString();
                var yyyy_mm_dd = dd_mm_yyyy.replace(/(\d+)\/(\d+)\/(\d+)/g, "$3-$2-$1")
                return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${yyyy_mm_dd}&api_key=UBdUir16sG6XiH7BdoUyj89scBJnVcu1D96VR1oY`)
                    .then(photos => {
                        dispatch({
                            type: GET_PHOTOS,
                            payload: photos.data.photos
                        })
                        console.log(photos.data.photos)
                        dispatch(setPage(photos.data.photos))
                        dispatch(getCams())

                        return;

                    })
            }

            dispatch({
                type: GET_PHOTOS,
                payload: photos.data.photos
            })
            dispatch(getCams())
            dispatch(setPage(photos.data.photos))

        })
        .catch(err => console.log(err))
}

export const getCams = () => (dispatch, getState) => {

    let photoItems = getState().photoReducer.photos.slice()
    let cameras = []
    photoItems.forEach(p => {
        if (!cameras.includes(p.camera.name)) {
            cameras.push(p.camera.name)
        }
    });
    dispatch({
        type: GET_CAMERAS,
        payload: cameras
    })



}

export const filterByCams = (name) => (dispatch, getState) => {

    let photoItems = getState().photoReducer.photos.slice()
    let filteredPhotos = photoItems.filter(p => {
        return p.camera.name === name
    })
    dispatch({
        type: FILTER_BY_CAMERAS,
        payload: filteredPhotos
    })

            dispatch(setPage(filteredPhotos ))


}
export const setPage = (photos,pageNumber=1) => (dispatch, getState) => {
    var pagination
    var pageSize = 25; //tamaño de la pagina
    //var pageCont = Math.ceil(photos.length / pageSize);//numero de paginas

    function paginate(array, page_size, page_number) {
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }
    const showPhotos = () => {
        pagination = paginate(photos, pageSize, pageNumber);
        return pagination
    }
    let pageResult = showPhotos()
    console.log(pageResult)


    dispatch ({ 
        type: SET_PAGE, 
        payload: { page: pageResult,pageNum: pageNumber }
    }) 
}

