import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Post } from '../post';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {


  readonly ROOT_URL = "http://127.0.0.1:8000/api/recupererarticle"; 
  public pros : Observable<Post[]> ;
        constructor(private http : HttpClient){}

        getPosts(){
           this.pros = this.http.get<Post[]>(this.ROOT_URL);
           
           
           console.log( this.pros);
        }

  ngOnInit(): void {
  }

}
