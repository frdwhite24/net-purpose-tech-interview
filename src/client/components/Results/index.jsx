export const Results = ({ results }) => {
  return (
    <ul>
      {results.map((result) => (
        <li key={result.Name}>{result.Name}</li>
      ))}
    </ul>
  );
};
