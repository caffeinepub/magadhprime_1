import { useEffect } from 'react';

interface PageMetaOptions {
  title: string;
  description?: string;
}

/**
 * Hook to set page title and meta description
 */
export function usePageMeta({ title, description }: PageMetaOptions) {
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Set or update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);
}
