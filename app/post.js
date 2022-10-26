import { Router } from "express";
import { pool } from "../utils/db.js";

const postRouter = Router();

postRouter.get("/", async (req, res) => {
  const result = await pool.query(`select * from posts`);

  return res.json({
    data: result,
  });

});

postRouter.get("/postId", async (req, res) => {
    const result = await pool.query(`select * from posts`);
  
    return res.json({
      data: result,
    });
  
  });
  

postRouter.post("/", async (req, res) => {
    const hasPublished = req.body.status === "published";
    const newPost = {
      ...req.body,
      created_at: new Date(),
      updated_at: new Date(),
      published_at: hasPublished ? new Date() : null,
    };
  
    await pool.query(
      ` insert into post(post_id,user_profile_id ,title, comment_id,  category_id ,update_at ,created_at , post_vote_id , url)
    value ($1 , $2 , $3 ,$4 , $5 ,$6 , $7 , $8 , $9)`,
      [
        1,
        newPost.post_id,
        newPost.user_profile_id,
        newPost.title,
        newPost.comment_id,
        newPost.category_id,
        new Date(),
        new Date(),
        newPost.post_vote_id,
        newPost.url
      ]
    );
  
    return res.json({
      message: "Post has been created.",
    });
  });



export default postRouter;
