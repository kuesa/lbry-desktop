// @flow
import React from 'react';
import relativeDate from 'tiny-relative-date';
import Button from 'component/button';
import Expandable from 'component/expandable';

type Props = {
  author: string,
  authorUri: string,
  message: string,
  timePosted: number,
};

function Comment(props: Props) {
  const { author, authorUri, timePosted, message } = props;

  return (
    <li className="comment">
      <div className="comment__meta">
        <Button
          className="button--uri-indicator truncated-text comment__author"
          navigate={authorUri}
          label={author || __('Anonymous')}
        />
        <time className="comment__time" dateTime={timePosted}>
          {relativeDate(timePosted)}
        </time>
      </div>
      <div>
        <Expandable>
          <p className={'comment__message'}>{message}</p>
        </Expandable>
      </div>
    </li>
  );
}

export default Comment;
