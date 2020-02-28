import React from 'react';
import Link from 'next/link';
import Head from '../../components/head';
import Nav from '../../components/nav';
import '../../assets/sass/general.sass';

const Blog = () => {
  return (
    <div className="container">
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

            </div>
            <div className="column is-one-third-tablet is-one-quarter-desktop">
              <section className="section">

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

export default Blog;
