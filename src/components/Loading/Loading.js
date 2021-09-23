import { LoadingOutlined } from '@ant-design/icons';
import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Loading() {
    const dispatch = useDispatch();
    const {isLoading} = useSelector(state => state.LoadingReducer);

    return (
        <Fragment>
            {isLoading ?
            <div style={{position:'fixed',top:0,left:0,width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,.1)',display:'flex',justifyContent:'center',alignItems:'center',zIndex:99}}>
                <div><LoadingOutlined style={{fontSize:'3rem'}} /></div>
            </div> : ''
            }
        </Fragment>
    )
}
