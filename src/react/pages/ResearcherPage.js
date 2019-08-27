import React from 'react';
import SearchBar from "../page_element/SearchBar";
import MLabDatabaseListView from "../page_element/mLabDatabase";

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
