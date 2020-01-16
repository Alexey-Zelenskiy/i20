import {Component, OnInit} from '@angular/core';
import {AppService} from '../shared/app.service';
import {delay} from 'rxjs/operators';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.component.html',
  styleUrls: ['./app.component.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AppComponentComponent implements OnInit {

  private loading = true;
  private searchString = '';
  private showModal = false;

  constructor(private appService: AppService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.appService.fetchCharacters()
      .pipe(delay(2000))
      .subscribe(() => {
      });
  }

  onChange(id: number) {
    this.appService.onSelect(id);
    this.showModal = true;
  }

  open(content) {
    this.modalService.open(content);
  }
}

