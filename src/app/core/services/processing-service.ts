import { Injectable } from '@angular/core';
import {Processing} from "../Models/processing-model";
@Injectable({
  providedIn: 'root'
})
export class ProcessingService {
  processings : Processing[] = [
    {id: 0, name: 'John Doe', age: 30, address: 'New York', isChecked: true, description:"this is a description"},
    {id: 1,name: 'Jane Smith', age: 25, address: 'London', isChecked: false, description:"this is a description"},
    {id: 2,name: 'Bob Johnson', age: 35, address: 'Paris', isChecked: false, description:"this is a description"}
  ];
  getAllProcessings(): Processing[] {
    return this.processings;
  }

  getProcessingById(processingId: number): Processing {
    const processing = this.processings.find(processing => processing.id === processingId);
    if (!processing) {
      throw new Error('Details not found!');
    } else {
      return processing;
    }
  }
}
