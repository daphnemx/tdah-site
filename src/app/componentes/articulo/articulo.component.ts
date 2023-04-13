import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
  providers: [ArticleService],
})
export class ArticuloComponent implements OnInit {
  //articleId: number;

  constructor(/*private articleService: ArticleService, private route: ActivatedRoute*/) {}

  ngOnInit() {
    /*this.articleId =parseInt(this.route.snapshot.paramMap.get('id'),10);
    //console.log('Selected article ID:', articleId);
    this.articleService.getArticleById(articleId).subscribe((article) => {
      console.log('Fetched article content:', article);
      // Do something with the fetched article content
    });*/
  }
}
