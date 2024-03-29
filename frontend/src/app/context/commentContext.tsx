"use client";

import React, { createContext, useState } from "react";
import { fetchAllComments, fetchFeaturedComments } from "@/app/actions/commentActions";
import type Comment from "@/types/comment";

interface CommentContextType {
    comments: Comment[];
    featuredComments: Comment[];
    setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
    setFeaturedComments: React.Dispatch<React.SetStateAction<Comment[]>>;
    fetchAllComments: (exchange_code: string) => Promise<void>;
    fetchFeaturedComments: (exchange_code: string) => Promise<void>;
}

export const CommentContext = createContext<CommentContextType>({
    comments: [],
    featuredComments: [],
    setComments: () => { },
    setFeaturedComments: () => { },
    fetchAllComments: async (exchange_code: string) => {
        await fetchAllComments(exchange_code);
    },
    fetchFeaturedComments: async (exchange_code: string) => {
        await fetchFeaturedComments(exchange_code);
    }
});

export const useComment = () => React.useContext(CommentContext);

export default function CommentProvider({ children }: { children: React.ReactNode }) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [featuredComments, setFeaturedComments] = useState<Comment[]>([]);

    const handleFetchAllComments = async (exchange_code: string) => {
        try {
            const allComments = await fetchAllComments(exchange_code);
            setComments(allComments);
        } catch (error) {
            console.error("Error fetching all comments:", error);
        }
    };

    const handleFetchFeaturedComments = async (exchange_code: string) => {
        try {
            const featured = await fetchFeaturedComments(exchange_code);
            setFeaturedComments(featured);
        } catch (error) {
            console.error("Error fetching featured comments:", error);
        }
    };

    return (
        <CommentContext.Provider
            value={{
                comments,
                featuredComments,
                setComments,
                setFeaturedComments,
                fetchAllComments: handleFetchAllComments,
                fetchFeaturedComments: handleFetchFeaturedComments
            }}
        >
            {children}
        </CommentContext.Provider>
    );
}
