import React from 'react';

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const DateComponent = ({ date }) => {
    return <span>{formatDate(date)}</span>;
};

const timeAgo = (time) => {
    const now = new Date();
    const postDate = new Date(time);
    const diff = now.getTime() - postDate.getTime();
  
    const seconds = Math.floor(diff/1000);
    if (seconds < 60) return `${seconds} seconds ago`;
    
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
  
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
  
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days} days ago`;
  
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} months ago`;
  
    const years = Math.floor(days / 365);
    return `${years} years ago`;
  };
  
  // Example usage
//   console.log(timeAgo("2024-02-01T12:00:00Z")); // Example timestamp
  
const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}; 


const formatInterviewTime = (dateStr) => {
    const date = new Date(dateStr);

    return date.toLocaleString("en-US", {
    //   weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }; 

  function openBase64PDF(base64String) {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Uint8Array(byteCharacters.length);
    
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
  
    const blob = new Blob([byteNumbers], { type: "application/pdf" });
    const blobURL = URL.createObjectURL(blob);
  
    window.open(blobURL, "_blank");
  }
  

export { formatDate, DateComponent , timeAgo,getBase64, formatInterviewTime , openBase64PDF};
