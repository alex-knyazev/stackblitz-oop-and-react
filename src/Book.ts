export class Book {
  public title?: string;
  public author?: string;
  public publicationYear?: number;

  setTitle(title: string): this {
    this.title = title;
    return this;
  }

  setAuthor(author: string): this {
    this.author = author;
    return this;
  }

  setPublicationYear(publicationYear: number): this {
    this.publicationYear = publicationYear;
    return this;
  }
}
