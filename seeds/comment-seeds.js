const Comment = require("../models/Comment");

const commentData = [
  {
    id: 1,
    content: `Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.`,
    user_id: 2,
    post_id: 2,
  },
  {
    id: 2,
    content: `Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.`,
    user_id: 3,
    post_id: 5,
  },
  {
    id: 3,
    content: `Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.`,
    user_id: 5,
    post_id: 10,
  },
  {
    id: 4,
    content: `Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.`,
    user_id: 1,
    post_id: 2,
  },
  {
    id: 5,
    content: `Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.`,
    user_id: 4,
    post_id: 1,
  },
  {
    id: 6,
    content: `Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.`,
    user_id: 3,
    post_id: 8,
  },
  {
    id: 7,
    content: `Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.`,
    user_id: 4,
    post_id: 8,
  },
  {
    id: 8,
    content: `Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.`,
    user_id: 3,
    post_id: 2,
  },
  {
    id: 9,
    content: `Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.`,
    user_id: 1,
    post_id: 10,
  },
  {
    id: 10,
    content: `Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.`,
    user_id: 2,
    post_id: 4,
  },
  {
    id: 11,
    content: `Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.`,
    user_id: 5,
    post_id: 7,
  },
  {
    id: 12,
    content: `Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.`,
    user_id: 3,
    post_id: 2,
  },
  {
    id: 13,
    content: `Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.`,
    user_id: 3,
    post_id: 2,
  },
  {
    id: 14,
    content: `Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.`,
    user_id: 1,
    post_id: 2,
  },
  {
    id: 15,
    content: `Aute pariatur ex sint cillum proident nulla deserunt labore officia excepteur cillum. Cillum nulla in commodo id Lorem voluptate. Elit sit laboris id et. Cupidatat amet nisi duis mollit duis magna laborum ipsum qui aliquip in. Exercitation culpa pariatur dolore mollit occaecat minim consequat minim nulla. Labore duis mollit voluptate eiusmod quis qui.`,
    user_id: 5,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
