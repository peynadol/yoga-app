export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search Poses"
      value={value}
      onChange={onChange}
    />
  );
}
