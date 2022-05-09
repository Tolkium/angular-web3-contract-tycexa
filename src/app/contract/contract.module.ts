import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContractService } from "./contract.service";

import { ConfigService } from "./config.service";
import { APP_CONFIG } from "./config";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: []
})
export class ContractModule {
  static forRoot(config: any): ModuleWithProviders {
    try {
      if (
        (config.contract.doc as any).abi &&
        (config.contract.doc as any).bytecode
      ) {
        return {
          ngModule: ContractModule,
          providers: [
            { provide: APP_CONFIG, useValue: config },
            { provide: ContractService, useClass: ContractService },
            { provide: ConfigService, useClass: ConfigService }
          ]
        };
      }
            throw new Error("Configuration Invalid");

    } catch (e) {
      throw new Error("Configuration Invalid");
    }
  }
}
