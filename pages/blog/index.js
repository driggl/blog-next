import React from 'react';
import Head from '../../components/head';
import Nav from '../../components/nav';
import '../../assets/sass/general.sass';
import ArticleList from '../../components/article-list'
import fetch from 'isomorphic-unfetch';

const Blog = (props) => {
  return (
    <div>
      <Head
        title="Recent Articles | Driggl - Modern web development"
        description="Build modern websites like a professional with Driggl's Community!"
        ogDescription="Newest content from web Professionals and the Modern web development Community!"
        ogImage="/home-cover.jpg"
        ogType="website"
        url="https://driggl.com/blog"
        twitterSite="@drigglweb"
      />

      <Nav />

      <div className="container">
        <div className="container main">
          <div className="columns">
            <div className="column is-two-third-tablet is-three-quarters-desktop">
              <ArticleList articles={ props.articles } />
              {/* TODO: add infinite loading */}
            </div>
            <div className="column is-one-third-tablet is-one-quarter-desktop">
              <section className="section">
                {/* <email-subscription-form /> */}
              </section>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`

      `}</style>
    </div>
  );
};

Blog.getInitialProps = async function() {
  const res = await fetch('https://api.sourcerio.com/v1/blogs/driggl/articles');
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.data.length}`);

  return {
    articles: data.data.map(entry => entry)
  };
};

export default Blog;
