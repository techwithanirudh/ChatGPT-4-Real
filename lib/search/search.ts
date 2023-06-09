export interface SearchResult {
    body: string
    href: string
    title: string
}

export async function apiSearch(query: string, numResults: number, timePeriod?: string, region?: string): Promise<SearchResult[]> {
    const searchParams = new URLSearchParams()
    searchParams.set('q', query)
    searchParams.set('max_results', numResults.toString())
    if (timePeriod) searchParams.set('time', timePeriod)
    if (region) searchParams.set('region', region)

    const url = `https://DDG-WebScraper.techwithanirudh.repl.co/search?${searchParams.toString()}`

    const response = await fetch(url, {
        method: "GET",
    })
    const results = await response.json()
    return results.map((result: any) => {
        return {
            body: result.body,
            href: result.href,
            title: result.title
        }
    })
}