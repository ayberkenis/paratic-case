'use client';

import { useEffect, useState } from "react";
import { AllComments, FeaturedComments } from "./commentsBody";
import { fetchAllComments, fetchFeaturedComments } from "@/app/actions/commentActions";
import { useComment } from "@/app/context/commentContext";



export default function SegmentedComments({ exchange_code }: { exchange_code: string }) {
    const [segment, setSegment] = useState<"featured" | "all">('featured');

    const commentsCtx = useComment()
    const comments = commentsCtx.comments;
    const featuredComments = commentsCtx.featuredComments;

    useEffect(() => {
        fetchFeaturedComments(exchange_code).then((data) => commentsCtx.setFeaturedComments(data))
        fetchAllComments(exchange_code).then((data) => commentsCtx.setComments(data))

    }, [])

    return (
        <>
            <div className='comments-segment-buttons flex flex-row gap-[20px]'>
                <span onClick={() => setSegment('featured')} className={`action-button secondary-button ${segment === 'featured' ? 'active' : ''}`}>Başlıca Yorumlar</span>
                <span onClick={() => setSegment('all')} className={`action-button secondary-button ${segment === 'all' ? 'active' : ''}`}>Tüm Yorumlar</span>
            </div>

            {
                segment === 'featured' ? <FeaturedComments comments={featuredComments} /> : <AllComments comments={comments} />

            }
        </>
    )

}