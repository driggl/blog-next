import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import '../assets/sass/general.sass';

const Home = () => {
  return (
    <div>
      <Head title="Home" />
      {/* <Nav /> */}

      <div>
        {/* <top-nav /> */}
        <section
          className="hero has-background-image"
          // style={{backgroundImage: url('/home-cover.jpg')}}
        >
          <div className="hero-body has-mask">
            <div className="container has-text-right">
              <h1 className="title">
                Wanna be a developer?
              </h1>
              <a
                href="#courses"
                className="button is-primary has-text-weight-bold is-large"
              >
                Check out our courses!
              </a>
            </div>
          </div>
        </section>
        <section className="section hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h2 className="title">
                Experienced & Trusted by
                <strong><span className="has-text-orange">700+</span></strong> People
                worldwide
              </h2>
              <a
                href="https://www.udemy.com/ruby-on-rails-api-the-complete-guide/?couponCode=DGLWEB"
                className="button is-primary has-text-weight-bold is-large"
              >
                Start learning now!
              </a>
            </div>
          </div>
        </section>
        <section id="courses" className="section">
          <div className="columns">
            <div className="column is-one-half">
              <img src="/rails-rest-api.jpg" />
            </div>
            <div className="column is-one-half">
              <div className="content">
                <h2 className="title">Ruby On Rails REST API</h2>
                <h3 className="subtitle is-5">The complete guide</h3>
                <p className="is-size-3">
                  Create professional API applications that you can hook anything
                  into! Learn how to code like professionals using Test Driven
                  Development!
                </p>
              </div>
              <a
                href="https://www.udemy.com/ruby-on-rails-api-the-complete-guide/?couponCode=DGLWEB"
                target="_blank"
                className="button is-primary has-text-weight-bold is-large"
              >
                Take this course for 10$ >
              </a>
            </div>
          </div>
        </section>
        <section className="hero section">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h2 className="title">
                Not sure if it's for you?
              </h2>
              <h3 className="subtitle">
                No worries, we offer
                <strong><span className="has-text-orange">30-day</span></strong>
                money-back!
              </h3>
              <a
                href="https://www.udemy.com/ruby-on-rails-api-the-complete-guide/?couponCode=DGLWEB"
                className="button is-primary has-text-weight-bold is-large"
              >
                Check it out!
              </a>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .hero.has-background-image {
          background-image: url('/home-cover.jpg');
          background-size: cover;
          backgorund-position: center;
        }
        .has-mask {
          min-height: 600px;
          background-color: rgba(0,0,0,0.65);
          display: flex;

        }
        .has-mask .container {
          display: flex;
          align-self: center;
          align-items: flex-end;
          flex-direction: column;
        }
        .has-mask .container .title {
          color: $white;
        }
      `}</style>
    </div>
  );
};

export default Home;
