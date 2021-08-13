import {
    GET_PHOTOS,
    GET_CAMERAS,
    FILTER_BY_CAMERAS,
    SET_PAGE,
    SET_PAGE_NUM,
    SET_ROVER,
} from './photo.action';

const initialState = {
  photosDate: "",
  rover:"curiosity",
  solar:120,
  photos: [],
  cameras: [],
  cameraPhotos: [],
  page: [],
  pageNum: 1
}
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case SET_ROVER:
      return {
        ...state,
        rover: action.payload,

      }

    case GET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
        cameraPhotos: action.payload

      }
    case GET_CAMERAS:
      return {
        ...state,
        cameras: action.payload
      }
    case FILTER_BY_CAMERAS:
      return {
        ...state,
        cameraPhotos: action.payload
      }
    case SET_PAGE:
      return {
        ...state,
        page: action.payload.page,
        pageNum: action.payload.pageNum

      }
    case SET_PAGE_NUM:
      return {
        ...state,
        pageNum: action.payload
      }
    default:
      return state
  }
}
export default productReducer;
