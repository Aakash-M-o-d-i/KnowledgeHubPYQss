
import React, { useEffect, useRef } from "react";
import { useStatistics, formatStatNumber, useCountUp } from "@/utils/statisticsService";
import { GraduationCap, BookText, Building2, Download } from "lucide-react";

type StatItemProps = {
  value: number;
  formattedValue: string;
  label: string;
  isLoading: boolean;
  icon: React.ReactNode;
  isVisible: boolean;
};

const StatItem: React.FC<StatItemProps> = ({ 
  value, 
  formattedValue, 
  label, 
  isLoading, 
  icon,
  isVisible 
}) => {
  const animatedCount = useCountUp(isVisible ? value : 0);
  const displayValue = isVisible ? formatStatNumber(animatedCount) : '0+';
  
  return (
    <div className="text-center flex flex-col items-center">
      <div className="text-brand-600 mb-3">
        {icon}
      </div>
      <div className="text-3xl font-bold text-brand-700 mb-2">
        {isLoading ? (
          <div className="h-8 w-24 bg-gray-200 animate-pulse rounded mx-auto"></div>
        ) : (
          displayValue
        )}
      </div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const StatisticsSection: React.FC = () => {
  const { data, isLoading } = useStatistics();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once animation has triggered, disconnect the observer
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="py-12 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <StatItem 
            value={data ? data.papersCount : 0} 
            formattedValue={data ? formatStatNumber(data.papersCount) : "0+"} 
            label="Question Papers"
            isLoading={isLoading}
            isVisible={isVisible}
            // add logo in top of the page
            icon={<img src="/logo-uploads/c0c247c7-8340-4e0c-9690-799ad85d5329.png" alt="Logo" className="h-6 w-6" />}
          />
          <StatItem 
            value={data ? data.universitiesCount : 0} 
            formattedValue={data ? formatStatNumber(data.universitiesCount) : "0+"} 
            label="University" 
            isLoading={isLoading}
            isVisible={isVisible}
            icon={<Building2 className="h-6 w-6" />}
          />
          <StatItem 
            value={data ? data.subjectsCount : 0} 
            formattedValue={data ? formatStatNumber(data.subjectsCount) : "0+"} 
            label="Subjects" 
            isLoading={isLoading}
            isVisible={isVisible}
            icon={<BookText className="h-6 w-6" />}
          />
          <StatItem 
            value={data ? data.batchesCount : 0} 
            formattedValue={data ? formatStatNumber(data.batchesCount) : "0+"} 
            label="Batches" 
            isLoading={isLoading}
            isVisible={isVisible}
            icon={<GraduationCap className="h-6 w-6" />}
          />
          <StatItem 
            value={data ? data.downloadsCount : 0} 
            formattedValue={data ? formatStatNumber(data.downloadsCount) : "0+"} 
            label="Downloads" 
            isLoading={isLoading}
            isVisible={isVisible}
            icon={<Download className="h-6 w-6" />}
          />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
