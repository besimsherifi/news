export interface Article {
    author: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name:string;
    };
    title: string;
    url: string;
    urlToImage: string;
    content: string;
}