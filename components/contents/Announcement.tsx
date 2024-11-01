"use client";

import AnnouncementCard from "../ui/AnnounceCard";
import StatusCard from "../ui/StatusCard";
import axios from 'axios';
import { useEffect, useState } from 'react';


interface Status {
  status: string;
  name: string;
}


export default function AnnouncementContent() {
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchStatuses = async () => {
    try {
      const response = await axios.get('https://be-cyber-academy.vercel.app/api/moduls/get');
      const modules = response.data.map((mod : any) => ({
        status: mod.status,
        name: mod.name,
      }));
      setStatuses(modules);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching statuses:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatuses();
  }, []);

  const announcements = [
    {
      title: "New Module Addition",
      date: "Monday, 1 November 2024",
      description: "New modules have been added for the material being worked on",
    },
  ];

  return (
    <div className="space-y-8 mb-10">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#BA2025] mb-2 lg:mb-4">
        Announcement
      </h2>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black mb-3">
      Stay updated with <span className="font-bold gradient-text"> Cyber Academy</span> announcements for essential news, upcoming events, and platform changes.
       Here, you'll find updates on courses, workshops, and exclusive resources.
       Be sure to check regularly so you won’t miss out on special opportunities!
      </p>

      {announcements.map((announcement, index) => (
        <AnnouncementCard
          key={index}
          title={announcement.title}
          date={announcement.date}
          description={announcement.description}
        />
      ))}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {loading ? (
          <p>Loading statuses...</p>
        ) : (
          statuses.map((status, index) => (
            <StatusCard key={index} status={status.status} label={status.name} />
          ))
        )}
      </div>
    </div>
  );
}
