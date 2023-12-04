import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var $: any; // Declare $ as any to avoid TypeScript errors

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

  ngOnInit() {
    $(document).ready(() => {
      $(".contenedor-formularios").find("input, textarea").on("keyup blur focus", (e: Event) => {
        var $this = $(e.currentTarget),
          label = $this.prev("label");

        if (e.type === "keyup") {
          if ($this.val() === "") {
            label.removeClass("active highlight");
          } else {
            label.addClass("active highlight");
          }
        } else if (e.type === "blur") {
          if ($this.val() === "") {
            label.removeClass("active highlight");
          } else {
            label.removeClass("highlight");
          }
        } else if (e.type === "focus") {
          if ($this.val() === "") {
            label.removeClass("highlight");
          } else {
            label.addClass("highlight");
          }
        }
      });

      $(".tab a").on("click", (e: Event) => {
        e.preventDefault();

        $(e.currentTarget).parent().addClass("active");
        $(e.currentTarget).parent().siblings().removeClass("active");

        let target = $(e.currentTarget).attr("href");

        $(".contenido-tab > div").not(target).hide();
        $(target).fadeIn(600);
      });
    });
  }
}
