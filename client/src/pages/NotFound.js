import React from 'react';
import { useLocation } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';

function NotFound() {
  let location = useLocation();
  return (
    <PageLayout>
      <div className="card bg-white card-rounded w-50">
        <div className="card-header bg-dark text-center">
          <h1>
            No match for <code>{location.pathname}</code>
          </h1>
        </div>
      </div>
    </PageLayout>

  );
}

export default NotFound;
