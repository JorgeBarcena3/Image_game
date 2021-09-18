export class Keywords
{
    
    hasLocution : boolean = true;
    keyword: string =  "";
    plural: string =  "";
    type: integer = 0;

}

export class Pictograms
{
    _id	: integer = 0;
    keywords : Array<Keywords> = [];
    
}