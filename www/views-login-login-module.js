(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-login-login-module"],{

/***/ "./src/app/views/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content padding class=\"getBackgroundImage\" [hidden]=\"loginService.hideLogin\">\n  <div class=\"login-wrap\">\n\n      <h1 class=\"positionTitle brandWhite\">\n          <ion-text class=\"brandTitle\">\n              <span class=\"\">Pera</span>\n              <span class=\"brandYellow\">Mobile</span>\n              <!--HTML code for the TM symbol-->\n              <span class=\"trademark\">&#8482;</span>\n          </ion-text>\n          <span class=\"positionSubtitle\">Proactive Rapid Response</span>\n      </h1>\n\n      <form (ngSubmit)=\"login()\">\n          <ion-item class=\"transparentBackground\">\n              <ion-label for=\"username\">Username</ion-label>\n              <ion-input #input required type=\"text\" [(ngModel)]=\"getUser().username\" text-left id=\"username\" name=\"username\" placeholder=\"Username\"></ion-input>\n          </ion-item>\n          <ion-item class=\"transparentBackground\">\n              <ion-label for=\"password\">Password</ion-label>\n              <ion-input required type=\"password\" [(ngModel)]=\"userPassword\" text-left id=\"password\" name=\"password\" placeholder=\"Password\"></ion-input>\n          </ion-item>\n          <button id=\"login\" type=\"submit\"><strong>Sign In</strong></button>\n      </form>\n      <div class=\"errorMessage\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n\n      <ion-footer class=\"footer\"><strong>PeraMobile v4.1.0</strong><br/>Proprietary and Confidential, © 2018 PeraHealth, Inc. All Rights Reserved\n      US Patent Nos. 8,092,380; 8,100,829; 8,355,925; 8,403,847 and 8,454,506; Canadian Patent No. 2,599,387</ion-footer>\n\n  </div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/views/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56,128,255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #0cd1e8;\n  --ion-color-secondary-rgb: 12,209,232;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #0bb8cc;\n  --ion-color-secondary-tint: #24d6ea;\n  /** tertiary **/\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112,68,255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16,220,96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255,255,255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255,206,0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245,61,61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34,34,34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255,255,255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152,154,162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255,255,255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244,244,244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0,0,0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** perahealth branding colors **/\n  --perahealth-brand-yellow: #FFCB05;\n  --perahealth-brand-gray: #565B6C;\n  --perahealth-brand-turquoise: #00B0AD;\n  --perahealth-brand-background: #2B3F53;\n  --perahealth-brand-selected: #496C89;\n  /** PeraMobile Branded fonts **/\n  --peramobile-brandfont:'sf_pro_display-regular', arial, helvetica, sans-serif;\n  --peramobile-secondaryfont:'din_condensedbold', Trebuchet MS, tahoma, sans-serif; }\n.getBackgroundImage {\n  text-align: center;\n  --ion-padding:0; }\n.transparentBackground {\n  --background: rgba(255,255,255,0.30); }\n.transparentBackground.item-has-value {\n    --background: rgba(255,255,255,0.75); }\n.brandYellow {\n  color: var(--perahealth-brand-yellow); }\n.brandWhite {\n  color: white; }\n.login-wrap {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-content: center;\n  width: 100%;\n  height: calc(100% - 0%);\n  background: transparent url('background_picture.png') no-repeat 0 0;\n  background-size: cover;\n  padding: 0px 16px 60px; }\n.positionTitle {\n  width: 79%;\n  margin: 0 auto 15%;\n  text-align: center;\n  overflow: hidden; }\n.brandTitle {\n  font-family: var(--peramobile-brandfont);\n  font-size: 14vw;\n  line-height: 100%; }\n.trademark {\n  display: inline-block;\n  position: relative;\n  top: 4px;\n  left: 1px;\n  font-size: 3.5vw;\n  line-height: 0; }\n.positionSubtitle {\n  display: block;\n  width: 94%;\n  font-family: var(--peramobile-secondaryfont);\n  font-size: 4.48vw;\n  letter-spacing: 0.25vw;\n  text-align: right;\n  color: white; }\nion-item {\n  --padding-start:0;\n  overflow: hidden; }\nion-item:first-of-type {\n    --border-radius:3px 3px 0 0; }\nion-item:last-of-type {\n    --border-radius:0 0 3px 3px;\n    --border-color:transparent; }\n@media (min-width: 768px) {\n    ion-item {\n      max-width: 79%;\n      margin-right: auto;\n      margin-left: auto; } }\nion-input {\n  --padding-start:7px;\n  --padding-end:7px;\n  --placeholder-color: white;\n  --placeholder-opacity: 1; }\nion-label {\n  width: 0;\n  height: 0;\n  color: #ffffff;\n  overflow: hidden; }\nbutton {\n  background-color: var(--perahealth-brand-gray);\n  border-radius: 3px;\n  margin-top: 5vw;\n  padding: 2% 4%;\n  font-size: 3.78vw;\n  line-height: 110%;\n  color: white; }\n@media (min-width: 768px) {\n    button {\n      font-size: 17px; } }\n.errorMessage {\n  background-color: rgba(255, 255, 255, 0.6);\n  border: 1px solid #fff;\n  border-radius: 3px;\n  margin-top: 5vw;\n  padding: 4% 2%;\n  font-size: 3.36vw;\n  color: red; }\n.footer {\n  position: absolute;\n  bottom: 1em;\n  width: calc(100% - 10%);\n  font-size: 2.8vw;\n  color: #ffffff;\n  text-align: left; }\n.footer:before {\n    background-image: none; }\n.footer strong {\n    font-size: 3.08vw; }\n@media (min-width: 768px) {\n    .footer {\n      width: calc(100% - 16px);\n      font-size: 11px; }\n      .footer strong {\n        font-size: 12px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXkvV2ViRGV2L3BlcmFtb2JpbGUvc3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL3JheS9XZWJEZXYvcGVyYW1vYmlsZS9zcmMvYXBwL3ZpZXdzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBCQUFBO0FBQ0E7RUFFRSxjQUFBO0VBQ0EsNEJBQW9CO0VBQ3BCLG1DQUF3QjtFQUN4QixxQ0FBNkI7RUFDN0IsNkNBQWlDO0VBQ2pDLGtDQUEwQjtFQUMxQixpQ0FBeUI7RUFFekIsZ0JBQUE7RUFDQSw4QkFBc0I7RUFDdEIscUNBQTBCO0VBQzFCLHVDQUErQjtFQUMvQiwrQ0FBbUM7RUFDbkMsb0NBQTRCO0VBQzVCLG1DQUEyQjtFQUUzQixlQUFBO0VBQ0EsNkJBQXFCO0VBQ3JCLG9DQUF5QjtFQUN6QixzQ0FBOEI7RUFDOUIsOENBQWtDO0VBQ2xDLG1DQUEyQjtFQUMzQixrQ0FBMEI7RUFFMUIsY0FBQTtFQUNBLDRCQUFvQjtFQUNwQixrQ0FBd0I7RUFDeEIscUNBQTZCO0VBQzdCLDZDQUFpQztFQUNqQyxrQ0FBMEI7RUFDMUIsaUNBQXlCO0VBRXpCLGNBQUE7RUFDQSw0QkFBb0I7RUFDcEIsa0NBQXdCO0VBQ3hCLHFDQUE2QjtFQUM3Qiw2Q0FBaUM7RUFDakMsa0NBQTBCO0VBQzFCLGlDQUF5QjtFQUV6QixhQUFBO0VBQ0EsMkJBQW1CO0VBQ25CLGlDQUF1QjtFQUN2QixvQ0FBNEI7RUFDNUIsNENBQWdDO0VBQ2hDLGlDQUF5QjtFQUN6QixnQ0FBd0I7RUFFeEIsV0FBQTtFQUNBLHlCQUFpQjtFQUNqQiw4QkFBcUI7RUFDckIsa0NBQTBCO0VBQzFCLDBDQUE4QjtFQUM5QiwrQkFBdUI7RUFDdkIsOEJBQXNCO0VBRXRCLGFBQUE7RUFDQSwyQkFBbUI7RUFDbkIsbUNBQXVCO0VBQ3ZCLG9DQUE0QjtFQUM1Qiw0Q0FBZ0M7RUFDaEMsaUNBQXlCO0VBQ3pCLGdDQUF3QjtFQUV4QixZQUFBO0VBQ0EsMEJBQWtCO0VBQ2xCLGtDQUFzQjtFQUN0QixtQ0FBMkI7RUFDM0IscUNBQStCO0VBQy9CLGdDQUF3QjtFQUN4QiwrQkFBdUI7RUFFdkIsaUNBQUE7RUFDQSxrQ0FBMEI7RUFDMUIsZ0NBQXdCO0VBQ3hCLHFDQUE2QjtFQUM3QixzQ0FBOEI7RUFDOUIsb0NBQTRCO0VBRTVCLCtCQUFBO0VBQ0EsNkVBQXVCO0VBQ3ZCLGdGQUEyQixFQUFBO0FDcEY3QjtFQUdFLGtCQUFrQjtFQUVsQixlQUFjLEVBQUE7QUFHaEI7RUFDRSxvQ0FBYSxFQUFBO0FBRGY7SUFNSSxvQ0FBYSxFQUFBO0FBSWpCO0VBQ0UscUNBQXFDLEVBQUE7QUFHdkM7RUFDRSxZQUFZLEVBQUE7QUFJZDtFQUNFLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsdUJBQXNCO0VBQ3RCLHFCQUFvQjtFQUNwQixXQUFVO0VBQ1YsdUJBQXNCO0VBQ3RCLG1FQUFzRjtFQUN0RixzQkFBc0I7RUFDdEIsc0JBQXFCLEVBQUE7QUFHdkI7RUFFRSxVQUFTO0VBQ1Qsa0JBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZSxFQUFBO0FBR2pCO0VBRUUsd0NBQXdDO0VBQ3hDLGVBcERjO0VBcURkLGlCQUFpQixFQUFBO0FBSW5CO0VBQ0UscUJBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixRQUFPO0VBQ1AsU0FBUTtFQUNSLGdCQUE0QjtFQUM1QixjQUFhLEVBQUE7QUFJZjtFQUNFLGNBQWE7RUFFYixVQUFTO0VBRVQsNENBQTRDO0VBQzVDLGlCQUE0QjtFQUU1QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTtBQUlkO0VBQ0UsaUJBQWdCO0VBQ2hCLGdCQUFlLEVBQUE7QUFGakI7SUFJSSwyQkFBZ0IsRUFBQTtBQUpwQjtJQU9JLDJCQUFnQjtJQUNoQiwwQkFBZSxFQUFBO0FBRWpCO0lBVkY7TUFXSSxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLGlCQUFpQixFQUFBLEVBRXBCO0FBR0Q7RUFDRSxtQkFBZ0I7RUFDaEIsaUJBQWM7RUFDZCwwQkFBb0I7RUFDcEIsd0JBQXNCLEVBQUE7QUFReEI7RUFDRSxRQUFPO0VBQ1AsU0FBUTtFQUNSLGNBQWE7RUFDYixnQkFBZSxFQUFBO0FBSWpCO0VBSUUsOENBQThDO0VBQzlDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYTtFQUNiLGlCQUE0QjtFQUM1QixpQkFBZ0I7RUFDaEIsWUFBWSxFQUFBO0FBS1o7SUFmRjtNQWdCSSxlQUFjLEVBQUEsRUFFakI7QUFFRDtFQUNFLDBDQUF1QztFQUN2QyxzQkFBcUI7RUFDckIsa0JBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFhO0VBQ2IsaUJBQTRCO0VBQzVCLFVBQVUsRUFBQTtBQUdaO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVU7RUFDVix1QkFBc0I7RUFDdEIsZ0JBQTRCO0VBQzVCLGNBQWE7RUFDYixnQkFBZ0IsRUFBQTtBQU5sQjtJQVFJLHNCQUFxQixFQUFBO0FBUnpCO0lBV0ksaUJBQTJCLEVBQUE7QUFFN0I7SUFiRjtNQWNJLHdCQUF1QjtNQUN2QixlQUFjLEVBQUE7TUFmbEI7UUFpQk0sZUFBYyxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbjpyb290IHtcblxuICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzM4ODBmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDU2LDEyOCwyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzMxNzFlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNGM4ZGZmO1xuXG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzBjZDFlODtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMTIsMjA5LDIzMjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMGJiOGNjO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzI0ZDZlYTtcblxuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNzA0NGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDExMiw2OCwyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzYzM2NlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzdlNTdmZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzEwZGM2MDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDE2LDIyMCw5NjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMGVjMjU0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMyOGUwNzA7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmNlMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsMjA2LDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYjUwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkMzFhO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2YwNDE0MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjQ1LDYxLDYxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNkMzM5Mzk7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZjI1NDU0O1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsMzQsMzQ7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLDE1NCwxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsMjQ0LDI0NDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xuXG4gIC8qKiBwZXJhaGVhbHRoIGJyYW5kaW5nIGNvbG9ycyAqKi9cbiAgLS1wZXJhaGVhbHRoLWJyYW5kLXllbGxvdzogI0ZGQ0IwNTtcbiAgLS1wZXJhaGVhbHRoLWJyYW5kLWdyYXk6ICM1NjVCNkM7XG4gIC0tcGVyYWhlYWx0aC1icmFuZC10dXJxdW9pc2U6ICMwMEIwQUQ7XG4gIC0tcGVyYWhlYWx0aC1icmFuZC1iYWNrZ3JvdW5kOiAjMkIzRjUzO1xuICAtLXBlcmFoZWFsdGgtYnJhbmQtc2VsZWN0ZWQ6ICM0OTZDODk7XG5cbiAgLyoqIFBlcmFNb2JpbGUgQnJhbmRlZCBmb250cyAqKi9cbiAgLS1wZXJhbW9iaWxlLWJyYW5kZm9udDonc2ZfcHJvX2Rpc3BsYXktcmVndWxhcicsIGFyaWFsLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIC0tcGVyYW1vYmlsZS1zZWNvbmRhcnlmb250OidkaW5fY29uZGVuc2VkYm9sZCcsIFRyZWJ1Y2hldCBNUywgdGFob21hLCBzYW5zLXNlcmlmO1xufVxuXG5cblxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlc1wiO1xuJGZvbnQtc2l6ZTogMTR2dztcblxuLmdldEJhY2tncm91bmRJbWFnZSB7XG4gIC8vLS1iYWNrZ3JvdW5kOiMwMDAwMDAgdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmRfcGljdHVyZS5wbmcnKSBuby1yZXBlYXQgMCAwO1xuICAvL2JhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy9yZW1vdmUgY3VzdG9tIHBhZGRpbmcgdGhhdCBnZXRzIGFkZGVkIHRvIGEgcHJvamVjdC5cbiAgLS1pb24tcGFkZGluZzowO1xufVxuXG4udHJhbnNwYXJlbnRCYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMzApO1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBkZWNlYXNlIG9wYWNpdHkgd2hlbiBhIHVzZXIgdHlwZXMgaW50byBhIGlucHV0IGZpZWxkLlxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAmLml0ZW0taGFzLXZhbHVle1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjc1KTtcbiAgfVxufVxuXG4uYnJhbmRZZWxsb3cge1xuICBjb2xvcjogdmFyKC0tcGVyYWhlYWx0aC1icmFuZC15ZWxsb3cpO1xufVxuXG4uYnJhbmRXaGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4ubG9naW4td3JhcHtcbiAgZGlzcGxheTpmbGV4O1xuICBmbGV4LWZsb3c6Y29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1jb250ZW50OmNlbnRlcjtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OmNhbGMoMTAwJSAtIDAlKTtcbiAgYmFja2dyb3VuZDp0cmFuc3BhcmVudCB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZF9waWN0dXJlLnBuZycpIG5vLXJlcGVhdCAwIDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBhZGRpbmc6MHB4IDE2cHggNjBweDtcbn1cblxuLnBvc2l0aW9uVGl0bGUge1xuICAvL3dpZHRoOjkwJTtcbiAgd2lkdGg6NzklO1xuICBtYXJnaW46MCBhdXRvIDE1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzpoaWRkZW47XG59XG5cbi5icmFuZFRpdGxlIHtcbiAgLy9mb250LWZhbWlseTokc2YtcHJvLWRpc3BsYXktcmVnO1xuICBmb250LWZhbWlseTogdmFyKC0tcGVyYW1vYmlsZS1icmFuZGZvbnQpO1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi50cmFkZW1hcmsge1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6NHB4O1xuICBsZWZ0OjFweDtcbiAgZm9udC1zaXplOiAwLjI1ICogJGZvbnQtc2l6ZTtcbiAgbGluZS1oZWlnaHQ6MDtcbn1cblxuXG4ucG9zaXRpb25TdWJ0aXRsZSB7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIC8vd2lkdGg6Y2FsYygxMDAlIC0gMTElKTtcbiAgd2lkdGg6OTQlO1xuICAvL2ZvbnQtZmFtaWx5OiAnZGluX2NvbmRlbnNlZGJvbGQnO1xuICBmb250LWZhbWlseTogdmFyKC0tcGVyYW1vYmlsZS1zZWNvbmRhcnlmb250KTtcbiAgZm9udC1zaXplOiAwLjMyICogJGZvbnQtc2l6ZTtcblxuICBsZXR0ZXItc3BhY2luZzogMC4yNXZ3O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5cbmlvbi1pdGVte1xuICAtLXBhZGRpbmctc3RhcnQ6MDtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICAmOmZpcnN0LW9mLXR5cGV7XG4gICAgLS1ib3JkZXItcmFkaXVzOjNweCAzcHggMCAwO1xuICB9XG4gICY6bGFzdC1vZi10eXBle1xuICAgIC0tYm9yZGVyLXJhZGl1czowIDAgM3B4IDNweDtcbiAgICAtLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1xuICAgIG1heC13aWR0aDogNzklO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxufVxuXG5cbmlvbi1pbnB1dHtcbiAgLS1wYWRkaW5nLXN0YXJ0OjdweDtcbiAgLS1wYWRkaW5nLWVuZDo3cHg7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHdoaXRlO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEFsd2F5cyBtYWtlIGxhYmVscyBmb3IgaW5wdXRzIGFjY2Vzc2liaWxpdHkuXG4vLyBKdXN0IG1ha2UgdGhlIHRpbnkgd2l0aCBjc3MgYnV0IHN0aWxsIHJlYWRhYmxlIGluIHRoZSBjb2RlLlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmlvbi1sYWJlbHtcbiAgd2lkdGg6MDtcbiAgaGVpZ2h0OjA7XG4gIGNvbG9yOiNmZmZmZmY7XG4gIG92ZXJmbG93OmhpZGRlbjtcbn1cblxuXG5idXR0b24ge1xuICAvL3dpZHRoOiAyMHZ3O1xuICAvL2hlaWdodDogOHZ3O1xuICAvL2JhY2tncm91bmQtY29sb3I6IHZhcigtLXBlcmFoZWFsdGgtYnJhbmQtdHVycXVvaXNlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVyYWhlYWx0aC1icmFuZC1ncmF5KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tdG9wOiA1dnc7XG4gIHBhZGRpbmc6MiUgNCU7XG4gIGZvbnQtc2l6ZTogMC4yNyAqICRmb250LXNpemU7XG4gIGxpbmUtaGVpZ2h0OjExMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLy8mOmZvY3Vze1xuICAvLyAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDgxLCAyMDMsIDIzOCwgMSk7XG4gIC8vICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDgxLCAyMDMsIDIzOCwgMSk7XG4gIC8vfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1xuICAgIGZvbnQtc2l6ZToxN3B4O1xuICB9XG59XG5cbi5lcnJvck1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsIDAuNik7XG4gIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czozcHg7XG4gIG1hcmdpbi10b3A6IDV2dztcbiAgcGFkZGluZzo0JSAyJTtcbiAgZm9udC1zaXplOiAwLjI0ICogJGZvbnQtc2l6ZTtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOjFlbTtcbiAgd2lkdGg6Y2FsYygxMDAlIC0gMTAlKTtcbiAgZm9udC1zaXplOiAwLjIwICogJGZvbnQtc2l6ZTtcbiAgY29sb3I6I2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgJjpiZWZvcmV7XG4gICAgYmFja2dyb3VuZC1pbWFnZTpub25lO1xuICB9XG4gIHN0cm9uZ3tcbiAgICBmb250LXNpemU6MC4yMiAqICRmb250LXNpemU7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcbiAgICB3aWR0aDpjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICBmb250LXNpemU6MTFweDtcbiAgICBzdHJvbmd7XG4gICAgICBmb250LXNpemU6MTJweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng_login_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-login-library */ "./node_modules/ng-login-library/fesm5/ng-login-library.js");




var LoginPageComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginPageComponent, _super);
    function LoginPageComponent(loginService, loginIpService, toastCtrl, platform) {
        var _this = _super.call(this, loginService, loginIpService) || this;
        _this.loginService = loginService;
        _this.loginIpService = loginIpService;
        _this.toastCtrl = toastCtrl;
        _this.platform = platform;
        _this.errorMessage = '';
        return _this;
    }
    LoginPageComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.errorMessage = null;
        setTimeout(function () {
            _this.userNameField.setFocus();
        }, 150);
        this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(9999, function () {
            // Ignored - prevents going back to the login screen
        });
    };
    LoginPageComponent.prototype.ionViewWillLeave = function () {
        if (this.backButtonSubscription && !this.backButtonSubscription.closed) {
            this.backButtonSubscription.unsubscribe();
        }
    };
    LoginPageComponent.prototype.loginErrored = function () {
        var _this = this;
        setTimeout(function () {
            _this.userNameField.setFocus();
        }, 150);
    };
    LoginPageComponent.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: this.errorMessage,
                            duration: 3000,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginPageComponent.prototype, "userNameField", void 0);
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/views/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_login_library__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            ng_login_library__WEBPACK_IMPORTED_MODULE_3__["LoginIpService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}(ng_login_library__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]));



/***/ }),

/***/ "./src/app/views/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/views/login/login.component.ts");







var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-login-login-module.js.map