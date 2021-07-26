export type SecurityType = {
  Symbol: string;
  Name: string;
  Description: string;
  Exchange: string;
  Currency: string;
  Country: string;
  Sector: string;
};

export const getSecurity = (
  searchTerm: string,
  data: SecurityType[]
): SecurityType[] => {
  if (!searchTerm || !data) return [];
  const results = data.filter((security) =>
    security.Symbol.includes(searchTerm.toUpperCase())
  );
  return results;
};
