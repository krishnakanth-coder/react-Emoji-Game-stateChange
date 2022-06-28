import './index.css'

const EmojiCard = props => {
  const {eachEmoji, userOnClickEmoji} = props
  const {id, emojiName, emojiUrl} = eachEmoji
  const onClickEmoji = () => {
    userOnClickEmoji(id)
  }

  return (
    <li className="each-emoji-card">
      <button type="button" className="emoji-button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
