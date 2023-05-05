import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { primengModules } from '@/primeng-modules';
import { GlobalLoadingComponent } from './global-loading.component';
import { GlobalLoadingService } from './global-loading.service';

@NgModule({
	declarations: [GlobalLoadingComponent],
	imports: [CommonModule, ...primengModules],
	providers: [GlobalLoadingService],
	exports: [GlobalLoadingComponent]
})
export class GlobalLoadingModule {}
