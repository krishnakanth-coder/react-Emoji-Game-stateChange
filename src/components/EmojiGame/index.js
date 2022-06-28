import {Component} from 'react'
import NavBar from '../NavBar'
import './index.css'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {gameEmojisList: [], gameProgress: true, topScore: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    const {gameEmojisList} = this.state

    console.log(gameEmojisList)
    if (gameEmojisList.length === emojisList.length) {
      this.setState({gameProgress: false})
    }
    return emojisList.sort(() => Math.random() - 0.5)
  }

  resetGame = () => {
    const {gameEmojisList, topScore} = this.state
    const bestScore =
      gameEmojisList.length > topScore ? gameEmojisList.length : topScore
    this.setState({gameEmojisList: [], gameProgress: true, topScore: bestScore})
  }

  userOnClickEmoji = id => {
    const {gameEmojisList} = this.state
    const gameStatus = gameEmojisList.includes(id)
      ? this.setState(prev => ({gameProgress: !prev.gameProgress}))
      : this.setState(prev => ({gameEmojisList: [...prev.gameEmojisList, id]}))

    return gameStatus
  }

  renderEmojiCard = () => {
    const shuffledNewEmojisList = this.shuffledEmojisList()
    const EmojisCard = shuffledNewEmojisList.map(eachCard => (
      <ul className="allEmojisCardList" key={eachCard.id}>
        <EmojiCard
          eachEmoji={eachCard}
          userOnClickEmoji={this.userOnClickEmoji}
        />
      </ul>
    ))
    return EmojisCard
  }

  renderWinOrLoseCard = () => {
    const {gameEmojisList, gameProgress} = this.state
    const score = gameEmojisList.length
    return (
      <WinOrLoseCard
        score={score}
        resetGame={this.resetGame}
        gameProgress={gameProgress}
      />
    )
  }

  render() {
    const {gameEmojisList, gameProgress, topScore} = this.state
    const score = gameEmojisList.length

    return (
      <div className="emojiGame-page-container">
        <div className="responsive-page-container">
          <NavBar
            score={score}
            topScore={topScore}
            gameProgress={gameProgress}
          />
          <div className="game-result-card">
            {gameProgress ? this.renderEmojiCard() : this.renderWinOrLoseCard()}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
