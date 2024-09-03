import {Route} from '@angular/router';
import {PriceTablesComponent} from "./price-tables.component";
import {PriceTablesCreateComponent} from "./create/price-tables-create.component";
import {PriceTablesUpdateComponent} from "./update/price-tables-update.component";

export default [
  {path: '', component: PriceTablesComponent},
  {path: 'new', component: PriceTablesCreateComponent},
  {path: 'update', component: PriceTablesUpdateComponent},

] satisfies Route[]
