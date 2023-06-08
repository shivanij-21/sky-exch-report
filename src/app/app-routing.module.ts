import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountStatementComponent } from './components/account-statement/account-statement.component';
import { ActivityLogComponent } from './components/activity-log/activity-log.component';
import { BetHistoryComponent } from './components/bet-history/bet-history.component';
import { CurrentBetsComponent } from './components/current-bets/current-bets.component';
import { MainWrapComponent } from './components/main-wrap/main-wrap.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { ProfitLossComponent } from './components/profit-loss/profit-loss.component';
import { CasinoProfitlossComponent } from './components/casino-profitloss/casino-profitloss.component';
import { CasinoBethistoryComponent } from './components/casino-bethistory/casino-bethistory.component';
import { CasinoproductComponent } from './components/casinoproduct/casinoproduct.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SncasinoBethistoryComponent } from './components/sncasinoreports/sncasino-bethistory/sncasino-bethistory.component';
import { SncasinoProfitlossComponent } from './components/sncasinoreports/sncasino-profitloss/sncasino-profitloss.component';
import { SlotBethistoryComponent } from './components/slot-bethistory/slot-bethistory.component';
import { SlotProfitlossComponent } from './components/slot-profitloss/slot-profitloss.component';
import { PokerBethistoryComponent } from './components/poker-bethistory/poker-bethistory.component';
import { BetgamesBethistoryComponent } from './components/betgames-bethistory/betgames-bethistory.component';
import { BetgamesProfitlossComponent } from './components/betgames-profitloss/betgames-profitloss.component';
const routes: Routes = [
  {
    path: '',
    component: MainWrapComponent,
    children: [
      { path: '', component: MyAccountComponent },
      { path: 'detail', component: MyAccountComponent },
      { path: 'summary', component: SummaryComponent },
      { path: 'account_statement', component: AccountStatementComponent },
      { path: 'current_bets', component: CurrentBetsComponent },
      { path: 'bet_history', component: BetHistoryComponent },
      { path: 'profit_loss', component: ProfitLossComponent },
      { path: 'activity_log', component: ActivityLogComponent },
      { path: 'casino_profit_loss', component: CasinoProfitlossComponent },
      { path: 'slot_profit_loss', component: SlotProfitlossComponent },
      { path: 'casino_bet_history', component: CasinoBethistoryComponent },
      { path: 'slot_bet_history', component: SlotBethistoryComponent },
      { path: 'casino_product', component: CasinoproductComponent },
      { path: 'sncasino_bets_history', component: SncasinoBethistoryComponent },
      { path: 'sncasino_profit_loss', component: SncasinoProfitlossComponent },
      { path: 'poker_bets_history', component: PokerBethistoryComponent },
      { path: 'betgames_profit_loss', component: BetgamesProfitlossComponent },
      { path: 'betgames_bet_history', component: BetgamesBethistoryComponent },


    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
