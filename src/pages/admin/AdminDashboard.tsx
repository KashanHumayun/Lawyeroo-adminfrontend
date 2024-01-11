import { useState } from "react";
import Header from "../../components/Header";
import KashanImageURL from "../../../public/ch_kashan.jpg";
import DashboardSection from "../../components/Dasboard/DashboardSection";
import MyProfileSection from "../../components/Profile/MyProfileSection";
import ManageAdminsSection from "../../components/ManageAdmin/ManageAdmins";
import ManageLawyersSection from "../../components/ManageLawyers/ManageLawyers";
import ManageCasesSection from "../../components/ManageCases/ManageCases";
import ManageReportsSection from "../../components/ManageReports/ManageReportSection";
import ViewLogsSection from "../../components/ViewLogs";
import ManageClientsSection from "../../components/ManageClient/ManageClients";
import ManageAppointmentSection from "../../components/ManageAppoinment/ManageAppointments";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import EditProfileSection from "../../components/Profile/EditProfileSection";
import EditAdminSection from "../../components/ManageAdmin/EditAdminSection";
import EditLawyerSection from "../../components/ManageLawyers/EditLawyerSection";
import EditClientSection from "../../components/ManageClient/EditClientSection";
interface Admin {
  admin_id: number;
  first_name: string;
  last_name: string;
  password:string;
  email: string;
  ph_number: string;
  address: string;
  profile_picture: string;
  created_at: string;
  updated_at: string;
  account_type: string;
}
interface Lawyer {
  lawyer_id: number;
  first_name: string;
  last_name: string;
  email: string;
  fees:string;
  ph_number: string;
  address: string;
  password: string; // Note: It's unusual and unsafe to handle passwords in such a way
  specializations: string;
  years_of_experience: number;
  universities: string;
  rating: number;
  created_at: string;
  updated_at: string;
  profile_picture: string;
  verified: boolean;
  account_type: string;
}

interface Client {
  client_id: number;
  first_name: string;
  last_name: string;
  email: string;
  ph_number: string;
  address: string;
  password: string;
  created_at: string;
  updated_at: string;
  profile_picture: string;
  verified: boolean;
  account_type: string;
  preferences: string;
}


const AdminDashboard = () => {
  const [selectedItem, setSelectedItem] = useState("dashboard"); // Set 'dashboard' as default
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState<Admin | null>(null);
  const [currentLawyer, setCurrentLawyer] = useState<Lawyer | null>(null);
  const [currentClient, setCurrentClient] = useState<Client | null>(null);
  
  const mockAdmin = {
    profile_picture: "/ch_kashan.jpg", // Replace with a real image path
    first_name: "Kashan",
    last_name: "Humayun",
    account_type: "Administrator",
    email: "Kashan.humayun@gmail.com",
    ph_number: "+1234567890",
    address: "123 Main Street, Anytown, AN 12345",
    created_at: "2021-01-01",
    updated_at: "2021-06-01",
  };

  const handleEditProfile = () => {
    setIsEditingProfile(true); // Set the state to editing mode
  };

  const handleSaveProfile = () => {
    // Logic to save the updated admin details
    setIsEditingProfile(false); // Exit editing mode after saving
  };
  // Callback for editing a lawyer
  const handleEditLawyer = (lawyer: Lawyer) => {
    setCurrentLawyer(lawyer);
    setSelectedItem("editLawyer");
  };

  const handleBackFromEditLawyer = () => {
    setCurrentLawyer(null);
    setSelectedItem("manageLawyers");
  };


  const handleBackToProfile = () => {
    setIsEditingProfile(false); // Exit editing mode without saving
  };

  // Callback for editing an admin
  const handleEditAdmin = (admin: Admin) => {
    setCurrentAdmin(admin);
    setSelectedItem("editAdmin");
  };

  const handleBackFromEditAdmin = () => {
    setCurrentAdmin(null);
    setSelectedItem("manageAdmins"); // Go back to the manage admins view
  };

   // Callback for editing a client
   const handleEditClient = (client: Client) => {
    setCurrentClient(client);
    setSelectedItem("editClient");
  };

  const handleBackFromEditClient = () => {
    setCurrentClient(null);
    setSelectedItem("manageClients");
  };

  

  
  // Function to render the selected section
  const renderSelectedSection = () => {
    switch (selectedItem) {
      case "dashboard":
        return <DashboardSection />;
      case "profile":
        return isEditingProfile ? (
          <EditProfileSection
            admin={mockAdmin}
            onSave={handleSaveProfile}
            onBack={handleBackToProfile}
          />
        ) : (
          <MyProfileSection
            admin={mockAdmin}
            onEditProfile={handleEditProfile}
          />
        );
      case "manageAdmins":
        return <ManageAdminsSection onEditAdmin={handleEditAdmin} />;
      case "manageLawyers":
        return <ManageLawyersSection onEditLawyer={handleEditLawyer} />;
        case "editLawyer":
          return currentLawyer ? (
            <EditLawyerSection
              lawyer={currentLawyer}
              onSave={() => null} // Replace with actual onSave logic
              onBack={handleBackFromEditLawyer}
            />
          ) : <div>Loading...</div>;
  
      case "manageCases":
        return <ManageCasesSection />;
      case "manageReports":
        return <ManageReportsSection />;
      case "viewLogs":
        return <ViewLogsSection />;
      case "manageClients":
        return <ManageClientsSection onEditClient={handleEditClient} />;
        case "editClient":
        return currentClient ? (
          <EditClientSection
            client={currentClient}
            onSave={() => null} // Replace with actual onSave logic
            onBack={handleBackFromEditClient}
          />
        ) : <div>Loading...</div>;
      case "manageAppointments":
        return <ManageAppointmentSection />;
      
      case "editAdmin":
        return currentAdmin ? (
          <EditAdminSection
            admin={currentAdmin}
            onSave={() => null}
            onBack={handleBackFromEditAdmin}
          />
        ) : (
          // Optionally render something else when currentAdmin is null
          // For example, a loading indicator or a message
          <div>Loading...</div>
        );
      

      
      // You can add more cases here for additional sections
      default:
        return null; // Or render a default/fallback component
    }
  };

  return (
    <div className="flex h-screen text-gray-700c">
      {/* Admin Sidebar */}
      <AdminSidebar
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      {/* Main Content */}
      <div className="flex flex-col w-5/6">
        <Header adminName={"Kashan Humayun"} adminProfilePic={KashanImageURL} />
        {renderSelectedSection()}
      </div>
    </div>
  );
};

export default AdminDashboard;
