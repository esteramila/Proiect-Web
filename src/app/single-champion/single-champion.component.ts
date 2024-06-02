import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-champion',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './single-champion.component.html',
  styleUrl: './single-champion.component.css'
})
export class SingleChampionComponent implements OnInit{
  //httpClient = inject(HttpClient);
  championId: any;
  champion: any;

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute // Inject ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { // Subscribe to route parameter changes
      this.championId = params['id']; // Get the champion ID from the route parameters
      this.fetchChampion(this.championId); // Fetch champion data using the ID
    });
  }

  fetchChampion(championId: string) {
    const version = '14.11.1'; // Specify the correct version
    const language = 'en_US'; // Specify the correct language
    const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion/${championId}.json`; // Construct the URL
    this.httpClient
    .get(url)
    .subscribe((response: any) => {
      this.champion = response.data[championId]; // Save champion data to the property
      //console.log(this.champion);
    }, (error: any) => {
      //console.error('Error fetching champion data:', error);
    });
  }

  trackById(index: number, champion: any): number {
    return champion.id;
  }
}
