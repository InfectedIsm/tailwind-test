export interface tweetPost {
  created_at: string,
  value: number,
  text: string,
   user: {
       name: string,
       screen_name: string,
       profile_image_url: string
   },
   retweet_count: {
   },
   favorite_count: {
   },
   entities: {
       media_url:string
   }
 }