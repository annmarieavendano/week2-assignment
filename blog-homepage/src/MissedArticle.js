import React from 'react';
import PropTypes, { arrayOf, string } from 'prop-types';
import bookmark from './bookmark.jpg';
import './MissedArticle.css';

export default class MissedArticle extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.articles = require("./_data/missed-articles.json");
    this.state = { articles: this.articles };
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
        <div class="missedArticle">
          <div class="missedArticle-image">
            <img alt="missedArticleImage" src={item.image}/>
          </div>
          <div class="missedArticle-title">{item.title}</div>
          <div class="missedArticle-description"> {item.description}</div>
          <div className="missedArticle-author-image">
            <img alt="missedArticleImage" src={item.author.image}/>
          </div>
          <div className="missedArticle-bookmark">
            <img src={bookmark} alt="" />
          </div>
          <div className="missedArticle-author-name">{item.author.name}</div>
          <div className="missedArticle-length">
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

MissedArticle.propTypes = 
{
    articles:arrayOf(string)
};

