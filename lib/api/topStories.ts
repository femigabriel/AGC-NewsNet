import { useQuery } from "@tanstack/react-query";
import { TopStoriesResponse } from "@/types/topStories";

const fetchTopStories = async (): Promise<TopStoriesResponse> => {
  const response = await fetch("https://api.agcnewsnet.com/api/general/top-stories");
  if (!response.ok) {
    throw new Error("Failed to fetch top stories");
  }
  return response.json();
};

export const useTopStories = () => {
  return useQuery({
    queryKey: ["topStories"],
    queryFn: fetchTopStories,
  });
};