import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB7AQXRfEQxhrEQLj-XhNXXjgmJqVlFLng",
  authDomain: "feriauth.firebaseapp.com",
  projectId: "feriauth",
  storageBucket: "feriauth.appspot.com",
  messagingSenderId: "544856827864",
  appId: "1:544856827864:web:0956741d5c6ad6af7134ad",
  measurementId: "G-S9M62CK1YP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  constructor() { }
  // Footer style
  classname = "footer-area footer-area-v1 bg_cover";
  ftlogo = "assets/images/logo-2.png";
  ftbg = "assets/images/footer-1.jpg";

  ngOnInit(): void {
  }

}
