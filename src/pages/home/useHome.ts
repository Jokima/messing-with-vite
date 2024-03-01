import { useQuery } from "@tanstack/react-query"
import { getPosts } from "../../services"

export type Post = {
  id: number,
  title: string,
  body: string,
}

export type Posts = Post[];

export const useHome = () => {

  const { data, isLoading, error } = useQuery<Posts>({
    queryKey: ['posts'],
    queryFn: getPosts,
    staleTime: 1000 * 60 * 10,
  });
  
  return {
    data,
    isLoading,
    error,
  }
}