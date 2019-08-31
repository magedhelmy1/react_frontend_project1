import React from 'react';
import SearchBar from "../components/SearchBar";
import MLabDatabaseListView from "../components/mLabDatabase";

class ResearcherPage extends React.Component {


    render() {
        return (
            <div>
                <SearchBar/>
                <MLabDatabaseListView/>
            </div>
        );
    }
}

export default ResearcherPage;
