import Image from "next/image";
import defaultAvatar from '@/assets/img/defaultAvatar.png';
import formatTimeLocale from "@/utils/timeFormatter";

interface SingleCommentProps {
    author_username: string;
    author_avatar: string;
    content: string;
    commented_at: string;
}

export default function SingleComment({ author_avatar, author_username, content, commented_at }: SingleCommentProps) {
    return (
        <div className='comment'>
            <div className="comment-meta">
                <div className="comment-avatar">
                    <Image src={author_avatar || defaultAvatar} alt={author_username} width={40} height={40} />
                </div>
                <div className="comment-author">
                    {author_username}
                </div>
                <div className="comment-date">
                    {formatTimeLocale(commented_at)}
                </div>
            </div>

            <div className='comment-content'>
                <div className='comment-body'>
                    {content}
                </div>
            </div>
        </div>
    )
}