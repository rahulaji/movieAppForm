import { useState } from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const incrementlike = () => setLike(like + 1);
  const incrementdislike = () => setDisLike(disLike + 1);

  return <>
    <div className='counter-container'>
      <IconButton
        color="primary"
        onClick={incrementlike}
        aria-label="like">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton
        color="error"
        onClick={incrementdislike}
        aria-label="dislike">
        <Badge badgeContent={disLike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  </>;
}
