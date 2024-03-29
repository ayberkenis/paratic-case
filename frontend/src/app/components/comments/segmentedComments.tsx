'use client';

import { useEffect, useState } from "react";
import { AllComments, Comment, FeaturedComments } from "./commentsBody";
import { fetchAllComments, fetchFeaturedComments } from "@/app/actions/commentActions";


export default function SegmentedComments({ exchange_code }: { exchange_code: string }) {
    const [segment, setSegment] = useState<"featured" | "all">('featured');

    const [featuredComments, setFeaturedComments] = useState<Comment[]>([])
    const [comments, setComments] = useState<Comment[]>([])

    useEffect(() => {
        fetchFeaturedComments(exchange_code).then((data) => setFeaturedComments(data))
        fetchAllComments(exchange_code).then((data) => setComments(data))

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