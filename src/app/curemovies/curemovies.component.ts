import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-curemovies',
  templateUrl: './curemovies.component.html',
  styleUrls: ['./curemovies.component.css']
})
export class CuremoviesComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
