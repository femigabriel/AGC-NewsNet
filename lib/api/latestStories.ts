import { useQuery } from "@tanstack/react-query";
import { LatestStoriesResponse } from "@/types/topStories";

const fetchLatestStories = async (): Promise<LatestStoriesResponse> => {
  const response = await fetch(
    "https://api.agcnewsnet.com/api/general/stories/latest-stories?page=1&per_page=7"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch latest stories");
  }
  return response.json();
};

export const useLatestStories = () => {
  return useQuery({
    queryKey: ["latestStories"],
    queryFn: fetchLatestStories,
  });
};
