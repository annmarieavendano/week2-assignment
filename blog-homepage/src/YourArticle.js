import React from 'react';
import PropTypes, { arrayOf, string } from 'prop-types';
import bookmark from './bookmark.jpg';
import './YourArticle.css';

export default class YourArticle extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.articles = require("./_data/your-articles.json");
    this.state = { articles: this.articles };
    const test = 'I am a test';
console.log(`Test: ${test}`);
  }

  renderArticles = () => 
  {
    const articles = this.state.articles;
    return articles.map(item =>
    {
      // parse date
      const dateFormat = new Date(item.postedDate);
      const month = dateFormat.toLocaleString("default", { month: "long" });
      const day = dateFormat.toLocaleString("default", { day: "numeric"});

      return (
        <div class="yourArticle" key="uniqueId1">
          <div class="yourArticle-image">
            <img alt="yourArticleImage" src={item.image}/>
          </div>
          <div class="yourArticle-title">{item.title}</div>
          <div class="yourArticle-description"> {item.description}</div>
          <div className="yourArticle-author-image">
            <img alt="yourArticleImage" src={item.author.image}/>
          </div>
          <div className="yourArticle-bookmark">
            <img src={bookmark} alt="" />
          </div>
          <div className="yourArticle-author-name">{item.author.name}</div>
          <div className="yourArticle-length">
          {month} {day} * {item.minutesToRead} min read 
          </div>
        </div> 
      );
    });
  }

  render()
  {
    const temp = this.renderArticles();
    return temp; 
  }
}

YourArticle.propTypes = 
{
    articles:arrayOf(string)
};

