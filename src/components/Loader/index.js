import React, { Component } from 'react'
import './loader.css'
export default class Loader extends Component {
    render() {
        return (
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        )
    }
}
