import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: false,
  templateUrl: './reviews.html',
  styleUrl: './reviews.css',
})
export class Reviews implements OnInit {
  reviews = [
    {
      author: 'გიორგი მაისურაძე',
      rating: 5,
      comment: 'საუკეთესო მომსახურება ქალაქში! ატმოსფერო და ბარბერების პროფესიონალიზმი უმაღლეს დონეზეა.',
      date: '2 დღის წინ'
    },
    {
      author: 'დავით კაპანაძე',
      rating: 5,
      comment: 'წვერის ფორმირება გავიკეთე და ძალიან კმაყოფილი ვარ. ნამდვილად პრემიუმ ხარისხია.',
      date: '1 კვირის წინ'
    },
    {
      author: 'ლუკა ბერიძე',
      rating: 5,
      comment: 'ჯავშნის პროცესი ძალზე მარტივია, ადგილზე მივედი და ოდნავი დაგვიანებაც კი არ ყოფილა. რეკომენდაცია ჩემგან!',
      date: '2 კვირის წინ'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
