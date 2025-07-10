import SidebarTourist from "../auth/components/sidebarTourist";

export default function TouristDashboard() {
  return (
    <div className="flex min-h-screen">
      <SidebarTourist />
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-4">Tableau de bord - Touriste</h1>
        <p>Vos réservations et circuits préférés.</p>
      </div>
    </div>
  );
}