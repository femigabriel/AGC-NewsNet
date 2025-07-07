// components/landing-page/TopStoriesSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTopStories } from "@/lib/api/topStories";
import { Story } from "@/types/topStories";

export default function TopStoriesSection() {
  const { data, isLoading, isError, error } = useTopStories();

  const stories = data?.data.data || [];

  const mainStory: Story = stories[0]?.story || {
    id: 0,
    title: "Loading...",
    category: {
      category_name: "Latest Today",
      category_id: 0,
      created_at: "",
      updated_at: "",
      total_stories: null,
    },
    banner_image: "/images/Rectangle 39 (1).svg",
  };
  const secondStory: Story = stories[1]?.story || {
    id: 0,
    title: "Loading...",
    category: {
      category_name: "Loading",
      category_id: 0,
      created_at: "",
      updated_at: "",
      total_stories: null,
    },
    banner_image: "/images/Rectangle 39.svg",
  };
  const thirdStory: Story = stories[2]?.story || {
    id: 0,
    title: "Loading...",
    category: {
      category_name: "Loading",
      category_id: 0,
      created_at: "",
      updated_at: "",
      total_stories: null,
    },
    banner_image: "/images/Rectangle 39.svg",
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-4 pl-4 border-l-4 border-[#813D97]">
        TOP STORIES
      </h2>

      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-pulse">
          <div className="md:col-span-2">
            <div className="relative rounded overflow-hidden h-[400px] md:h-[480px]">
              <div className="w-full h-full bg-gray-300" />
              <div className="absolute bottom-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-4">
                <div className="h-4 bg-gray-400 rounded w-1/4 mb-1" />
                <div className="h-6 bg-gray-400 rounded w-3/4" />
              </div>
            </div>
          </div>
          <div className="md:col-span-1 flex flex-col gap-4 h-[400px] md:h-[480px]">
            <div className="grid grid-cols-2 gap-4 h-1/2">
              <div className="rounded overflow-hidden bg-gray-300 h-full" />
              <div className="rounded overflow-hidden bg-gray-300 h-full" />
            </div>
            <div className="rounded overflow-hidden bg-gray-300 h-1/2" />
          </div>
        </div>
      )}

      {isError && (
        <div className="text-center text-red-600">
          Error loading top stories:{" "}
          {error instanceof Error ? error.message : "Unknown error"}
        </div>
      )}

      {!isLoading && !isError && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <Link href={`/stories/${mainStory.id}`} className="block">
              <div className="relative rounded overflow-hidden h-[400px] md:h-[480px]">
                <Image
                  src={mainStory.banner_image || "/images/Rectangle 39 (1).svg"}
                  alt={mainStory.title}
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-4">
                  <p className="text-sm font-bold text-[#F85FD0] uppercase mb-1">
                    {/* {mainStory.category.category_name} */}
                    LATEST TODAY
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold leading-tight line-clamp-2">
                    {mainStory.title}
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          <div className="md:col-span-1 flex flex-col gap-4 h-[400px] md:h-[480px]">
            <div className="grid grid-cols-2 gap-4 h-1/2">
              <Link href={`/stories/${secondStory.id}`} className="block">
                <div className="rounded overflow-hidden shadow-md h-full flex flex-col">
                  <Image
                    src={secondStory.banner_image || "/images/Rectangle 39.svg"}
                    alt={secondStory.title}
                    width={400}
                    height={250}
                    className="w-full h-24 object-cover md:h-40"
                  />
                  <div className="p-2 flex-1 flex flex-col justify-between">
                    <p className="text-xs font-bold text-[#F85FD0] mb-1">
                      {/* {secondStory.category.category_name} */}
                      NEWS TODAY
                    </p>
                    <p className="text-xs font-medium line-clamp-3">
                      {secondStory.title}
                    </p>
                  </div>
                </div>
              </Link>
              <Link href={`/stories/${secondStory.id}`} className="block">
                <div className="rounded overflow-hidden shadow-md h-full flex flex-col">
                  <Image
                    src={secondStory.banner_image || "/images/Rectangle 39.svg"}
                    alt={secondStory.title}
                    width={400}
                    height={250}
                    className="w-full h-24 object-cover md:h-40"
                  />
                  <div className="p-2 flex-1 flex flex-col justify-between">
                    <p className="text-xs font-bold text-[#F85FD0] uppercase mb-1">
                      {/* {secondStory.category.category_name} */}
                      NEWS TODAY
                    </p>
                    <p className="text-xs font-medium line-clamp-3">
                      {secondStory.title}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <Link href={`/stories/${thirdStory.id}`} className="block h-1/2">
              <div className="rounded overflow-hidden shadow-md h-full flex flex-col">
                <Image
                  src={thirdStory.banner_image || "/images/Rectangle 39.svg"}
                  alt={thirdStory.title}
                  width={400}
                  height={250}
                  className="w-full h-24 object-cover md:h-40"
                />
                <div className="p-2 flex-1 flex flex-col justify-between">
                <p className="text-xs font-bold text-[#F85FD0] uppercase mb-1">
                      NEWS TODAY
                    </p>
                  <p className="text-xs font-medium line-clamp-3">
                    {thirdStory.title}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
