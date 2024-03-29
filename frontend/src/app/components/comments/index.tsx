
import '@/assets/css/comments.component.css';
import SegmentedComments from './segmentedComments';
import AddComment from './addComment';
import Tooltip from '../exchangeRatePreview/tooltip';



export default async function Comments({ exchange_code }: { exchange_code: string }) {

    return (
        <div className="comments">
            <div className="comments-header">
                <span className="comments-header-title">Yorumlar</span>
                <Tooltip text="Yorumlarınızı paylaşarak diğer kullanıcılarla fikir alışverişi yapabilirsiniz." position='left' />
            </div>
            <SegmentedComments exchange_code={exchange_code} />

            <AddComment exchange_code={exchange_code} />
        </div>
    )
}