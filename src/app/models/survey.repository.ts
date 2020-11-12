import { Injectable } from "@angular/core";
import { Survey } from "./survey.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()

export class SurveyRepository
{
    private surveys: Survey[] ;
    

    constructor(private datasource: StaticDataSource)
    {
       
       datasource.getSurveys().subscribe(data=>{
           this.surveys=data;
       });
       
    }



   
    getSurveys(): Survey[]
    {
        return this.surveys;
        
    }


}