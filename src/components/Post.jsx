import React from "react";

const Post = (props) => {
    // Distruktizatsiya
    const { title, text, image } = props;
    return (
        <div>
            <img src = {image} alt={text}/>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
};

export default Post;

