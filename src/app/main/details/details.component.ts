import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/details.mode';
import { DetailsService } from '../../services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less'],
})
export class DetailsComponent implements OnInit, AfterViewInit {
  divWidth: number = 1440;
  @ViewChild('widgetParentDiv') parentDiv:ElementRef;
  @HostListener('window:resize') onResize() {
    if(this.parentDiv) {
      this.divWidth = this.parentDiv.nativeElement.clientWidth;
    }
  }
  @HostListener('') onInit() {
    if(this.parentDiv) {
      this.divWidth = this.parentDiv.nativeElement.clientWidth;
    }
  }
  carouselIndex = 0;
  carDetail: CarDetail;
  domain: string = 'http://challenge.agenciaego.tech';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _detailsService: DetailsService
  ) {}

  ngOnInit(): void {
    this.divWidth = window.innerWidth;
    this._activatedRoute.params.subscribe((param) => {
      this._detailsService
      .getAll(param.modelId)
      .then((cd) => {
        this.carDetail = cd;
        })
        .catch((error) => {});
    });
  }

  ngAfterViewInit(): void{
    this.onResize();
  }


  rightChange(){
    this.carouselIndex++;
  }

  leftChange(){
    if(this.carouselIndex > 0)
      this.carouselIndex--;
  }
}
