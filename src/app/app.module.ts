import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainWrapComponent } from './components/main-wrap/main-wrap.component';
import { ColLeftComponent } from './components/col-left/col-left.component';
import { ColCenterComponent } from './components/col-center/col-center.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { SummaryComponent } from './components/summary/summary.component';
import { AccountStatementComponent } from './components/account-statement/account-statement.component';
import { CurrentBetsComponent } from './components/current-bets/current-bets.component';
import { BetHistoryComponent } from './components/bet-history/bet-history.component';
import { ProfitLossComponent } from './components/profit-loss/profit-loss.component';
import { ActivityLogComponent } from './components/activity-log/activity-log.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './services/login.service';
import { MainService } from './services/main.service';
import { TokenInterceptor } from './services/token-interceptor';
import { TokenService } from './services/token.service';
import { ToastMessageService } from './services/toast-message.service';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ReportService } from './services/report.service';
import { ShareDataService } from './services/share-data.service';
import { DataFormatsService } from './services/data-formats.service';
import { ClientApiService } from './services/client-api.service';


import { SearchWrapComponent } from './components/header/search-wrap/search-wrap.component';
import { SettingPopComponent } from './components/header/setting-pop/setting-pop.component';
import { DirectivesModule } from './directives/directives.module';
import { CasinoBethistoryComponent } from './components/casino-bethistory/casino-bethistory.component';
import { CasinoProfitlossComponent } from './components/casino-profitloss/casino-profitloss.component';
import { CasinoproductComponent } from './components/casinoproduct/casinoproduct.component';
import { SncasinoBethistoryComponent } from './components/sncasinoreports/sncasino-bethistory/sncasino-bethistory.component';
import { SncasinoProfitlossComponent } from './components/sncasinoreports/sncasino-profitloss/sncasino-profitloss.component';
import { SlotBethistoryComponent } from './components/slot-bethistory/slot-bethistory.component';
import { SlotProfitlossComponent } from './components/slot-profitloss/slot-profitloss.component';
import { PokerBethistoryComponent } from './components/poker-bethistory/poker-bethistory.component';
import { BetgamesBethistoryComponent } from './components/betgames-bethistory/betgames-bethistory.component';
import { BetgamesProfitlossComponent } from './components/betgames-profitloss/betgames-profitloss.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchWrapComponent,
    SettingPopComponent,
    MainWrapComponent,
    ColLeftComponent,
    ColCenterComponent,
    MyAccountComponent,
    SummaryComponent,
    AccountStatementComponent,
    CurrentBetsComponent,
    BetHistoryComponent,
    ProfitLossComponent,
    ActivityLogComponent,
    ChangePasswordComponent,
    CasinoBethistoryComponent,
    CasinoProfitlossComponent,
    CasinoproductComponent,
    SncasinoBethistoryComponent,
    SncasinoProfitlossComponent,
    SlotBethistoryComponent,
    SlotProfitlossComponent,
    PokerBethistoryComponent,
    BetgamesBethistoryComponent,
    BetgamesProfitlossComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    CookieService,
    LoginService,
    TokenService,
    MainService,
    ReportService,
    ToastMessageService,
    ShareDataService,
    ClientApiService,
    DataFormatsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
