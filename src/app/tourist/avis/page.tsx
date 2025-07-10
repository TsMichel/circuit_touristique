import SidebarTourist from "../../auth/components/sidebarTourist";
export default function TouristReservations() {
  return (
    <div className="flex min-h-screen">
      <SidebarTourist />
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-4">Vos réservations</h1>
        <p>Consultez et gérez vos réservations ici.</p>
      </div>
    </div>
  );
}