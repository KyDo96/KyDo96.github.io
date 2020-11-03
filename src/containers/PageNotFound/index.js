import React, { Component } from 'react'
import {ShadowBox} from './../../Style'
export default class PageNotFound extends Component {
    render() {
        return (
            <div className='mx-auto' style={{width:600}}>
            <ShadowBox className='bg-danger'>
                <h1 style={{textAlign:'center'}}>Trang bạn vừa nhập không tồn tại.
                    <br/>
                    Vui lòng kiểm tra lại đường dẫn
                </h1>
            </ShadowBox>
            </div>
        )
    }
}
