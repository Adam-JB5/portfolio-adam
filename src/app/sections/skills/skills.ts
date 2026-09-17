import { Component, signal, AfterViewInit } from '@angular/core';
import { skillsData } from '../../core/data/skills.data';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  imports: [],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})

export class Skills implements AfterViewInit {
  skills = signal(skillsData);
  
  ngAfterViewInit(): void {
    new Swiper('.swiperSkills', {
      modules: [Navigation, Pagination],
      slidesPerView: window.innerWidth < 768 ? 1 : 2,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
