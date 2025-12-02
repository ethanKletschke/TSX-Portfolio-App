import ContentsTableCard from "../ContentsTableCard/ContentsTableCard";


type ContentsTableProps = {
  cards: string[];
};

export default function ContentsTable({ cards }: ContentsTableProps) {
  return (
    <div>
      {cards.map((card) => (
        <ContentsTableCard title="" iconSrc="">
          
        </ContentsTableCard>
      ))}
    </div>
  );
}
