import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from "./article-list-item";

const List = (props) =>{
  return (
    <div className="articles section">
      {props.articles.map(({id, attributes}) => (
        <ArticleListItem
          key={id}
          id={id}
          title={attributes.title}
          excerpt={attributes.excerpt}
          slug={attributes.slug}
          category='Web development'
          thumbnail={attributes.thumbnail.small.replace('https://driggl-prod.s3.eu-central-1.amazonaws.com', '/api/images')}
          author="Sebastian Wilgosz"
        />
      ))}
    </div>
  )
}

List.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      attributes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired
      })
    })
  ).isRequired
};

export default List;
