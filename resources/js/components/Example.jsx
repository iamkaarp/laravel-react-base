import React from 'react';
import ReactDOM from 'react-dom';

function Example () {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            Example Co mponent
                        </div>
                        <div
                            className="card-body"
                            props="derp">
                            Im an example componedfgdfggf !!
                        </div>
                    </div>
                </div>
                <div />
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
