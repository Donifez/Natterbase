import React from "react";
import { connect } from "react-redux";

import Navbar from "./navbar";
import Top from "./top";
import Table from "./table";

import { getApplication } from "../store/actions/applications";
import { getStatistic } from "../store/actions/statistics";




class dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        this.props.onGetApplications();
        this.props.onGetStatistics();
    }
    render() {
        // console.log(this.props.applications)
        return (
            <div>
                <Navbar/>
                <Top statistics={this.props.statistics} loader={this.props.loader}/>
                <Table applications={this.props.applications} isLoading={this.props.isLoading}/>

            </div>
        );
    }
}

const mapStateToProps=state=>({
applications: state.app.applications.applications,
statistics: state.statistics.statistics.statistics,
isLoading: state.app.isLoading,
loader: state.statistics.isLoading
})

const mapDispatchToProps=dispatch=>({
    onGetApplications: ()=>{dispatch(getApplication())},
    onGetStatistics: ()=>{dispatch(getStatistic())}  
})

export default connect(mapStateToProps,mapDispatchToProps) (dashboard);