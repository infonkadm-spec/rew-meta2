import { CommentsData } from '../libs/CommentsData';
import React from 'react';
import Image from 'next/image';

export default function CommentsV2() {
  return (
    <div className="flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Header - Comment count */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-medium text-gray-900">
            <span>{CommentsData.length}</span>
            <span className="ml-1">comments</span>
          </h2>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 px-2 py-1 rounded hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="currentColor">
                <path d="M21 5H3a1 1 0 000 2h18a1 1 0 100-2Zm-6 6H3a1 1 0 000 2h12a1 1 0 000-2Zm-6 6H3a1 1 0 000 2h6a1 1 0 000-2Z"></path>
              </svg>
              <span>Sort by</span>
            </button>
          </div>
        </div>
      </div>

      {/* Comment input box */}
     {/* <div className="px-4 py-3 border-t border-gray-200">
        <div className="flex items-start gap-3">
          <Image
            src="/logos/logochannel.png"
            alt="Avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex-1">
            <div className="border-b border-gray-300 pb-2 min-h-[24px]">
              <div className="text-sm text-gray-500 cursor-text">Add a comment…</div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Comments list */}
      <div className="flex flex-col">
        {CommentsData.map((comment, index) => (
          <div key={index} className="px-4 py-3 border-t border-gray-200">
            <div className="flex items-start gap-3">
              {/* Author avatar */}
              <button className="flex-shrink-0" aria-label={comment.name}>
                <Image
                  src={comment.avatar}
                  alt={comment.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </button>

              {/* Comment content */}
              <div className="flex-1 min-w-0">
                {/* Comment header */}
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href="#" className="hover:underline">
                      {comment.name}
                    </a>
                  </h3>
                  <span className="text-xs text-gray-500">
                    <a href="#" className="hover:underline">
                      {comment.time}
                    </a>
                  </span>
                </div>

                {/* Comment text */}
                <div className="text-sm text-gray-900 whitespace-pre-wrap mb-2 leading-relaxed">
                  {comment.content}
                </div>

                {/* Engagement bar */}
                {/* <div className="flex items-center gap-1 text-gray-600">
                  <button className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-gray-100 hover:text-gray-900 transition-colors" aria-label="Like">
                    <ThumbsUp size={16} className="text-current" />
                    <span className="text-xs">0</span>
                  </button>
                  <button className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-gray-100 hover:text-gray-900 transition-colors" aria-label="Dislike">
                    <ThumbsDown size={16} className="text-current" />
                  </button>
                  <button className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-gray-100 hover:text-gray-900 transition-colors text-xs" aria-label="Reply">
                    <MessageCircle size={16} className="text-current" />
                    <span>Reply</span>
                  </button>
                  <button className="ml-auto px-2 py-1 rounded hover:bg-gray-100 hover:text-gray-900 transition-colors" aria-label="Action menu">
                    <MoreHorizontal size={16} className="text-current" />
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};  