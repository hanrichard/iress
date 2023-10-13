import { rest } from 'msw';

export const moviesHandler = [
 rest.get('https://77xmk0xq36.execute-api.ap-southeast-2.amazonaws.com/dev/api/movies', (req, res, ctx) => {
  return res(
   ctx.json({
     movies: {
      populars: [
       { 
        "id": "ec34a58c-32dc-4988-86e6-0ed1b2f7bdb1",
        "name": "The Dark Knight (2008)",
        "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "rating": 9,
        "ratingBase": 10,
        "reviewsCount": 6258,
        "duration": 9120
       }
      ]
     }
   })
  )}
 )]  

 export const moviesHandlers = [...moviesHandler];