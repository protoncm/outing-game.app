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

            <div style={panel}>
            <h2>Lucky wheel event x2 (Jackpot)</h2>
                <ul style={{ listStyleType: 'initial', listStylePosition: 'inside' }}>
                    <li>Win good luck, prize money 1000+++</li>
                    <li>Everyone will have 2-name-draws put in the lucky spinning wheel. If the wheel spins to anyone’s name, that person wins and receives the big prize money. Grand prize starts at 1000 with added value*</li>
                    <li>***You can use 2 Tonkens to exchange the right and add your name into the spinning wheel by replacing your name with one of friends’ in the spinning wheel.</li>
                    <li>*Using Tonken to redeem privileges will increase the reward value by 100 baht per time (per 1 right or 2 Tonken).</li>
                </ul>
            </div>
            <div  style={panel}>
                 <h2>Win bad luck, get punished for writing a page</h2>
                <ul style={{ listStyleType: 'initial', listStylePosition: 'inside' }}>
                    <li>Everyone will have 2 names in the wheel of luck. If the wheel spins to anyone. That person will be punished by face drawing.  ***You can use 1 Tonken to exchange the right to delete your name in the spinning wheel by replacing it with one of friends’ in the spinning wheel.</li>
                    <li>*Using Tonken to redeem privileges will add value to give more lucky prizes by 50 baht per time (per 1 right or 1 Tonken).</li>
                </ul>
            
            </div>
            <div style={panel}>
                <h3>NOTE: ***If you don't use Tonken, you can exchange Tonken for prize money by 1 Tonken = 50 baht.</h3>
            </div>
        </div>
           
    );
}

export default Home;