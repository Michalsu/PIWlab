import React, { useState } from "react";

class Notices extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            queryDescryption: "",
            queryTag: "",
            querySubject: ""
        }
    }

    updateQueryDescryption = (event) => {
        this.setState({
            queryDescryption: event.target.value
        })
    }
    updateQueryTag = (event) => {
        this.setState({
            queryTag: event.target.value
        })
    }
    updateQuerySubject = (event) => {
        this.setState({
            querySubject: event.target.value
        })
    }
    render() {
        const noticeNameHTML = this.props.students
        .filter(it => it.description.includes(this.state.queryDescryption) && it.tags.includes(this.state.queryTag) && it.subject.includes(this.state.querySubject))
        .map((it, i)=>{
                return <p key={i}>{it.name}<br></br>
                {it.description}<br></br>
                {it.tags}<br></br>
                {it.subject}</p>
        })
        
        return (
            <div>
                <input value={this.state.queryDescryption} onChange={this.updateQueryDescryption}/>
                <input value={this.state.queryTag} onChange={this.updateQueryTag}/>
                <input value={this.state.querySubject} onChange={this.updateQuerySubject}/>
                {noticeNameHTML}
             
            </div>
        )
    }
}

export default Notices;