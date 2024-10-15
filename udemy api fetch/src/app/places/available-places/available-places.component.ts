import { Component, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit{
  places = signal<Place[] | undefined>(undefined);
  private httpClient=inject(HttpClient)
  isFetching=signal(false)
  error=signal('')


  // getData(){
  //   this.httpClient.get("http://localhost:3000/places").subscribe(A=>
  //     console.log(A)
      
  //   )
  // }


  ngOnInit(){
    this.isFetching.set(true)
    const subscription=this.httpClient
  .get<{places:Place[]}>("http://localhost:3000/places").pipe(map((resData)=>resData.places),catchError((error)=>{
    console.log(error);
    return throwError(()=>{
      new Error("Something went wrong")
    });
  })).subscribe({next:(places)=> {
    this.places.set(places)
  },

  error:(error)=>{
    console.log(error);
    this.error.set('something went wrong fetching the api')

  },


  complete:()=> {
 this.isFetching.set(false)      

  },
  onSelectPlace(selectedPlaces:Place){
  // this.httpClient.put()

  }




})
}




   


}
