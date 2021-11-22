import React from "react";
import List from "../../components/list";
import guide from "../../data/guide.json";

function Guide(){
    const panel = {
        marginTop: 5 + 'em',
      };

    return (
        <div style={ panel }>
            <h2>Game Guides</h2>
            <List items={ guide.data }/>
        </div>
    );
}

export default Guide;
