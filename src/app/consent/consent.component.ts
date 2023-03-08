import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Processing} from "../core/Models/processing-model";
import {ProcessingService} from "../core/services/processing-service";

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})

export class ConsentComponent implements OnInit{
 processings!: Processing[];
  constructor(private processingService: ProcessingService) { }
  ngOnInit(): void {
    this.processings = this.processingService.getAllProcessings();
  }
}
