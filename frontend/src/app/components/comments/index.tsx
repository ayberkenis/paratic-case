import '@/assets/css/comments.component.css';
import Image from 'next/image';
import helpTooltip from '@/assets/img/helpTooltip.svg';

export default function Comments() {
    return (
        <div className="comments">
            <div className="comments-header">
                <span className="comments-header-title">Yorumlar</span>
                <span className="tooltip">
                    <Image src={helpTooltip} alt="info" width={24} height={24} />
                </span>
            </div>
            <div className='comments-segment-buttons flex flex-row gap-[20px]'>
                <span className='action-button secondary-button active'>Başlıca Yorumlar</span>
                <span className='action-button secondary-button'>Tüm Yorumlar</span>
            </div>
            <div className="featured-comments">

            </div>
            <div className="all-comments">

            </div>
            <div className="comment-form">

            </div>
        </div>
    )
}