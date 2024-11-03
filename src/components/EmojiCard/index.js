import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onClickEmojiBox = () => {
    onClickEmoji(id)
  }
  return (
    <li>
      <button className="emoji-card" onClick={onClickEmojiBox} type="button">
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
