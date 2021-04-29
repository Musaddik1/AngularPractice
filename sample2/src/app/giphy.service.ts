import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  giphyApi = '//api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=1&q=';


  constructor(private http:HttpClient) { }

  get(searchItem){
    const apiLink=this.giphyApi+searchItem;
    return this.http.get(apiLink).pipe(map((response:any)=>{
      if(response.data.length>0){
        return response.data[0].images.original.url;
      }else{
        return 'https://media.giphy.com/media/YaOxRsmrv9IeA/giphy.gif'; // dancing cat for 404

      }
    }));
  }
}