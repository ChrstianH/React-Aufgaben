import { useState } from "react";
import type { Bird } from "../data/birds";

interface BirdCardProps {
  bird: Bird;
}

export default function BirdCard({ bird }: BirdCardProps) {
  const [showEmoji, setShowEmoji] = useState(false);

  return (
    <article className="bird-card" style={{ maxWidth: "300px" }}>
      <h3>{bird.name}</h3>
      <em>
        {bird.genus} {bird.species}
      </em>
      <div>
        <button
          onClick={() => {
            setShowEmoji(true);
          }}
          disabled={showEmoji}
        >
          Show Emoji
        </button>
      </div>
      {showEmoji && <div className="bird-card__emoji">{bird.emoji}</div>}
      <p>{bird.description}</p>
    </article>
  );
}
