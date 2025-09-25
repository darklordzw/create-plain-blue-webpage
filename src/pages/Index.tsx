
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-foreground">
          Green Page
        </h1>
        <p className="text-xl text-muted-foreground max-w-md">
          A simple, clean green webpage with beautiful design system colors.
        </p>
        <div className="flex gap-4 justify-center">
          <div className="w-16 h-16 bg-primary rounded-lg"></div>
          <div className="w-16 h-16 bg-accent rounded-lg"></div>
          <div className="w-16 h-16 bg-secondary rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
