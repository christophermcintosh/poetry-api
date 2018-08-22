import React from 'react';

const LandingPage = () => {
  return (
    <div className="text-center" id="landing-page">
      <div id="landing-page-inner">
        <div id="landing-page-title">
          <h1>Welcome to Poetry</h1>
          <p>A collection of poems by famous poets</p>
          <input
            type="text"
            name="value"
            placeholder="Search Poets"
            className="my-3"
            // onChange={this.handleChange}
          />
        </div>
      </div>
      {/* <img src="https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=67898e3724d653a9447e96c2a2096196&auto=format&fit=crop&w=3200&q=80" /> */}
    </div>
  );
};

export default LandingPage;
