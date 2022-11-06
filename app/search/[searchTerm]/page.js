const search = async (searchTerm) => {
    const res = await fetch(
        `https://serpapi.com/search.json?q=/${searchTerm}&api_key=${process.env.API_KEY}`
    );
    // throw new Error('This is an error');
    const data = await res.json();
    return data;
};

export default async function SearchResults(props) {
    const {
        params: { searchTerm },
    } = props;
    const searchResults = await search(searchTerm);
    return (
        <div>
            <h1>Search Results for {searchTerm}</h1>
            <ol className='space-y-5 p-5'>
                {searchResults.organic_results.map((result) => (
                    <li key={result.position} className='list-decimal'>
                        <p className='font-bold'>{result.title}</p>
                        <p>{result.snippet}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
}
