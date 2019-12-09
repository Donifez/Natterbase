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
        return (
            <div>
                <Navbar/>
                <Top statistics={this.props.statistics}/>
                <Table applications={this.props.applications}/>

            </div>
        );
    }
}

const mapStateToProps=state=>({
applications: state.app.applications,
// statistics: state.statistic.statistics,

isLoading: state.app.isLoading,
})

const mapDispatchToProps=dispatch=>({
    onGetApplications: ()=>{dispatch(getApplication())},
    onGetStatistics: ()=>{dispatch(getStatistic())}
  
    
})

export default connect(mapStateToProps,mapDispatchToProps) (dashboard);