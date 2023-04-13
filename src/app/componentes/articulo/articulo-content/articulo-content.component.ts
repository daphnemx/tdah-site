import { Component, OnInit, Input } from '@angular/core';
import articleContent from '../../../../assets/contenido/articulos.json';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-articulo-content',
  templateUrl: './articulo-content.component.html',
  styleUrls: ['./articulo-content.component.css'],
  providers: [ArticleService],
})
export class ArticuloContentComponent implements OnInit {
  articleId: number;
  article: Article;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.articleId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.articleService.getArticleById(this.articleId).subscribe((article) => {
      this.article = article;
      console.log('Fetched article content:', article);
      // Do something with the fetched article content
    });
  }
}
