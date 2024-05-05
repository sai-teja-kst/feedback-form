// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {displayFeedback: true}

  onClickFeedback = () =>
    this.setState(prevState => ({
      displayFeedback: !prevState.displayFeedback,
    }))

  render() {
    const {displayFeedback} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    console.log(emojis)

    return (
      <div className="bg-container">
        {displayFeedback ? (
          <div className="bg-card">
            <h1>How satisfied are you with our customer support performance</h1>
            <ul className="ul-container">
              {emojis.map(eachItem => (
                <li className="li-container" key={eachItem.id}>
                  <img
                    className="bg-icons"
                    src={eachItem.imageUrl}
                    alt={eachItem.name}
                    onClick={this.onClickFeedback}
                  />
                  {eachItem.name}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="bg-card">
            <img src={loveEmojiUrl} alt="love emoji" />
            <h1>Thank You!</h1>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
