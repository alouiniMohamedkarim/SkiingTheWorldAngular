import {event} from './../models/event';
import {BASE_URL} from './../app.module';
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class eventService {

  public newEventSubject = new Subject<any>();

  constructor(private http: Http) {
  }

  getAllEvents() {
    //return this.http.get('data/event.json').map(res => res.json());
    return this.http.get(BASE_URL + 'event');
  }
  public getNewest (){
    return this.http.get(BASE_URL+'event/top5')
  }
  getMyEvents() {
    let token = localStorage.getItem('token');
    var headers = new Headers();

    headers.set('Authorization', 'CodeInc ' + token);
     return this.http.get(BASE_URL + 'secured/event/private', {
      headers: headers
    });
  }


  public getById(id: number) {
    return this.http.get(BASE_URL + 'event/' + id);
  }

  public addEvent(event: any) {
    let token = localStorage.getItem('token');
    var headers = new Headers();

    headers.set('Authorization', 'CodeInc ' + token);


    return this.http.put(BASE_URL + 'secured/event', event, {
      headers: headers
    }).map(res => res.json());
  }

  public updateEvent(event: any) {
    let token = localStorage.getItem('token');
    var headers = new Headers();

    headers.set('Authorization', 'CodeInc ' + token);


    return this.http.put(BASE_URL + 'secured/event/update', event, {
      headers: headers
    }).map(res => res.json());
  }
  
  public applyForEvent(event:any){
    let token = localStorage.getItem('token');
    var headers = new Headers();

    headers.set('Authorization', 'CodeInc ' + token);
    return this.http.put(BASE_URL+ 'secured/event/apply', event, {
      headers: headers
    });
  }
  public deleteEvent(event:any){
    let token = localStorage.getItem('token');
    var headers = new Headers();

    headers.set('Authorization', 'CodeInc ' + token);
    return this.http.put(BASE_URL+ 'secured/event/delete', event, {
      headers: headers
    });
  }

  public uploadImgs(id:string,file:any){
    
        let headers = new Headers();
        headers.set('eventId',id);
        headers.set('Authorization','CodeInc '+localStorage.getItem('token'));
        let input = new FormData();
        input.append('uploadedFile',file);
        return this.http.put(BASE_URL+'secured/event/uploadPics',input,{
          headers:headers
        });
      }

}
