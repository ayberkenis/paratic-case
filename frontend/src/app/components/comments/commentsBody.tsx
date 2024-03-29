// 'use server';
import SingleComment from "./singleComment";
import type Comment from "@/types/comment";


export function AllComments({ comments }: { comments: Comment[] }) {
    return (
        <div className="comments-body">
            {comments.map((comment: Comment) => (
                <SingleComment key={comment.id} author_username={comment.author_username} author_avatar={comment.author_avatar} content={comment.content} commented_at={comment.commented_at} />
            ))}
        </div>
    );
}

export function FeaturedComments({ comments }: { comments: Comment[] }) {
    return (
        <div className="comments-body">
            {comments.map((comment: Comment) => (
                <SingleComment key={comment.id} author_username={comment.author_username} author_avatar={comment.author_avatar} content={comment.content} commented_at={comment.commented_at} />
            ))}
        </div>
    );
}


