import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import guide from '../../data/guide.json'
import YouTube from 'react-youtube';
import "./detail.css"

function Detail(){
    const { id } = useParams();
    const [selectedGuide, setSelectedGuide] = useState("");
    const opts = {
        height: '390',
        width: '640',
      };

    useEffect(() => {
        setSelectedGuide(guide.data.filter((g) => g.id == id)[0]);
    }, [guide])

    return (
        <section class="game_details">
            <article class="article">
                <img class="thumbnail" src={selectedGuide.thumbnail} alt={selectedGuide.title} />
                <h1 class="title">How to play {selectedGuide.title}</h1>
                <ul style={{ listStyleType:"inherit", listStyle:"inside", listStylePosition:"inside", flexWrap:"wrap" }}>
                {selectedGuide && selectedGuide.description_full.map((paragraph, idx) => (
                    <li key={idx} style={{ margin: "20px 0", fontSize: "15px" }}>
                        {paragraph}
                    </li>
                ))}
                </ul>
                <h2>Example Videos</h2>
                <YouTube videoId={selectedGuide.youtube} opts={opts} onReady={(e) => e.target.pauseVideo()} />
            </article>
        </section>
    );
}

export default Detail;