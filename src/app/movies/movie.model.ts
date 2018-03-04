import { Genre } from "../genres/genre.model";

export class Movie
{
    public id: String;
    public title: String;
    public genre: Genre;
    public numberInStock: Number;
    public dailyRentalRate: Number;
}