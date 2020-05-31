export interface IContent {
    id: string;
    title: string;
    items: IContentItem[]
 }

export interface IContentItem {
    type: string;
    content: string;
}