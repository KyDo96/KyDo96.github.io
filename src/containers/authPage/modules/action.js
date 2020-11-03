import {AUTH_PAGE_REQUEST,
    AUTH_PAGE_SUCCESS,
    AUTH_PAGE_FAILED} from './constant'
import Axios from 'axios'
export const actApi = (dispatch,user)=>{
    return ()=>{
        dispatch(actAthPageRequest());
        Axios({
           url: 'https://parseapi.back4app.com/login',
           method:'GET',
           headers:{
            'X-Parse-Application-Id': 'aIrqBP98E84a24X1mwk602W5CgnqqIvxhXFqH07f',
            'X-Parse-REST-API-Key': 'jm9QPGUEQnzY9yxoni932aMvsXcBtQ1MKPJQPXmS',
            'X-Parse-Revocable-Session': 1
           },
           params:user,
        })
        .then((r)=>{localStorage.setItem('user',JSON.stringify(r.data));
            dispatch(actAthPageSuccess(r.data))
        })
        .catch((e)=>dispatch(actAthPageFailed(e)))
    }
}

const actAthPageRequest=()=>{
    return{
        type:AUTH_PAGE_REQUEST,
    }
}

const actAthPageSuccess=(data)=>{
    return{
        type:AUTH_PAGE_SUCCESS,
        payload:data
    }
}

const actAthPageFailed=(err)=>{
    return{
        type:AUTH_PAGE_FAILED,
        payload:err
    }
}