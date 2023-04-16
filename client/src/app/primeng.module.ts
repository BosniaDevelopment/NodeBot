import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MenubarModule } from "primeng/menubar";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputNumberModule } from "primeng/inputnumber";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { DialogModule } from "primeng/dialog";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DropdownModule } from "primeng/dropdown";
import { RadioButtonModule } from "primeng/radiobutton";
import { RatingModule } from "primeng/rating";
import { ToolbarModule } from "primeng/toolbar";
import { AvatarModule } from "primeng/avatar";
import { CardModule } from "primeng/card";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { DividerModule } from "primeng/divider";
import { ConfirmationService } from "primeng/api";

const modules = [
	TableModule,
	InputTextModule,
	DialogModule,
	ToolbarModule,
	ConfirmDialogModule,
	RatingModule,
	InputNumberModule,
	InputTextareaModule,
	RadioButtonModule,
	DropdownModule,
	ButtonModule,
	MenubarModule,
	AvatarModule,
	CardModule,
	OverlayPanelModule,
	DividerModule,
];

@NgModule({
	imports: [BrowserModule, BrowserAnimationsModule, ...modules],
	providers: [ConfirmationService],
	exports: [...modules],
})
export class PrimeNGModule {}
