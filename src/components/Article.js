import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const emoji = minutes < 30 ? "☕️" : "🍱";
  const units = minutes < 30 ? Math.ceil(minutes / 5) : Math.ceil(minutes / 10);
  const emojiString = emoji.repeat(units);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emojiString} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
