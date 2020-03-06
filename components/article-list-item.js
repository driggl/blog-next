import React from 'react';
import Link from 'next/link';
import { string } from 'prop-types';

const Item = (props) =>{
  return (
    <div className="card">
      <Link href="blog/a/[slug]" as={`/blog/a/${props.slug}`}>
        <div className="columns">
          <div className="column is-half">
            <figure className="image">
              <img src={props.thumbnail} alt="Placeholder image" />
            </figure>
          </div>
          <div className="card-content">
            <h3 className="title is-5">{ props.title }</h3>
            <div className="article-meta">
              <span>Category: </span><strong>{ props.category }</strong>
              <span>Author: </span><strong>{ props.author }</strong>
            </div>
            <div className="content">
              <p>{ props.excerpt }</p>
            </div>
            <div className="level">
              <div className="level-left"></div>
              <div className="level-right">
                <div className="level-item">
                  <a href="/" className="readmore">
                    read more...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <style jsx>{`
        .article-meta {
          font-size: 0.8rem;
          margin-top: -10px;
          margin-bottom: 20px;
        }

        .card {
          display: flex;
          align-items: flex-start;
          overflow: hidden;
          border-radius: 10px;
          margin-bottom: 20px;
        }

        .card a {
          color: #444444;
        }
        .card .readmore {
          color: #e89b4b;
          text-decoration: underline;
        }

        .card:hover .readmore {
          color: #bd6f2b;
        }

        .card-image {
          max-width: 50%;
        }

        .card {
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease-in-out;
        }

        .card:hover {
          box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
            0 0px 0 1px rgba(10, 10, 10, 0.02);
        }
      `}</style>
    </div>
  )
}

Item.propTypes = {
  title: string.isRequired,
  slug: string.isRequired,
  excerpt: string.isRequired,
  thumbnail: string.isRequired,
  author: string.isRequired,
  category: string.isRequired
};

export default Item;

