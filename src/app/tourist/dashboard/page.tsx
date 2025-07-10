"use client";

import SidebarTourist from '../../auth/components/sidebarTourist';

export default function TouristDashboard() {
  return (
    <div className="dashboard-container">
      <SidebarTourist />
      <div className="main-content">
        <h1>Welcome to Your Dashboard</h1>
        <div className="dashboard-grid">
          <div className="card">Upcoming Reservations</div>
          <div className="card">Recent Reviews</div>
          <div className="card">Notifications</div>
        </div>
      </div>
      <style jsx>{`
        .dashboard-container {
          display: flex;
          height: 100vh;
        }
        .main-content {
          flex: 1;
          padding: 20px;
          background: #f9f9f9;
          margin-left: 250px;
        }
        h1 {
          font-size: 24px;
          margin-bottom: 20px;
        }
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }
        .card {
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
      `}</style>
    </div>
  );
}