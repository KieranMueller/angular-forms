import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-graphql',
  templateUrl: './graphql.component.html',
  styleUrls: ['./graphql.component.css'],
})
export class GraphqlComponent implements OnInit {
  countries: any[] = [];
  getCountries = gql`
    query {
      countries {
        code
        name
        capital
        currency
      }
    }
  `;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: this.getCountries,
      })
      .valueChanges.subscribe({
        next: (res: any) => {
          console.log(res.data.countries);
          this.countries = res.data.countries;
        },
      });
  }
}
