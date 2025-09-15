import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowRoles }) => {
  const token = useSelector((state) => state.jwt);

  if (!token) {
    console.warn("⚠️ No token found, redirecting to login...");
    return <Navigate to="/login" />;
  }

  let decoded;
  try {
    decoded = jwtDecode(token);
    console.log("✅ Decoded Token:", decoded);
  } catch (error) {
    console.error("❌ Invalid token, redirecting to login...");
    return <Navigate to="/login" />;
  }

  // ✅ Fix: Ensure we're getting the correct role
  const userRole = decoded.accountType || decoded.role || decoded.applicantType; 
  console.log("🔹 User Role:", userRole);
  console.log("🔹 Allowed Roles:", allowRoles);

  if (!allowRoles.includes(userRole)) {
    console.warn(`❌ Access denied for role: ${userRole}`);
    return <Navigate to="/unauthorized" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
