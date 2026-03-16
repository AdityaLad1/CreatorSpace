"use client";
import React from "react";
import Dashboard from "@/components/Dashboard";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
