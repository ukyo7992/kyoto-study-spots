type SearchBarProps = {
  keyword: string;
  onKeywordChange: (keyword: string) => void;
};

export default function SearchBar({keyword,onKeywordChange,}: SearchBarProps) {
  return (
    <input
      type="text"
      value={keyword}
      placeholder="スポットを検索"
      onChange={(event) => onKeywordChange(event.target.value)}
    />
  );
}