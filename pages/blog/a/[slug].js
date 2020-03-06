import React from 'react'
import Head from 'components/head';
import Nav from 'components/nav';
import 'assets/sass/general.sass';
import fetch from 'isomorphic-unfetch';
import absoluteUrl from 'next-absolute-url'

const Article = ({article}) => {
  return (
    <div>
      <Head
        title={ `${article.attributes.title} | Driggl - Modern web development` }
        description={article.attributes.excerpt}
        author="Sebastian Wilgosz"

        ogTitle={article.attributes.title}
        ogType="article"
        ogDescription={article.attributes.excerpt}
        ogImage={
          article.attributes.thumbnail.sharing.replace(
            'https://driggl-prod.s3.eu-central-1.amazonaws.com',
            'https://blog-next.driggl.now.sh/api/images'
          )
        }
        ogType="website"
        url={ `https://driggl.com/blog/a/${article.attributes.slug}`}
        twitterSite="@drigglweb"
        twitterCreator="@sebwilgosz"
        twitterTitle={article.attributes.title}
        twitterDescription={article.attributes.excerpt}
      />

      <Nav />
      <section
        className="hero"
        style={{
          'backgroundImage':
            'url(' +
            article.attributes.thumbnail.full.replace(
              'https://driggl-prod.s3.eu-central-1.amazonaws.com',
              'https://blog-next.driggl.now.sh/api/images'
            ) +
            ')'
        }}
      >
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              { article.attributes.title }
            </h1>
          </div>
        </div>
      </section>
      <div className="section main">
        <div className="container">
          <div className="columns">
            <div className="column is-hidden-touch is-one-quarter-desktop" />
            <div className="column is-two-third-tablet is-one-half-desktop">
              <div className="article-meta">
                <span>Category: </span><strong>Web development</strong>
                <span>Author: </span><strong>Sebastian Wilgosz</strong>
              </div>
              <div className="cover social">
                <img
                  src={
                    article.attributes.thumbnail["sharing-square"].replace(
                      'https://driggl-prod.s3.eu-central-1.amazonaws.com',
                      'https://blog-next.driggl.now.sh/api/images'
                    )
                    }
                />
              </div>
              <div
                className="content is-spaced"
                dangerouslySetInnerHTML={{
                __html: article.attributes.content
              }}
              />
              <div className="comments">
                {/* <vue-disqus
                  shortname="driggl"
                  :identifier="'article-' + article.id"
                  :url="'https://driggl.com/blog/a/' + article.slug"
                  :title="article.title"
                /> */}
              </div>
            </div>
            <aside className="column is-one-third-tablet is-one-quarter-desktop">
              <section className="header">
                {/* <email-subscription-form /> */}
              </section>
            </aside>
          </div>
        </div>
      </div>
      <style jsx>{`
        .main {
          padding: 40px 0;
        }
        .main .content {
          padding-top: 30px;
        }

        .hero {
          height: 400px;
          background-position: center;
        }
        .hero .container {
          max-width: 700px;
          margin: auto;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: center;
        }
        .hero .title, .subtitle {
          color: #fff; //$white;
        }

        .hero-body {
          background-color: rgba(0,0,0,0.75);
        }

        .cover.social {
          overflow: hidden;
          width: 1px;
          height: 1px;
          float: left;
        }
      `}</style>
    </div>
  )
}

Article.getInitialProps = async function(context) {
  const { slug } = context.query
  const { origin } = absoluteUrl(context.req)
  var url = new URL(`/api/articles/${slug}`, origin)
  const res = await fetch(url.toString());
  const data = await res.json();

  return {
    article: data.data
  };
};

export default Article;