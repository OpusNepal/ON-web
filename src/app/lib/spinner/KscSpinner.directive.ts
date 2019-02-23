import {
  Directive,
  ElementRef,
  Renderer2,
  Inject,
  OnInit
} from "@angular/core";
import { DOCUMENT } from "@angular/common";

/* tslint:disable */
@Directive({
  selector: "[KscSpinner]",
  exportAs: "kscspinner"
})
/* tslint:enable */
export class KscSpinnerDirective implements OnInit {
  isSpinning = false;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, "kscspinner");
    this.renderer.addClass(this.el.nativeElement, "spinner-off");
    this.renderer.appendChild(this.el.nativeElement, this.craftSpinner());
  }

  private craftSpinner(): HTMLDivElement {
    const backdropDiv = this.document.createElement("div");
    backdropDiv.classList.add("ksc-backdrop");
    const spinner = this.document.createElement("div");
    spinner.classList.add(
      "ksc-spinner",
      "loading-spinner",
      "js-loading-spinner"
    );
    const kscSpinnerElm = this.document.createElement("div");
    kscSpinnerElm.appendChild(backdropDiv);
    kscSpinnerElm.appendChild(spinner);

    return kscSpinnerElm;
  }

  spin() {
    this.renderer.removeClass(this.el.nativeElement, "spinner-off");
    this.renderer.addClass(this.el.nativeElement, "spinner-on");
    this.isSpinning = true;
  }

  stop() {
    this.renderer.removeClass(this.el.nativeElement, "spinner-on");
    this.renderer.addClass(this.el.nativeElement, "spinner-off");
    this.isSpinning = false;
  }

  toggle() {
    this.isSpinning ? this.stop() : this.spin();
  }
}
