import React from 'react';
import {Link} from "react-router-dom";

const Main_Page = () => {
    return (
        <div>
            <Link to="/Analyst_Page">
                <button
                    type="button"
                    className="btn btn-primary btn-lg new-r">
                    Analyst
                </button>
            </Link>

            <Link to="/Researcher_Page">
                <button
                    type="button"
                    className="btn btn-primary btn-lg new-l">
                    Researcher
                </button>
            </Link>
        </div>
    );
};
export default Main_Page;
