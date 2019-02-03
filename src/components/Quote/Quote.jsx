import React from 'react';
import './Quote.scss';

const Quote = (props) => {
    let quotesArray = [
        "Your conclusion must be crystal clear, and you must keep it constantly in your mind.",
        "Never begin anything unless you have reflected what will be the end of it.",
        "The less you associate with some people, the more your life will improve. Any time you tolerate mediocrity in others, it increases your mediocrity. An important attribute in successful people is their impatience with negative thinking and negative acting people. As you grow, your associates will change. Some of your friends will not want you to go on. They will want you to stay where they are. Friends that don’t help you climb will want you to crawl. Your friends will stretch your vision or choke your dream. Those that don’t increase you will eventually decrease you.",
        "It is a shame for a man to grow old without seeing the beauty and strength of which his body is incapable.",
        "Most of our troubles arise from expectations, which have not become realities.",
        "Is it going to be a gift or a burden?",
        "I don't take advice from someome who doesn't have what I want.",
        "He who has a why to live for can bear almost any how",
        "Everything that irritates us about others can lead us to an understanding of ourselves.",
        "My serenity is inversely prportional to my expectations. The higher my expectations of other people are, the lower is my serenity."
    ];

    const getQuote = () => {
        let arrayLength = quotesArray.length;
        let randomNumber = Math.floor((Math.random() * arrayLength) + 1);
        return quotesArray[randomNumber];
    }

    let quote = getQuote();
    
    return (
        <div className="Quote">
            {quote}
        </div>
    );
}

export default Quote;