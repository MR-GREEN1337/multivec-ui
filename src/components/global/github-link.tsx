"use client"

import React, { useState, useEffect } from 'react';
import { Github, Star } from 'lucide-react';
import { Button } from '../ui/button';

const GitHubLink = ({ repo }: {repo: String}) => {
  const [starCount, setStarCount] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}`)
      .then(response => response.json())
      .then(data => setStarCount(data.stargazers_count))
      .catch(error => console.error('Error fetching GitHub stars:', error));
  }, [repo]);

  return (
    <a
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-sm font-medium transition-colors"
    >
        <Button className='bg-transparent' variant={"outline"}>
      <Github className="w-5 h-5" />
      <span>GitHub</span>
      {starCount !== null && (
        <div className="flex items-center bg-transparent rounded-full px-2 py-1">
          <Star className="w-4 h-4 text-yellow-500 mr-1 bg-transparent" />
          <span>{starCount}</span>
        </div>
      )}
        </Button>
    </a>
  );
};

export default GitHubLink;