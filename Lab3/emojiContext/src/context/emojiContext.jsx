import { useContext, createContext, useState } from "react"
import "../styles/emoji.css"

const EmojiContext = createContext();

export const EmojiProvider = (props) => {

    const [mood, setCurrentEmoji] = useState('😁');

    const handleUpdateEmoji = () => {
        let newMood = '😁';
        if (mood === '😁') {
            newMood = '😒'
        } else if (mood === '😒') {
            newMood = '🤔';
        } else if (mood === '🤔') {
            newMood = '🤨';
        }else if (mood === '🤨') {
            newMood = '😫';
        }
        setCurrentEmoji(newMood);
    }

    return (
        <EmojiContext.Provider value={{mood, handleUpdateEmoji}}>

            {props.children}

            <div className="emojiBox">
                Current Mood: 

                <button onClick={handleUpdateEmoji}>{mood}</button>

            </div>

        </EmojiContext.Provider>
    );
}

export const useEmojiContext = () => {
return useContext(EmojiContext);
}
