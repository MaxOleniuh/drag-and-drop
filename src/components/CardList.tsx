
interface CardsListProps<T> {
  cards: T[];
  renderItem: (item: T) => React.ReactNode;
  sortCards: (a: T, b: T) => number;
}

export default function CardList<T>(props: CardsListProps<T>) {


  return (
    <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', marginTop: '200px', width: '100%'}}>
      {props.cards.sort(props.sortCards).map(props.renderItem)}
    </div>
  );
}
