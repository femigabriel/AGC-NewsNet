"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLatestStories } from "@/lib/api/latestStories";
import { Story } from "@/types/topStories";

export default function LatestNewsSection() {
  const { data, isLoading, isError, error } = useLatestStories();

  const stories = data?.data.data || [];

  const fallbackStory: Story = {
    id: 0,
    title: "Loading...",
    subtitle: "Loading...",
    description: "Loading...",
    status: "published",
    type: "article",
    author: "Unknown",
    content: "",
    featured: "false",
    views: 0,
    editors_pick: null,
    top_story: null,
    category: {
      category_name: "Loading",
      category_id: 0,
      created_at: "",
      updated_at: "",
      total_stories: null,
    },
    banner_image: "/images/Rectangle 39.svg",
    created_at: "",
    updated_at: "",
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-4 pl-4 border-l-4 border-[#813D97]">
        LATEST NEWS
      </h2>

      {/* Loading State */}
      {isLoading && (
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory hide-scrollbar">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-64 rounded overflow-hidden animate-pulse snap-start"
            >
              <div className="relative w-full h-full bg-gray-300">
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-800 to-transparent p-4">
                  <div className="h-4 bg-gray-400 rounded w-1/4 mb-2" />
                  <div className="h-6 bg-gray-400 rounded w-3/4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isError && (
        <div className="text-center text-red-600">
          Error loading latest stories:{" "}
          {error instanceof Error ? error.message : "Unknown error"}
        </div>
      )}

      {!isLoading && !isError && (
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory hide-scrollbar">
          {stories.length > 0
            ? stories.map((story) => (
                <Link
                  key={story.id}
                  href={`/stories/${story.id}`}
                  className="flex-shrink-0 w-64 h-64 rounded overflow-hidden snap-start"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={story.banner_image || "/images/Rectangle 39.svg"}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-800 to-transparent p-4">
                      <p className="text-xs text-white uppercase mb-2">
                        {story.category.category_name}
                      </p>
                      <h3 className="text-sm font-medium text-white line-clamp-3">
                        {story.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))
            : Array(6)
                .fill(fallbackStory)
                .map((story, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-64 h-64 rounded overflow-hidden snap-start"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={story.banner_image}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-800 to-transparent p-4">
                        <p className="text-xs text-white uppercase mb-2">
                          {story.category.category_name}
                        </p>
                        <h3 className="text-sm font-medium text-white line-clamp-3">
                          {story.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
        </div>
      )}
    </section>
  );
}
