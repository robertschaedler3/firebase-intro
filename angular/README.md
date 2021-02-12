# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

> *The project structure is for demonstration purposes only. Check out [this repo](https://github.com/robertschaedler3/Scalable-Angular-Project) a more sustainable project structure.*

Install Firebase
```
npm i @angular/fire firebase
```

Import firebase modules
```typescript
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyA44SiEq7G_NnEx2I_Y2_Y-hKfWAZAQk0Y",
        authDomain: "ssw-322.firebaseapp.com",
        projectId: "ssw-322",
        storageBucket: "ssw-322.appspot.com",
        messagingSenderId: "757002946237",
        appId: "1:757002946237:web:eec0a7df68d481914819d4",
        measurementId: "G-7C2RE14J5L"
    }),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule   // auth
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

[**Full guide here**](https://fireship.io/snippets/install-angularfire/)