
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

// This would normally fetch from an API, but for demo purposes, we'll use dummy data
// that simulates what would come from a backend
const fetchStatistics = async (): Promise<{
  papersCount: number;
  universitiesCount: number;
  subjectsCount: number;
  batchesCount: number;
  downloadsCount: number;
}> => {
  // In a real implementation, this would be a fetch call to your backend API
  // return await fetch('/api/statistics').then(res => res.json());
  
  // For demo purposes, we'll return simulated data
  // In a real application, these values would come from your database
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        papersCount: 35,
        universitiesCount: 1,
        subjectsCount: 23,
        batchesCount: 2,
        downloadsCount: 44
      });
    }, 500); // Simulate network delay
  });
};

export const useStatistics = () => {
  return useQuery({
    queryKey: ['statistics'],
    queryFn: fetchStatistics,
    // Update every 5 minutes
    staleTime: 5 * 60 * 1000,
    // Data will never be considered fresh, always refetch on mount
    refetchOnMount: true,
    // Return last known data while refetching
    placeholderData: {
      papersCount: 35,
      universitiesCount: 1,
      subjectsCount: 5,
      batchesCount: 2,
      downloadsCount: 44
    }
  });
};

// Helper function to format numbers (e.g. 1200 -> 1.2K)
export const formatStatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M+`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K+`;
  }
  return `${num}+`;
};

// This hook creates an animated counter
export const useCountUp = (endValue: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (endValue === 0) return;
    
    // If the end value is very small, don't animate
    if (endValue < 10) {
      setCount(endValue);
      return;
    }
    
    let startTime: number | null = null;
    const startValue = 0;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * (endValue - startValue) + startValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };
    
    window.requestAnimationFrame(step);
    
    return () => {
      startTime = null;
    };
  }, [endValue, duration]);
  
  return count;
};
