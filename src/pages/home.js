import React from "react";
import Guide from "./guide/main";

const panel = {
    marginTop: 5 + 'em',
  };

function Home(){
    return (
        <div>
            <h1>Welcome to Salween Happy Time!</h1>
            <h4>Today we are going to play games togather including us and your familiy !</h4>
            <h4>I'm provide game guide for your guys please pay attendion before play games. :)</h4>
            <div style={panel}>
            <h2>Overall Rule</h2>
                <ul style={{ listStyleType: 'initial', listStylePosition: 'inside' }}>
                    <li>Win the game to get token coin.</li>
                    <li>1 token coion = 50 Bath!</li>
                    <li>Exchange 2 token coin for increase jackpot rate and decreae chance to someone else.</li>
                    <li>Exchange 1 token coin for decreae punish rate.</li>
                    <li>Exchanged Tokens value will add to total of jackpot price.</li>
                </ul>
            </div>
           
            <Guide/>
        </div>
        
    );
}

export default Home;