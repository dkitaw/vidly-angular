import { Genre } from "../genres/genre.model";

export class Movie
{
    public id: string;
    public title: string;
    public genre: Genre;
    public numberInStock: Number;
    public dailyRentalRate: Number;
}