import { Injectable } from "@angular/core";
import { Survey } from './survey.model'
import {  Observable, from} from "rxjs";

@Injectable()
export class StaticDataSource
{
    private surveys: Survey[] =
    [
        new Survey(1,'Survey 1','Short Description 1',['Question 1','Question 2','Question 3'],[3,4,5]),
        new Survey(2,'Survey 2','Short Description 2',['Question 1','Question 2','Question 3','Question 4'],[3,4,9]),
        new Survey(3,'Survey 3','Short Description 3',['Question 1','Question 2'],[3,4]),
        new Survey(4,'Survey 4','Short Description 4',['Question 1','Question 2','Question 3','Question 4','Question 5'],[7,6,10,8,9]),
        new Survey(5,'Survey 5','Short Description 5',['Question 1','Question 2','Question 3'],[3,6,4]),
        new Survey(6,'Survey 6','Short Description 6',['Question 1','Question 2','Question 3'],[3,2,8]),
        new Survey(7,'Survey 7','Short Description 7',['Question 1','Question 2','Question 3'],[3,2,4]),
        new Survey(8,'Survey 8','Short Description 8',['Question 1','Question 2','Question 3'],[5,7,5]),
        new Survey(9,'Survey 9','Short Description 9',['Question 1','Question 2','Question 3'],[4,8,8]),
        new Survey(10,'Survey 10','Short Description 10',['Question 1','Question 2','Question 3'],[3,4,5]),
    ];

    getSurveys(): Observable<Survey[]>
    {
        return from([this.surveys]);
    }
}