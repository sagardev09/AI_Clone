import React from 'react'
import "../Articles/Articles.css"


const Articles = ({ imgUrl, date, title }) => {
    return (
        <div className='gpt3__blog-container_article'>
            <div className='gpt3__blog-container_article-image'>

                <img src={imgUrl} alt="article" />
            </div>
            <div className='gpt3__blog-container_article-content'>
                <div>
                    <p>{date}</p>
                    <h3>
                        {title}
                    </h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Articles
