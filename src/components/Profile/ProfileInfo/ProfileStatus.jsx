import Preloader from "../../Common/Preloader/Preloader";
import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({editMode: true});  //setState - асинхронен
    }

    deactivateEditMode() {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status!==this.props.status) {
            this.setState({status: this.props.status})
        }
        console.log("comp")
    }

    render() {
        return (
            <div>

                {!this.state.editMode &&
                <div>
                    status:
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.state.status || "---"}</span>
                </div>
                }

                {this.state.editMode &&
                <div>
                    status:
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)}
                           value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;