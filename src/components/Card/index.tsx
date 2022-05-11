/* eslint-disable jsx-a11y/img-redundant-alt */

import './index.css';

interface ICardProps {
  title: string,
  centered?: boolean,
  children?: any
}

export default function Card(props: ICardProps) {
  let cardClasses = 'card';

  if (props.centered) {
    cardClasses = 'card centered';
  }

  return (
    <div className={cardClasses}>
      <div className="header">
        <h3 className="title">{props?.title}</h3>
      </div>

      <div className="content">
        {props.children}
      </div>
    </div>
  );
}