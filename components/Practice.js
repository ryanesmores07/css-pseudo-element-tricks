import React from "react";
import styled from "styled-components";

const Practice = () => {
  return (
    <Wrapper>
      <h1 className="intro">wHere is a generic heading</h1>
      {/*  
      <div className="card-container">
        <div className="card">
          <img className="card-image" src="//unsplash.it/400/350" alt="" />
          <div className="card-info">
            <h3 className="card-title">Card title</h3>
            <p className="card-body">And here are some text</p>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src="//unsplash.it/399/350" alt="" />
          <div className="card-info">
            <h3 className="card-title">Card title</h3>
            <p className="card-body">And here are some text</p>
          </div>
        </div>
      </div>
      <div className="card-container_2">
        <div className="option card-legibility">
          <img
            className="card-image_1"
            src="//unsplash.it/398/300"
            alt="a mountain"
          />
          <div className="card-info">
            <h3 className="card-title">Card title</h3>
            <p className="card-body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium, ipsa?
            </p>
          </div>
        </div>
        <div className="option card-funky">
          <img
            className="card-image_2"
            src="//unsplash.it/397/300"
            alt="a boy"
          />
          <div className="card-info">
            <h3 className="card-title">Card title</h3>
            <p className="card-body">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="option card-gradient">
          <div className="card-info">
            <h3 className="card-title">Card title</h3>
            <p className="card-body">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="content box-shadow">
        <h3>Box Shadow</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni modi
          dolor nisi non quis, neque soluta impedit consequatur qui obcaecati!
        </p>
      </div>
      <div className="scale-effect">
        <img src="//unsplash.it/300/300" alt="yawa" className="scale-image" />
        <div className="scale-info">
          <h3>Scale effect</h3>
        </div>
      </div>
      <div className="fancy">
        <a href="" className="fancy-link">
          It works well with links
        </a>{" "}
        and even with{" "}
        <a href="" className="fancy-link">
          short ones
        </a>{" "}
        too
      </div>
      */}
      <div className="text-reveal">
        <div className="card">
          <h3 className="card__title">Lorem, ipsum dolor.</h3>
          <p className="card__body">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 100%;
  /* background-color: gray; */
  .intro {
    font-size: 3rem;
    text-transform: uppercase;
    position: relative;
    display: inline-block;

    &::before,
    &::after {
      content: "";

      position: absolute;
      height: 100%;
      display: block;
    }

    &::before {
      background-color: #fff;

      z-index: -1;
      left: -2rem;
      right: -2rem;
    }

    &::after {
      background-color: lightblue;
      width: 100vw;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      z-index: -2;
    }
  }

  .card-container {
    margin: 2rem;
    display: flex;
    justify-content: center;
    gap: 2rem;

    .card {
      position: relative;
      background-color: grey;

      &:hover .card-image {
        opacity: 0.4;
      }

      &:hover .card-info {
        opacity: 1;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 1.25rem;
        right: 1.25rem;
        bottom: 1.25rem;
        left: 1.25rem;
      }

      &::before {
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        transform: scale(0, 1);
        transition: transform ease-out 250ms;
      }
      &:hover::before {
        transform: scale(1.05, 1);
      }

      &::after {
        border-right: 1px solid white;
        border-left: 1px solid white;
        transform: scale(1, 0);
        transition: transform ease-out 250ms;
      }
      &:hover::after {
        transform: scale(1, 1.05);
      }

      .card-image {
        max-width: 100%;
        display: block;
        transition: opacity ease-out 250ms;
        opacity: 1;
      }

      .card-info {
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity ease-out 250ms;
      }
    }
  }

  .card-container_2 {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    place-content: center;
    gap: 2rem;
    max-width: 100%;

    .option {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      border-radius: 0.25em;
      color: white;
      /* box-shadow: 0 0 3rem rgb(0 0 0 / 0.5); */
    }

    .card-legibility {
      position: relative;
      box-shadow: 0 0 3rem hsl(0 0 0 / 0.2);

      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        /* inset: 0 1rem 6.5rem 1rem; */
        inset: 0;
        background: linear-gradient(0deg, rgb(0 0 0 / 0.5), rgb(0 0 0 / 0));
      }

      .card-image_1 {
        max-width: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .card-info {
        position: absolute;
        /* top: 70%;
        left: 40%; */
        inset: 40% 13% 0% 10%;

        text-align: justify;
        /* transform: translate(-50%, -50%); */
        color: white;
      }
    }

    .card-funky {
      position: relative;

      overflow: hidden;
      /* isolation: isolate; */

      &::before,
      &::after {
        content: "";
        position: absolute;
        inset: 0;
      }

      &::before {
        z-index: -1;
        background: orangered;
        mix-blend-mode: overlay;
      }
      &::after {
        z-index: -2;
        background: purple;
        mix-blend-mode: overlay;
      }

      .card-image_2 {
        position: absolute;
        z-index: -3;
        inset: 0;
        max-width: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-color: red;
      }

      .card-info {
        position: absolute;
        inset: 40% 13% 0% 10%;
        text-align: justify;

        color: white;
      }
    }

    .card-gradient {
      position: relative;
      isolation: isolate;
      /* overflow: hidden; */
      background: linear-gradient(45deg, rgb(255 165 0), rgb(174 224 230));
      box-shadow: 0;

      &::before,
      &::after {
        content: "";
        position: absolute;
        z-index: -1;
        inset: 0;
        /* background: linear-gradient(0deg, rgb(0 0 0 / 0.5), rgb(0 0 0 / 0)); */
        background: inherit;
      }

      &::before {
        filter: blur(1rem);
      }

      &::after {
        filter: blur(1rem);
        opacity: 0.2;
      }

      .card-info {
        position: absolute;
        inset: 40% 13% 0% 10%;
        text-align: justify;
        color: white;
      }
    }
  }

  .content {
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.1);

    transition: transform 250ms ease;
  }
  .box-shadow {
    padding: 2rem;
    margin: 2rem;
    border: 1px solid black;
    max-width: 100%;
    width: 50%;
    position: relative;

    &:hover {
      transform: translateY(-0.35em) scale(1.02);
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      opacity: 0;
      box-shadow: 0 0.75rem 2rem -0.5em rgba(0, 0, 0, 0.3);
      transition: opacity 250ms ease;
    }

    &:hover::after {
      opacity: 1;
    }
  }

  .scale-effect {
    position: relative;
    display: inline-block;

    /* width: 20rem; */
    background-color: red;
    isolation: isolate;
    overflow: hidden;

    &:hover .scale-image {
      transform: scale(1.3);
    }

    .scale-image {
      max-width: 100%;
      transform: scale(1.1);
      /* width: 100%; */
      object-fit: cover;
      transition: transform 250ms ease-out;
    }

    .scale-info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
    }
  }

  .fancy-link {
    color: orangered;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: currentColor;
      transform: scale(0);
      transform-origin: right;
      transition: transform 250ms ease-in;
    }

    &:hover::after {
      transform: scale(1);
      transform-origin: left;
    }
  }

  .text-reveal {
    .card {
      background-color: rgba(0, 0, 0, 0.5);
      width: 50%;
      color: white;
      margin: 0 auto;
      padding: 2rem;
      text-align: left;
      isolation: isolate;

      &:hover .card__title::after,
      &:hover .card__body::after {
        transform: scaleX(1) scaleY(1);
      }
      &:hover .card__body {
        color: #333;
      }

      .card__title {
        position: relative;
        z-index: 1;
        padding: 0.5rem 0;
        /* padding-right: 2rem; */
        display: inline-block;
        margin: 0;

        &::after {
          content: "";
          z-index: -1;
          position: absolute;
          top: 0;
          bottom: 0;
          left: -2rem;
          right: 0;
          width: calc(100% + 4rem);
          background-color: orange;
          transform: scaleX(0.1);
          /* transform: scaleX(1); */
          transform-origin: left;
          transition: transform 250ms ease-in;
        }
      }

      .card__body {
        margin: 0;
        position: relative;
        z-index: 1;
        padding: 1rem 0;
        display: block;
        color: transparent;
        transition: color 150ms 350ms;
        &::after {
          content: "";
          position: absolute;
          z-index: -1;
          background-color: #fff;
          top: 0;
          bottom: 0;
          left: -1rem;
          right: 0;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 250ms ease-in 250ms;
        }
      }
    }
  }
`;

export default Practice;
