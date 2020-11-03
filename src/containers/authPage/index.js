import React, { Component } from 'react'
import {ShadowBox,ContentLoginPage} from './../../Style'
import {connect} from 'react-redux';
import {actApi} from './modules/action'
import Loader from './../../components/Loader'
class AuthPage extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    handleOnChange=(e)=>{
        const {name,value}=e.target;
        this.setState({
            [name]:value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.handleLogin(this.state)
    }
    render() {
        return (
          <div style={{ position: "relative", width: "100%" }}>
            <div
              style={{ position: "fixed", top: 0, width: "100%", zIndex: -1 }}
            >
              <img
                style={{ width: "100%" }}
                src="./assets/img/backGroundLogin.jpg"
                alt=""
              ></img>
            </div>
            {this.props.loading?<Loader/>:
            (<ContentLoginPage>
              <h1 style={{ color: "blue", textAlign: "center" }}>
                QUẢN LÝ NHÀ THUỐC
              </h1>
              <ShadowBox>
                <h4 style={{ textAlign: "center" }}>ĐĂNG NHẬP</h4>
                <form onSubmit={this.handleSubmit}>
                  {this.props.err ? (
                    <div className="alert alert-danger" role="alert">
                      Đăng nhập không thành công
                    </div>
                  ) : (
                    ""
                  )}
                  <div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Tên đăng nhập</label>
                      <input
                        name="username"
                        className="form-control"
                        id="exampleInputEmail1"
                        onChange={this.handleOnChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={this.handleOnChange}
                      />
                    </div>
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Ghi nhớ
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Đăng nhập
                    </button>
                  </div>
                </form>
              </ShadowBox>
            </ContentLoginPage>)}
          </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        err:state.authPageReducer.err,
        loading:state.authPageReducer.loading
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handleLogin:(user)=>{
            dispatch(actApi(dispatch,user));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AuthPage)