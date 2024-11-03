/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, gameActive: true, prevEmojisList: []}

  onClickEmoji = id => {
    const {score, topScore, prevEmojisList} = this.state
    const {emojisList} = this.props
    let lose = prevEmojisList.includes(id)
    console.log(lose)

    let newScore
    let newTopScore
    if (lose === true) {
      newScore = score
      if (score > topScore) {
        newTopScore = score
      } else {
        newTopScore = topScore
      }
    } else {
      newScore = score + 1
      if (newScore > topScore) {
        newTopScore = newScore
      } else {
        newTopScore = topScore
      }
    }
    if (emojisList.length - 1 === prevEmojisList.length) {
      lose = true
    }
    this.setState(prevState => ({
      score: newScore,
      topScore: newTopScore,
      gameActive: !lose,
      prevEmojisList: [...prevState.prevEmojisList, id],
    }))
  }

  onClickPlayAgain = () => {
    const {gameActive} = this.state
    console.log(gameActive)
    this.setState({score: 0, gameActive: true, prevEmojisList: []})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderGame = () => {
    const {score, gameActive} = this.state
    const shuffledEmojisList = this.shuffledEmojisList()
    if (gameActive === true) {
      return (
        <ul className="list-container">
          {shuffledEmojisList.map(eachEmoji => (
            <EmojiCard
              emojiDetails={eachEmoji}
              key={eachEmoji.id}
              onClickEmoji={this.onClickEmoji}
            />
          ))}
        </ul>
      )
    }
    return (
      <WinOrLoseCard
        score={score}
        gameActive={gameActive}
        emojisListlength={shuffledEmojisList.length}
        onClickPlayAgain={this.onClickPlayAgain}
      />
    )
  }

  render() {
    const {score, topScore, gameActive, prevEmojisList} = this.state
    const {emojisList} = this.props
    // const prevemojis = emojisList.filter(eachEmoji => {
    //   if (prevEmojisList.includes(eachEmoji.id)) {
    //     return false
    //   }
    //   return true
    // })
    // console.log(prevemojis)
    return (
      <div>
        <NavBar score={score} topScore={topScore} gameActive={gameActive} />
        <div className="game">{this.renderGame()}</div>
      </div>
    )
  }
}
export default EmojiGame
