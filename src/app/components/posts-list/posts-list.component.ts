import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostType } from '../../types';
import { PostCardComponent } from '../post-card/post-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [RouterModule, PostCardComponent, HttpClientModule],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css',
})
export class PostsListComponent {
  // posts: PostType[] = [];
  // constructor(private postService: PostService) {
  //   console.log('PostsListComponent constructor called');
  // }

  // ngOnInit(): void {
  //   this.postService.getAllPosts().subscribe((data) => {
  //     console.log(data);
  //   });
  // }
  posts: PostType[] = [
    {
      id: 1,
      title: 'Understanding JavaScript Closures',
      description:
        'A deep dive into the concept of closures in JavaScript, how they work, and where to use them.',
      tags: ['JavaScript', 'Closures', 'Programming'],
      thumbnailUrl: 'https://via.placeholder.com/150?text=JavaScript+Closures',
    },
    {
      id: 2,
      title: 'Getting Started with React',
      description:
        'An introductory guide to building user interfaces with React, a popular JavaScript library.',
      tags: ['React', 'JavaScript', 'Frontend'],
      thumbnailUrl: 'https://via.placeholder.com/150?text=React+Intro',
    },
    {
      id: 3,
      title: "Exploring Python's Flask Framework",
      description:
        'Learn how to create web applications with Flask, a lightweight and flexible Python framework.',
      tags: ['Python', 'Flask', 'Web Development'],
      thumbnailUrl: 'https://via.placeholder.com/150?text=Flask+Exploration',
    },
    {
      id: 4,
      title: 'Mastering CSS Grid Layout',
      description:
        'A comprehensive guide to using CSS Grid Layout for modern web design.',
      tags: ['CSS', 'Grid Layout', 'Web Design'],
      thumbnailUrl: 'https://via.placeholder.com/150?text=CSS+Grid',
    },
    {
      id: 5,
      title: 'Introduction to TypeScript',
      description:
        'An overview of TypeScript, a statically typed superset of JavaScript that enhances code quality and maintainability.',
      tags: ['TypeScript', 'JavaScript', 'Programming'],
      thumbnailUrl: 'https://via.placeholder.com/150?text=TypeScript+Intro',
    },
    {
      id: 6,
      title: 'Building APIs with Node.js and Express',
      description:
        'Step-by-step instructions on how to build RESTful APIs using Node.js and Express.',
      tags: ['Node.js', 'Express', 'API Development'],
      thumbnailUrl: 'https://via.placeholder.com/150?text=Node+Express',
    },
    {
      id: 7,
      title: 'An Introduction to Rust Programming Language',
      description:
        'Discover the key features of Rust, a systems programming language focused on safety and performance.',
      tags: ['Rust', 'Programming', 'Systems'],
      thumbnailUrl: 'https://via.placeholder.com/150?text=Rust+Intro',
    },
    {
      id: 8,
      title: 'Developing Mobile Apps with Flutter',
      description:
        "A beginner's guide to creating cross-platform mobile applications using Flutter and Dart.",
      tags: ['Flutter', 'Dart', 'Mobile Development'],
      thumbnailUrl: 'https://via.placeholder.com/150?text=Flutter+Apps',
    },
    {
      id: 9,
      title: 'Understanding Docker and Containerization',
      description:
        'Learn the basics of Docker and how containerization can improve your development workflow.',
      tags: ['Docker', 'DevOps', 'Containerization'],
      thumbnailUrl: 'https://via.placeholder.com/150?text=Docker+Basics',
    },
    {
      id: 10,
      title: 'Introduction to Machine Learning with Python',
      description:
        'An introductory guide to machine learning concepts and implementing simple models using Python.',
      tags: ['Machine Learning', 'Python', 'Data Science'],
      thumbnailUrl: 'https://via.placeholder.com/150?text=ML+Python',
    },
  ];
}
